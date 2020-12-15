import React from 'react'
import styled from 'styled-components';

const ButtonContainer = styled.div` 
width: 430px;
height: auto;
display: flex;
flex-wrap: wrap;
flex-flow: reverse;
margin: 2% auto;
border: none;
` ;

const Button = styled.button`
  flex: 1 0 20%;
  padding: 15px;
  margin: 1%;
  background-color: var(--black);
  border: 2px solid var(--white);
  border-radius: 4px;
  color: var(--white);
  cursor: pointer;
  font-weight: bold;

  &:hover:not(:nth-child(4)):not(:nth-child(8)):not(:nth-child(12)):not(:nth-child(15)):not(:nth-child(16)):not(:nth-child(17)):not(:nth-child(18)):not(:nth-child(19)):not(:nth-child(20)){
    background: var(--white);
    border-color: var(--white);
    color: var(--black);
    transition: all 0.4s ease 0s;
  }

  &:hover:nth-child(4), :hover:nth-child(8){
    background: var(--red);
    border-color: var(--red);
    color: var(--white);
    transition: all 0.4s ease 0s;
  }

  &:hover:nth-child(12){
    background: var(--blue);
    border-color: var(--blue);
    color: var(--white);
    transition: all 0.4s ease 0s;
  }

  &:hover:nth-child(15), :hover:nth-child(16), :hover:nth-child(17), :hover:nth-child(18), :hover:nth-child(19), :hover:nth-child(20){
    background: var(--dk-gray);
    border-color: var(--dk-gray);
    color: var(--white);
    transition: all 0.4s ease 0s;
  }

`;

export default function Buttons({ buttonClicked }) {
    // adding a handle event for button clicks
    const handleButtonClick = (event) => {
        buttonClicked(event);
    };

    // adding an array with all buttons/elements are within the calculator
    const btn = ["1", "2", "3", "ON/OFF", "4", "5", "6", "CE", "7", "8", "9", "=", ".", "0", "** 2", "%", "+", "-", "*", "/"];

    return (
        <ButtonContainer>
            {/* map the array and return for each element a Button component with its props and handle events */}
            {btn.map((item, index) => {
                return (
                    <Button key={index} onClick={handleButtonClick}>{item}</Button>)
            })}
        </ButtonContainer>
    )
}
