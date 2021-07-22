import React from 'react'
import styled from 'styled-components';

export default function StartInstructions() {
    return (
        <div>
            <StartHeader>
            <h2 className="instructions">Follow the movement below</h2>        
            </StartHeader>
        </div>
    )
}

const StartHeader = styled.div`

.instructions {
    font-size: 1.5rem;
}
`;