import React from "react";
import styled from "styled-components";

export default function StartInstructions() {
  return (
    <InstructionDiv>
      <h2 className="instructions">
        Start the camera and Follow the instruction
      </h2>
    </InstructionDiv>
  );
}

const InstructionDiv = styled.div`
  font-size: 1.5rem;
  width: 60vw;
  height: 20vh;
  background-color: #90ccf4;
  text-align: center;
  padding-top: 1%;
`;
