import React from "react";
import styled from "styled-components";

export default function Counter({ score }) {
  return (
    <CountDiv>
      <p>score:</p>
      <span>{score}</span>
    </CountDiv>
  );
}

const CountDiv = styled.div`
  width: 30vw;
  height: 10vh;
  /* background-color: #91bbba; */
  text-align: center;
  padding-top: 1%;
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 3rem;
`;
