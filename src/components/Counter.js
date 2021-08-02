import React from "react";
import styled from "styled-components";

export default function Counter({ count }) {
  return (
    <CountDiv>
      <p>Counter:</p>
      <p>{count}</p>
    </CountDiv>
  );
}

const CountDiv = styled.div`
  width: 5vw;
  height: 20vh;
  background-color: #91bbba;
  text-align: center;
  padding-top: 1%;
`;
