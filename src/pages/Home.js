import React from 'react';
import styled from "styled-components";

const HomeStyles = styled.div`{
body {
    min-height: 100vh;
}
.circle {
position: absolute;
width: 35vw;
height: 65vh;
right: 10%;
top: 150px;
background: #ECE0B0;
border-radius: 50%;
display: inline-block;
}
}
`;

export default function Home() {
  return (
    <div>
        <HomeStyles>
            <div className="circle">
            </div>
        </HomeStyles>
    </div>
  );
}