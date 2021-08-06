import React from "react";
import styled from "styled-components";
import main_image from "../assets/images/main_image.png";

const HomeStyles = styled.div`
  h1 {
    font-size: 3.7rem;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1.6rem;
  }
  .text {
    text-align: center;
  }
  .container1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
    padding: 0rem 1.5rem 0 1.5rem;
  }
  .circle {
    margin-left: 4%;
  }
  @media only screen and (max-width: 768px) {
    * {
      overflow: hidden;
    }
    .container1 {
      display: inline-block;
    }
    h1 {
      text-align: center;
      font-size: 1.9rem;
    }
    p {
      font-size: 1rem;
      text-align: center;
      margin-bottom: 20px;
    }
  }
`;

export default function Home() {
  return (
    <div>
      <HomeStyles>
        <div className="container1">
          <div className="text">
            <h1>Move and Code</h1>
            <p>
              Learn computer programming fundamentals through movement.
              <br />
              Explore learning about block code and computer programing
              <br />
              by switching on your webcam and completing the movements on
              screen.
            </p>
          </div>
          <img
            className="circle"
            src={main_image}
            alt="pell ensemble workshop pictures"
          />
        </div>
      </HomeStyles>
    </div>
  );
}
