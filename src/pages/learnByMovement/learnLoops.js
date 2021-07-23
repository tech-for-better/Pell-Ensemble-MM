import React from "react";
import StartInstructions from "../../components/StartInstructions";
import drum from "../../images/drum.png";
import styled from "styled-components";
export default function LearnLoops() {
  return (
    <div>
      <StartInstructions />
      <div class="drum-container">
        <Styledimg src={drum} alt="drum" />
      </div>
    </div>
  );
}

const Styledimg = styled.img`
  width: 30%;
  height: 30%;
`;
