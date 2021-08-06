import React from "react";
import styled from "styled-components";

export default function CodeBlocks({ step }) {
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
          <p>Balls' state = locked</p>
          <p>Raising hands</p>
          <p>wait for 5 seconds</p>
          <p>Balls' state = unlocked</p>
        </CodeBlockDiv>
      );
    case 2:
      return (
        <CodeBlockDiv>
          <p>Balls' position = corner</p>
          <p>Dragging balls</p>
          <p>Balls' position = corner</p>
          <p>Balls' position = in the middle</p>
        </CodeBlockDiv>
      );
    case 3:
      return (
        <CodeBlockDiv>
          <p>Balls' position = corner</p>
          <p>Balls' state = locked</p>
          <p>Raising hands</p>
          <p>Balls' state = unlocked</p>
          <p>Dragging balls</p>
          <p>Balls' position = in the middle</p>
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
    font-family: "Roboto Mono", monospace;
  }
`;
