import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
import Webcam from "react-webcam";
import { drawKeypoints } from "../../utilities";
import styled from "styled-components";
import LoopCodes from "../../components/LoopCodes";
import LoopInstruction from "../../components/LoopInstruction";
import Hihat from "../../audio/Hihat.mp3";
import Kick from "../../audio/Kick.mp3";
import hihat from "../../images/hihat1.png";
import drum from "../../images/drum1.png";

export default function LearnLoop() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [step, setStep] = useState(0);
  let score = 0;
  useEffect(() => {
    const runPosenet = async () => {
      const net = await posenet.load({
        inputResolution: { width: 640, height: 480 },
        scale: 0.8,
      });
      setInterval(() => {
        detect(net);
      }, 100);
    };
    const detect = async (net) => {
      if (
        typeof webcamRef.current !== "undefined" &&
        webcamRef.current !== null &&
        //The operation is complete.
        webcamRef.current.video.readyState === 4
      ) {
        // Get Video Properties
        const video = webcamRef.current.video;
        const videoWidth = webcamRef.current.video.videoWidth;
        const videoHeight = webcamRef.current.video.videoHeight;
        // Set video width
        webcamRef.current.video.width = videoWidth;
        webcamRef.current.video.height = videoHeight;
        // Make Detections
        const pose = await net.estimateSinglePose(video);
        /*************************************** Hands up *********************************************************************/
        const wendiv = document.getElementById("webdiv");
        const topy = wendiv.offsetTop;
        const leftx = wendiv.offsetLeft;
        const hihatsound = new Audio(Hihat);
        const kicksound = new Audio(Kick);
        if (
          (step === 1 &&
            pose.keypoints[9].position.y < topy + 250 &&
            pose.keypoints[9].position.x < leftx + 100 &&
            leftx < pose.keypoints[9].position.x) ||
          (step === 1 &&
            pose.keypoints[9].position.y < topy + 250 &&
            leftx + 500 < pose.keypoints[9].position.x &&
            pose.keypoints[9].position.x < leftx + 640)
        ) {
          wendiv.style.borderColor = "green";
          score++;
          document.getElementById("score").innerText = score;
          if (score === 30) {
            setStep(2);
            document.getElementById("fifty").style.display = "block";
            document.getElementById("score").style.display = "none";
          }
        } else {
          wendiv.style.borderColor = "#4b0082";
        }
        if (
          step === 1 &&
          pose.keypoints[9].position.y < topy + 250 &&
          pose.keypoints[9].position.x < leftx + 100 &&
          leftx < pose.keypoints[9].position.x
        ) {
          hihatsound.play();
        }
        if (
          step === 1 &&
          pose.keypoints[9].position.y < topy + 250 &&
          leftx + 500 < pose.keypoints[9].position.x &&
          pose.keypoints[9].position.x < leftx + 640
        ) {
          kicksound.play();
        }
        /***********************************************************************************************************/

        drawCanvas(pose, video, videoWidth, videoHeight, canvasRef);
      }
    };
    const drawCanvas = (pose, video, videoWidth, videoHeight, canvas) => {
      const ctx = canvas.current.getContext("2d");
      canvas.current.width = videoWidth;
      canvas.current.height = videoHeight;

      drawKeypoints([pose.keypoints[9], pose.keypoints[10]], 0.6, ctx);
      // drawSkeleton(pose["keypoints"], 0.7, ctx);
    };

    runPosenet();
  }, [webcamRef, step]);

  return (
    <Wrapper>
      <NoneCameraWrap>
        <LoopInstruction step={step} />
        <LoopCodes step={step} />
      </NoneCameraWrap>
      <CamCanWrap>
        <CountDiv>
          <p>score:</p>
          <span id="score">0</span>
          <span id="fifty">50</span>
        </CountDiv>
        <Webdiv id="webdiv">
          <div
            className="square1"
            style={{
              position: "absolute",
              right: 0,
              top: 100,
              zIndex: 5,
              width: 150,
              height: 150,
              transition: "right 2s",
            }}
          >
            <img
              src={drum}
              alt="drum"
              style={{
                width: 150,
                height: 100,
              }}
            />
          </div>
          <div
            className="square2"
            style={{
              position: "absolute",
              left: 0,
              top: 100,
              zIndex: 5,
              width: 100,
              transition: "right 2s",
            }}
          >
            <img
              src={hihat}
              alt="hihat"
              style={{
                width: 100,
                height: 100,
              }}
            />
          </div>
          <Webcam
            ref={webcamRef}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 640,
              height: 480,
            }}
          />

          <canvas
            id="mcanvas"
            ref={canvasRef}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 640,
              height: 480,
            }}
          />
        </Webdiv>
        <ButtonDiv
          onClick={() => {
            setStep(1);
          }}
        >
          Start
        </ButtonDiv>
      </CamCanWrap>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 4rem;
`;
const NoneCameraWrap = styled.div`
  width: 50vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-around; */
`;
const CamCanWrap = styled.div`
  position: relative;
  width: 50vw;
  height: 90vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
`;
const Webdiv = styled.div`
  position: relative;
  width: 680px;
  height: 520px;
  transform: scaleX(-1);
  border-color: #4b0082;
  border-style: double;
  border-width: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const ButtonDiv = styled.div`
  font-size: 3rem;
  border-radius: 10px;
  font-weight: bold;
  position: absolute;
  padding: 1.5rem 2.5rem;
  bottom: 5px;
  left: 40%;
  cursor: pointer;
  color: white;
  background-color: #4b0082;
  font-family: "Gowun Batang", serif;
  &:hover {
    background-color: #6f20aa;
  }
`;

const CountDiv = styled.div`
  width: 30vw;
  height: 10vh;
  text-align: center;
  padding-top: 1%;
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 3rem;
  #fifty {
    display: none;
  }
`;
