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
  width: 50vw;
  height: 50vh;
  background-color: #f98988;
  text-align: center;
  padding-top: 1%;
`;
