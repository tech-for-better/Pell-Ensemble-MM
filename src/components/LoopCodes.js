import React from "react";
import styled from "styled-components";

export default function LoopCodes({ step }) {
  switch (step) {
    case 0:
      return (
        <CodeBlockDiv>
          <p className="step0">Code blocks will appear here</p>
        </CodeBlockDiv>
      );
    case 1:
      return (
        <CodeBlockDiv>
          <p>Score=0</p>
          <p>While the score is less than 50</p>
          <p>Move your hands to play the drums!</p>
        </CodeBlockDiv>
      );
    case 2:
      return (
        <CodeBlockDiv>
          {" "}
          <p>Score=0</p>
          <p>While the score is less than 50</p>
          <p>Move your hands to play the drums!</p>
        </CodeBlockDiv>
      );

    default:
      return null;
  }
}

const CodeBlockDiv = styled.div`
  margin-top: 1rem;
  font-size: 2.5rem;
  width: 48vw;
  height: 40vh;
  text-align: center;
  border-radius: 10px;
  background-color: #caded1;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    color: rgba(35, 0, 60, 1);
    padding-top: 1rem;
    font-family: "RobotoMono Light", monospace;
  }
`;
