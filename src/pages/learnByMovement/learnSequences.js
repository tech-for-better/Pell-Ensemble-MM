import React, { useRef, useState } from "react";
import Countdown from "../../components/Countdown";
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
import Webcam from "react-webcam";
import { drawKeypoints } from "../../utilities";
import styled from "styled-components";

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
        const topy = document.getElementById("mcanvas").offsetTop;
        // if rightwrist pass from the top of the canvas and 100px below
        if (
          pose.keypoints[10].position.y < topy + 100 &&
          topy < pose.keypoints[10].position.y
        ) {
          document.getElementById("square").style.backgroundColor = "blue";
          // document.getElementById("displayArea").innerHTML = "working";
        } else if (
            pose.keypoints[9].position.y < topy + 100 &&
            topy < pose.keypoints[9].position.y
          ) {

            document.getElementById("square1").style.backgroundColor = "blue";
            // document.getElementById("displayArea").innerHTML = "working";
          }

        console.log(pose.keypoints[9]);

        drawCanvas(pose, video, videoWidth, videoHeight, canvasRef);
      }
    };

    const drawCanvas = (pose, video, videoWidth, videoHeight, canvas) => {
      const ctx = canvas.current.getContext("2d");
      canvas.current.width = videoWidth;
      canvas.current.height = videoHeight;

      drawKeypoints(pose.keypoints, 0.6, ctx);
      // drawSkeleton(pose["keypoints"], 0.7, ctx);
    };

    runPosenet();
  }

  return (
    <div>
      {camera === true ? (
        <Webdiv>
          <Countdown></Countdown>
          <div id="square"
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              width: 50,
              height: 50,
              zIndex: 10,
              backgroundColor: "red",
            }}
          ></div>
                    <div id="square1"
            style={{
              position: "absolute",
              left: 550,
              right: 0,
              width: 50,
              height: 50,
              zIndex: 10,
              backgroundColor: "yellow",
            }}
          ></div>
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
          <button style={{    
        position: "relative",
        bottom: 0,
        left: 0,
}}
          onClick={() => {
            setCamera(false);
          }}
        >
          stop
        </button>
        </Webdiv>
      ) : (
<Webdiv>
            <Webcam
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
          <button style={{    
        position: "relative",
        bottom: 0,
        left: 0,
}}
          onClick={() => {
            setCamera(true);
          }}
        >
          start
        </button>
        <div className="instructions">
          <div>
        <h2>What is an algorithm?</h2>
        <p>An algorithm refers to a set of step-by-step instructions for performing a task or solving a problem.
        In this activity, you, the ‘programmer’, will need to follow a set of instructions to complete this activity. </p>
        </div>
          <div>
        <h2>What is a Sequence?</h2>
          <p>In order to complete this challenge, you, the ‘programmer’ will need to touch the boxes on screen to activate them and complete the sequence. 

            If you don’t, there will be a bug in the code and the timer will run out…</p>
            </div>
      </div>
        </Webdiv>
      )}
    </div>
  );
}

const Webdiv = styled.div`{
  position: relative;
  overflow: hidden;
  /* transform: scaleX(-1); */
  width: 80vw;
  margin: 0;
  height: 100vh;
  top: 200px;
  left: 1%;
  .instructions {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: var(--yellow);
    float: right;
    position: relative;
    text-align: center;
    max-width: 40%;
    border-radius: 10%;
    min-height: 55vh;
    max-height: 100vh;
    h2 {
      font-size: 2.2rem;
      bottom: 1.75rem;
    }
    p { font-size: 1.4rem;
      line-height: 1.75rem;
  
    }
  }
  @media only screen and (max-width: 768px) {
    .instructions {
    background-color: var(--yellow);
    float: bottom;
    position: relative;
    right: 1%;
    text-align: center;
    max-width: 35%;
    border-radius: 10%;
}
}
`;
