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
    case 2:
      return (
        <InstructionDiv>
          <p>Step 22222222 instructions</p>
        </InstructionDiv>
      );
    default:
      return null;
  }
}

const InstructionDiv = styled.div`
  font-size: 1.5rem;
  width: 45vw;
  height: 40vh;
  text-align: center;
  padding-top: 1%;
  border-radius: 10px;
  background-color: #cad9de;
  opacity: 1;
  background-image: radial-gradient(#008ac5 0.4px, transparent 0.4px),
    radial-gradient(#008ac5 0.4px, #cad9de 0.4px);
  background-size: 16px 16px;
  background-position: 0 0, 8px 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
