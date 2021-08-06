import React from "react";
import { Link, withRouter } from "react-router-dom";
import { useWindowSize } from 'use-window-size-hook';
import Confetti from "react-confetti";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100%;
  /* min-height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
`;

function Success() {
  const { width, height } = useWindowSize();

  return (
    <AppContainer>
          <h1 className="center">
        {" "}Well done!{" "}
      </h1>
      <Confetti width={width} height={height} />
    
    </AppContainer>
  );
}

export default Success;