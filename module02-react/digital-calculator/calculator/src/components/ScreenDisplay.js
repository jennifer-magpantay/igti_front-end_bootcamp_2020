import React from 'react';
import styled from 'styled-components';

const Display = styled.div`
width: 420px;
height: 60px;
display: flex;
flex-direction: column;
justify-content: center;
margin: 0 auto;
background-color: var(--white);
border: none;
border-radius: 4px;

& span {
    padding-right: 15px;
    margin-left: auto;
    color: var(--dk-gray);
}

& h2 {
    padding-right: 15px;
    margin-left: auto;
    color: var(--black);
    font-weight: bold;
}
`;

export default function ScreenDisplay({ value, rsValue }) {
    return (
        <Display>
            <span>{value}</span>
            <h2>{rsValue}</h2>
        </Display>
    )
}
