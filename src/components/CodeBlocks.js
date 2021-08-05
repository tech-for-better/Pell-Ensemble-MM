import React from "react";
import styled from "styled-components";

export default function CodeBlocks({ step }) {
  switch (step) {
    case 0:
      return (
        <CodeBlockDiv>
          <p>hh</p>
        </CodeBlockDiv>
      );
    case 1:
      return (
        <CodeBlockDiv>
          <p>till the counter reaches to 5</p>
          <p>keep hands on the top corners </p>
          <p>if (counter reaches to 5)</p>
          <p>the the balls will be revealed</p>
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
  width: 45vw;
  height: 45vh;
  text-align: center;
  padding-top: 1%;
  border-radius: 10px;
  background-color: #caded1;
  opacity: 1;
  background-image: radial-gradient(#008ac5 0.4px, transparent 0.4px),
    radial-gradient(#008ac5 0.4px, #caded1 0.4px);
  background-size: 16px 16px;
  background-position: 0 0, 8px 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
