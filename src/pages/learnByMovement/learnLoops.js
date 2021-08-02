import React, { useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
import Webcam from "react-webcam";
import { drawKeypoints } from "../../utilities";
import styled from "styled-components";
import Counter from "../../components/Counter";
import CodeBlocks from "../../components/CodeBlocks";
import StartInstructions from "../../components/StartInstructions";
import LoopSteps from "../../components/LoopSteps";
import bin from "../../images/bin.svg";
// import appsound from "../../audio/app_sounds_note1.mp3";

export default function LearnAlgorithm() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [camera, setCamera] = useState(false);
  //  Load posenet
  if (camera === true) {
    const runPosenet = async () => {
      const net = await posenet.load({
        inputResolution: { width: 640, height: 480 },
        scale: 0.8,
      });
      //
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
        // console.log(pose.keypoints[9].position);

        /*************************************** Hands up *********************************************************************/
        const topy = document.getElementById("mcanvas").offsetTop;
        // const audioObj = new Audio(appsound);
        // // if rightwrist pass from the top of the canvas and 100px below
        // if (
        //   pose.keypoints[9].position.y < topy + 100 &&
        //   topy < pose.keypoints[9].position.y
        // ) {
        //   setTimeout(() => audioObj.play(), 100);
        //   console.log("working");
        // }

        /***********************************************************************************************************/
        const leftx = document.getElementById("mcanvas").offsetLeft;
        const square = document.querySelector(".square");
        if (
          pose.keypoints[9].position.y < topy + 150 &&
          pose.keypoints[9].position.x < leftx + 250 &&
          leftx + 150 < pose.keypoints[9].position.x
        ) {
          // square.style.backgroundColor = "green";
          square.style.left = "100px";
          // square.style.transform = "scaleX(1.5)";
          // console.log("working");
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
  }

  return (
    <Wrapper>
      <div>
        <Counter />
        <CodeBlocks />
      </div>
      <div>
        <StartInstructions />
        <CameraSteps>
          <LoopSteps />
          <CamCanWrap>
            <Webdiv className="webdiv">
              <div
                className="square"
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  width: 50,
                  height: 50,
                  zIndex: 10,
                  backgroundColor: "red",
                  transition: "left 2s",
                }}
              >
                <img src={bin} alt="bin" />
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
            <div>
              <button
                onClick={() => {
                  setCamera(true);
                }}
              >
                start
              </button>
            </div>
          </CamCanWrap>
        </CameraSteps>
      </div>
    </Wrapper>
  );
}

const Webdiv = styled.div`
  position: relative;
  width: 640px;
  height: 480px;
  // display: none;
  transform: scaleX(-1);
`;
const CamCanWrap = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const CameraSteps = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
