import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
import Webcam from "react-webcam";
import { drawKeypoints } from "../../utilities";
import styled from "styled-components";
import CodeBlocks from "../../components/CodeBlocks";
import StartInstructions from "../../components/StartInstructions";
// import appsound from "../../audio/app_sounds_note1.mp3";

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
  padding-top: 5rem;
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
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
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
  bottom: 40px;
  left: 40%;
  cursor: pointer;
  color: white;
  background-color: #4b0082;
  font-family: "Gowun Batang", serif;
  &:hover {
    background-color: #6f20aa;
  }
`;
