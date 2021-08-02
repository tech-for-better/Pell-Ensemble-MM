import React from "react";
import styled from "styled-components";

export default function StartInstructions({ step }) {
  switch (step) {
    case 0:
      return (
        <InstructionDiv>
          <p>Step 0 instructions</p>
        </InstructionDiv>
      );
    case 1:
      return (
        <InstructionDiv>
          <p>Step 1 instructions</p>
        </InstructionDiv>
      );
    default:
      return null;
  }
}

const InstructionDiv = styled.div`
  font-size: 1.5rem;
  width: 60vw;
  height: 20vh;
  background-color: #90ccf4;
  text-align: center;
  padding-top: 1%;
`;
