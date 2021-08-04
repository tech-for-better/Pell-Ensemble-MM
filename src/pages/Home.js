import React from 'react';
import styled from "styled-components";

const HomeStyles = styled.div`{
body {
    min-height: 100vh;
}
}
`;

export default function Home() {
  return (
    <div>
        <HomeStyles />
    </div>
  );
}