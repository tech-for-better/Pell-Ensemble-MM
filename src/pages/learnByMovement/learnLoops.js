import React from "react";
import StartInstructions from "../../components/StartInstructions";
import drum from "../../images/drum.png";
import styled from "styled-components";
export default function LearnLoops() {
  return (
    <div>
      <StartInstructions />
      <button onClick={startWebcam} id="start">
        Start camera
      </button>
      <button onClick={stopWebcam} id="stop">
        Stop camera
      </button>
      <Styledvid autoplay></Styledvid>
      <canvas id="videoCanvas"></canvas>
      <Drumcont>
        <Styledimg class="virtual-drum" src={drum} alt="drum" />
      </Drumcont>
    </div>
  );
}
/**************************************/
const start = document.querySelector("#start");

function startWebcam() {
  var constraints = { audio: false, video: true };

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function (mediaStream) {
      var video = document.querySelector("video");
      video.srcObject = mediaStream;
      video.play();
    })
    .catch(function (err) {
      console.log(err.name + ": " + err.message);
    });
}

function stopWebcam() {
  var video = document.querySelector("video");
  video.srcObject = null;
}

/************************************/
// function drawImage() {
//   var video = document.querySelector("video");
//   var canvas = document.querySelector("#videoCanvas");
//   var ctx = canvas.getContext("2d");

//   canvas.width = video.videoWidth;
//   canvas.height = video.videoHeight;

//   ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
// }

/***********************************/
const Styledimg = styled.img`
  width: 30%;
  height: 30%;
`;
const Drumcont = styled.div`
  minwidth: 50vw;
  height: 60vh;
  margin: 40px;
  border: solid 5px black;
`;

const Styledvid = styled.video`
  display: block;
  transform: scaleX(-1);
  width: 80vw;
  margin: auto;
`;
