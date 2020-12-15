/* eslint-disable no-eval */
import React, { useState } from "react";
import { formatNumber } from './formatters/formatNumber.js'
import Header from './components/Header.js'
import ScreenDisplay from './components/ScreenDisplay.js'
import Buttons from './components/Buttons.js'


function App() {
  // adding states
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState(0);

  //handling the events
  const handleButtonClick = (event) => {
    // getting the string vakue of the button
    const btnValue = event.target.innerText;
    // convert the value into integer
    const value = parseInt(btnValue);

    // passing conditions:
    // to set numbers if the calculator is on
    if (number !== " ")
      // eslint-disable-next-line no-const-assign
      setNumber((number * 10) + value);

    // to display results
    if (btnValue === "+" || btnValue === "-" || btnValue === "*" || btnValue === "/" || btnValue === "%" || btnValue === "** 2") {
      // console.log(number.substr(1));
      // setNumber(number.substr(1) + " " + btnValue) // IT DOES NOT WORK
      setNumber(number + " " + btnValue)
    }

    // to display results
    if (btnValue === "=") {
      setNumber(number + " " + btnValue);
      // call function to deal with all calculations
      calculation();
    }

    // deleting last number
    /*
    if (btnValue === "DEL"){
      setNumber(number.slice(0, -1));
    }
    */

    // else
    // console.log(value)
    // setNumber(number + value);
    setNumber(number + btnValue);

    // to clear display - and just do it if the calculator is on
    if (btnValue === "CE") {
      if (number !== " ")
        setNumber(0);
      setResult(0);
    }

    // to turn on/off calculator 
    if (btnValue === "ON/OFF")
      number === " " ? setNumber(0) : setNumber(" ");
  };

  const calculation = () => {
    // because we are keeping all calculation inside the screen, the app will read the sentence and it will make the calculation by using the eval() method 
    // eval() takes values, reads as string and male all calculations
    // PS: no idea WHY a 0 has been added to the numbers
    // console.log(number);
    // lets get rid off it before apply the eval()
    var newNumber = number.substr(1);
    setResult(eval(newNumber));
  };
  // add a error message for division made by 0 
  let errorMessage = "Error";
  return (
    <>
      <Header />
      {/* if the number is greater than zero, then apply the formatNumbers */}
      <ScreenDisplay value={number > 0 ? formatNumber(number) : number} rsValue={result === Infinity ? setResult(errorMessage) : result} />
      <Buttons buttonClicked={handleButtonClick} />
    </>

  );
}

export default App;
