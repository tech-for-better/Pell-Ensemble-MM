import React from "react";
import styled from "styled-components";

export default function StartInstructions({ step }) {
  switch (step) {
    case 0:
      return (
        <InstructionDiv>
          <p>Let's create some blocks of code with following the movement</p>
        </InstructionDiv>
      );
    case 1:
      return (
        <InstructionDiv>
          <p>You will unlock the balls</p>
          <p>
            {" "}
            Raise your hand and reach to the top corners Keep hand on the locks
            if the border around flashing to green means your position is fine
            wait for 5 seconds
          </p>
        </InstructionDiv>
      );
    case 2:
      return (
        <InstructionDiv>
          <p>
            Raise your hand and reach to the top corners Drag the balls while
            your hand slowly towards the basket{" "}
          </p>
        </InstructionDiv>
      );
    case 3:
      return (
        <InstructionDiv>
          <p>AMAZING You have created some blocks of</p>
        </InstructionDiv>
      );
    default:
      return null;
  }
}

const InstructionDiv = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  width: 48vw;
  height: 47vh;
  padding-top: 1%;
  border-radius: 10px;
  background-color: #cad9de;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
