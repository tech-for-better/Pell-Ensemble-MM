import React from "react";
import styled from "styled-components";

export default function Counter() {
  return (
    <CountDiv>
      <h3>Counter:</h3>
    </CountDiv>
  );
}

const CountDiv = styled.div`
  width: 20vw;
  height: 20vh;
  background-color: #91bbba;
  text-align: center;
  padding-top: 1%;
`;
