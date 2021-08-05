import React from 'react';
import styled from "styled-components";
import main_image from "../assets/images/main_image.png"

const HomeStyles = styled.div`{
.container1 {
display: flex;
justify-content: center;
align-items: center;
height: 110vh;
position: relative;
}
.circle {
width: 479px;
height: 479px;
background: #ECE0B0;
border-radius: 50%;
opacity: 72%;
margin-left: 4%
}
@media only screen and (max-width: 768px) {
    .circle {
/* display: none; */
    }
}
}
`;

export default function Home() {
  return (
    <div>
        <HomeStyles>
            <div className="container1">
            <div>
                <h2>Move and Code</h2>
                <p>Learn computer programming fundamentals through movement.
<br />
Explore learning about block code and computer programing 
<br />
by switching on your webcam and completing the movements on screen.</p>
            </div>
            <img className="circle" src={main_image}>
            </img>
            </div>
        </HomeStyles>
    </div>
  );
}