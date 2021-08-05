import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
import Webcam from "react-webcam";
import { drawKeypoints } from "../../utilities";
import styled from "styled-components";
import CodeBlocks from "../../components/CodeBlocks";
import StartInstructions from "../../components/StartInstructions";
// import appsound from "../../audio/app_sounds_note1.mp3";
import net from "../../images/net.png";
import ball from "../../images/ball.png";

export default function CodeBlock() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [step, setStep] = useState(0);

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
        const square1 = document.querySelector(".square1");
        const square2 = document.querySelector(".square2");
        const square3 = document.querySelector(".square3");
        const square4 = document.querySelector(".square4");

        if (
          /*         left hand if on the position*/
          pose.keypoints[9].position.y < topy + 100 &&
          pose.keypoints[9].position.x < leftx + 100 &&
          leftx < pose.keypoints[9].position.x
        ) {
          wendiv.style.borderColor = "green";
          square1.style.opacity = 0;
          square2.style.opacity = 0;
          if (square2.style.opacity === 0) {
            setStep(2);
          }
        } else {
          wendiv.style.borderColor = "red";
        }
        if (step === 2) {
          if (
            /*         left hand if on the position*/
            pose.keypoints[9].position.y < topy + 100 &&
            pose.keypoints[9].position.x < leftx + 100 &&
            leftx < pose.keypoints[9].position.x
          ) {
            wendiv.style.borderColor = "green";
          } else {
            wendiv.style.borderColor = "red";
          }
          if (
            pose.keypoints[9].position.y < topy + 100 &&
            pose.keypoints[9].position.x < leftx + 150 &&
            leftx + 100 < pose.keypoints[9].position.x
          ) {
            wendiv.style.borderColor = "green";
            square3.style.left = "50px";
            square4.style.right = "50px";
          }
          if (
            square3.style.left === "50px" &&
            pose.keypoints[9].position.y < topy + 100 &&
            pose.keypoints[9].position.x < leftx + 200 &&
            leftx + 150 < pose.keypoints[9].position.x
          ) {
            wendiv.style.borderColor = "green";
            square3.style.left = "100px";
            square4.style.right = "100px";
          }

          if (
            square3.style.left === "100px" &&
            pose.keypoints[9].position.y < topy + 100 &&
            pose.keypoints[9].position.x < leftx + 260 &&
            leftx + 200 < pose.keypoints[9].position.x
          ) {
            wendiv.style.borderColor = "green";
            square3.style.left = "240px";
            square4.style.right = "240px";
          }
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
        <StartInstructions step={step} />
        <CodeBlocks step={step} />
      </NoneCameraWrap>
      <CamCanWrap>
        <Webdiv id="webdiv">
          <div
            className="square1"
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              width: 100,
              height: 100,
              zIndex: 10,
              backgroundColor: "green",
              transition: "opacity 2s",
            }}
          >
            1
          </div>
          <div
            className="square2"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 100,
              height: 100,
              zIndex: 10,
              backgroundColor: "green",
              transition: "opacity 2s",
            }}
          >
            2
          </div>
          <div
            className="square3"
            style={{
              position: "absolute",
              left: 0,
              top: 0,

              zIndex: 5,
              transition: "left 2s",
            }}
          >
            <img
              src={ball}
              alt="ball"
              style={{
                width: 80,
                height: 80,
              }}
            />
          </div>

          <div
            className="square4"
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              zIndex: 5,
              transition: "right 2s",
            }}
          >
            <img
              src={ball}
              alt="ball"
              style={{
                width: 80,
                height: 80,
              }}
            />
          </div>
          <div
            className="basket"
            style={{
              position: "absolute",
              right: 240,
              top: -10,
              zIndex: 10,
            }}
          >
            <img
              src={net}
              alt="basket"
              style={{
                width: 150,
                height: 140,
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
        <ButtonDiv>
          <button
            onClick={() => {
              // setCamera(true);
              setStep(1);
            }}
          >
            start
          </button>
        </ButtonDiv>
      </CamCanWrap>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 5rem;
`;
const NoneCameraWrap = styled.div`
  width: 50vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const CamCanWrap = styled.div`
  position: relative;
  width: 50vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
`;
const Webdiv = styled.div`
  position: relative;
  width: 680px;
  height: 520px;
  transform: scaleX(-1);
  border-color: red;
  border-style: double;
  border-width: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const ButtonDiv = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
`;
