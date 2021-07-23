import React from "react";
import StartInstructions from "../../components/StartInstructions";
import drum from "../../images/drum.png";
import styled from "styled-components";
export default function LearnLoops() {
  return (
    <div>
      <StartInstructions />

      <Drumcont>
        <video autoplay></video>
        <Styledimg class="virtual-drum" src={drum} alt="drum" />
      </Drumcont>
    </div>
  );
}
/**************************************/
var constraints = { audio: true, video: { width: 1280, height: 720 } };

navigator.mediaDevices
  .getUserMedia(constraints)
  .then(function (mediaStream) {
    var video = document.querySelector("video");
    video.srcObject = mediaStream;
    video.onloadedmetadata = function (e) {
      video.play();
    };
  })
  .catch(function (err) {
    console.log(err.name + ": " + err.message);
  });

/************************************/

const Styledimg = styled.img`
  width: 30%;
  height: 30%;
`;
const Drumcont = styled.div`
  width: 50vw;
  height: 60vh;
  margin: 40px;
  border: solid 5px black;
`;
