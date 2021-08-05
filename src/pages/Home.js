import React from 'react';
import styled from "styled-components";

const HomeStyles = styled.div`{
.container {

}
.circle {
width: 479px;
height: 479px;
right: 1%;
position: fixed;
top: 50%;
transform: translate(-50%, -50%);
background: #ECE0B0;
border-radius: 50%;
display: inline-block;
}
@media only screen and (max-width: 768px) {
    .circle {
display: none;
    }
}
}
`;

export default function Home() {
  return (
    <div>
        <HomeStyles>
            <div className="container">
            <div className="circle">
            </div>
            </div>
        </HomeStyles>
    </div>
  );
}