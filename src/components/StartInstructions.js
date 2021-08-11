import React from "react";
import styled from "styled-components";

export default function StartInstructions({ step }) {
  switch (step) {
    case 0:
      return (
        <InstructionDiv>
          <p>Let's create some blocks of code...</p>
          <p>Click on the start button</p>
          <p>and follow the instructions</p>
        </InstructionDiv>
      );
    case 1:
      return (
        <InstructionDiv>
          <p> Raise your hand and reach to the top corners</p>
          <p> Keep your hands on the balls until they're unlocked</p>
          <p>if the border turns green, you're striking the right pose!</p>
        </InstructionDiv>
      );
    case 2:
      return (
        <InstructionDiv>
          <p>Raise your hands and reach to the top corners</p>
          <p> Drag your hands very slowly towards the basket</p>
        </InstructionDiv>
      );
    case 3:
      return (
        <InstructionDiv>
          <p className="firstp">AMAZING You have created some blocks of code</p>
        </InstructionDiv>
      );
    default:
      return null;
  }
}

const InstructionDiv = styled.div`
  margin-top: 2rem;
  font-size: 2.5rem;
  width: 48vw;
  height: 43vh;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #cad9de;
  p {
    padding: 1rem;
    font-family: "Gowun Batang", serif;
    /* background: linear-gradient(
      90deg,
      rgba(5, 125, 34, 1) 5%,
      rgba(128, 33, 62, 1) 40%,
      rgba(35, 0, 60, 1) 100%
    );
    background-clip: text;
    -webkit-text-fill-color: transparent; */
    display: inline-block;
  }
`;
