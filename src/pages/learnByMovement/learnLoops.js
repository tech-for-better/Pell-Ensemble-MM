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
import unnamed from "../../images/unnamed.svg";
import { nonEmptyArray } from "check-types";
// import appsound from "../../audio/app_sounds_note1.mp3";

export default function LearnLoops() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const webdiv = document.querySelector(".webdiv");
  const [camera, setCamera] = useState(false);
  const [count, setCount] = useState(0);

  let step = 0;
  //  Load posenet
  if (camera === true) {
    step = 1;
    /******************************* setting camera, canvas and poseNet */
    webdiv.style.display = "block";
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
        const topy = document.getElementById("mcanvas").offsetTop;
        const leftx = document.getElementById("mcanvas").offsetLeft;
        const square1 = document.querySelector(".square1");
        const square2 = document.querySelector(".square2");
        const flag = document.querySelector(".flag");
        let counter = null;
        if (
          /*         left hand if on the position*/
          pose.keypoints[9].position.y < topy + 100 &&
          pose.keypoints[9].position.x < leftx + 100 &&
          leftx < pose.keypoints[9].position.x
        ) {
          flag.style.backgroundColor = "green";
          counter = setTimeout(() => setCount(count + 1), 1000);
          // square.style.left = "100px";
          console.log("working");
        } else {
          clearTimeout(counter);
          flag.style.backgroundColor = "darkMagenta";
        }
        if (count === 5) {
          step = 2;
          square1.style.display = "none";
          square2.style.display = "none";
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
        <Counter count={count} />
        <CodeBlocks />
      </div>
      <div>
        <StartInstructions step={step} />
        <CameraSteps>
          <LoopSteps />
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
                  transition: "left 2s",
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
                  setCamera(true);
                }}
              >
                start
              </button>
            </ButtonDiv>
          </CamCanWrap>
        </CameraSteps>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const CameraSteps = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
  display: none;
  transform: scaleX(-1);
`;

const ButtonDiv = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
`;
