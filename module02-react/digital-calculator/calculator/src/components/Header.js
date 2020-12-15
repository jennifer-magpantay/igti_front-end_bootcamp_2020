import React from 'react';
import styled from 'styled-components';

const HeaderTitle = styled.header`
  width: 100%;
  height: auto;
  margin: 10% 0;
  & h1 {
    text-align: center;
    text-transform: uppercase;
  }
  @media (min-width: 800px){
     margin: 10% 0 5% 0;  
  }
`;

export default function Header() {
  return (
    <HeaderTitle>
      <h1>digital calculator</h1>
    </HeaderTitle>
  )
}
