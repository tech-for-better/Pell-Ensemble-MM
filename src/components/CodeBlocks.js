import React from "react";
import styled from "styled-components";

export default function CodeBlocks({ step }) {
  switch (step) {
    case 0:
      return (
        <CodeBlockDiv>
          <p>Code blocks will appear here</p>
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
          <p>Step</p>
        </CodeBlockDiv>
      );
    case 3:
      return (
        <CodeBlockDiv>
          <p>St</p>
        </CodeBlockDiv>
      );
    default:
      return null;
  }
}

const CodeBlockDiv = styled.div`
  font-size: 2rem;
  width: 48vw;
  height: 40vh;
  text-align: center;
  padding-top: 1%;
  border-radius: 10px;
  background-color: #caded1;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
