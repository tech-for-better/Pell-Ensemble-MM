import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
import Webcam from "react-webcam";
import { drawKeypoints } from "../../utilities";
import styled from "styled-components";
import CodeBlocks from "../../components/CodeBlocks";
import StartInstructions from "../../components/StartInstructions";
// import appsound from "../../audio/app_sounds_note1.mp3";
import unnamed from "../../images/unnamed.svg";

export default function LearnLoops() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  // const webdiv = document.querySelector(".webdiv");
  // const [camera, setCamera] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    //  Load posenet

    /******************************* setting camera, canvas and poseNet */
    // webdiv.style.display = "block";
    const runPosenet = async () => {
      const net = await posenet.load({
        inputResolution: { width: 640, height: 480 },
        scale: 0.8,
      });
      //
      setInterval(() => {
        detect(net);
      }, 1000);
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
        // console.log(pose.keypoints[9].position);
        /*************************************** Hands up *********************************************************************/
        const topy = document.getElementById("mcanvas").offsetTop;
        const leftx = document.getElementById("mcanvas").offsetLeft;
        const square1 = document.querySelector(".square1");
        const square2 = document.querySelector(".square2");
        const square3 = document.querySelector(".square3");
        const flag = document.querySelector(".flag");
        // let audioObj = new Audio(appsound);

        if (
          /*         left hand if on the position*/
          pose.keypoints[9].position.y < topy + 100 &&
          pose.keypoints[9].position.x < leftx + 100 &&
          leftx < pose.keypoints[9].position.x
        ) {
          flag.style.backgroundColor = "green";
          // audioObj.play();
          square1.style.opacity = 0;
          square2.style.opacity = 0;
          setStep(2);
          // square.style.left = "100px"
        } else {
          flag.style.backgroundColor = "darkMagenta";
        }
        if (step === 2) {
          if (
            /*         left hand if on the position*/
            pose.keypoints[9].position.y < topy + 100 &&
            pose.keypoints[9].position.x < leftx + 100 &&
            leftx < pose.keypoints[9].position.x
          ) {
            flag.style.backgroundColor = "green";
          } else {
            flag.style.backgroundColor = "darkMagenta";
          }
          if (
            pose.keypoints[9].position.y < topy + 100 &&
            pose.keypoints[9].position.x < leftx + 150 &&
            leftx + 100 < pose.keypoints[9].position.x
          ) {
            square3.style.left = "50px";
          }
          if (
            square3.style.left === "50px" &&
            pose.keypoints[9].position.y < topy + 100 &&
            pose.keypoints[9].position.x < leftx + 200 &&
            leftx + 150 < pose.keypoints[9].position.x
          ) {
            square3.style.left = "100px";
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
        <Webdiv className="webdiv">
          <div
            className="flag"
            style={{
              position: "absolute",
              left: 0,
              top: -60,
              width: 50,
              height: 50,
              zIndex: 10,
              backgroundColor: "darkMagenta",
            }}
          ></div>
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
              width: 50,
              height: 50,
              zIndex: 5,
              backgroundColor: "blue",
              transition: "left 2s",
            }}
          >
            3
          </div>

          <div
            className="square4"
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              width: 50,
              height: 50,
              zIndex: 5,
              backgroundColor: "blue",
              transition: "right 2s",
            }}
          >
            4
          </div>
          <div
            className="basket"
            style={{
              position: "absolute",
              right: 320,
              top: 0,
              display: "none",
              zIndex: 10,
            }}
          >
            <img src={unnamed} alt="basket" />
          </div>
          <Webcam
            ref={webcamRef}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
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
              right: 0,
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
`;
const NoneCameraWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const CamCanWrap = styled.div`
  position: relative;
  width: 640px;
  height: 480px;
  background-color: red;
`;
const Webdiv = styled.div`
  position: relative;
  width: 640px;
  height: 480px;
  // display: none;
  transform: scaleX(-1);
`;

const ButtonDiv = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
`;
