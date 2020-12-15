// import { numberFormatter } from '../formatter/numberFormatters.js'

window.addEventListener("load", (event) => {
    console.log("Loading page");
    start();

});

let a;
let b;
let numberA;
let NumberB;
let sumAB;
let getInputA;
let getInputB;
let btnCalculate;
let btnClear;

function start() {
    // passing events
    getInputA = document.querySelector("#number--a");
    getInputB = document.querySelector("#number--b");

    getInputA.addEventListener("keyup", handleInputChange);
    getInputB.addEventListener("keyup", handleInputChange);

    btnCalculate = document.querySelector("#btn--calculate");
    btnClear = document.querySelector("#btn--clear");

    btnCalculate.addEventListener("click", handleCalculateButton);
    btnClear.addEventListener("click", handleClearButton);
}

function handleInputChange(event) {
    if (event.key === "Enter") {
        console.log("enter pressed");
        calculation();
    }
}

function handleCalculateButton(event) {
    console.log("getting numbers")
    calculation();
}

function handleClearButton(event) {
    getInputA.value = "";
    getInputB.value = "";
}

function formatNumber(number) {
    return new Intl.NumberFormat('pt-BR').format(number);
}

function calculation() {
    // getting numbers
    a = document.querySelector("#number--a").value;
    b = document.querySelector("#number--b").value;
    numberA = parseInt(a, 10);
    numberB = parseInt(b, 10);

    // adding calculation mthods
    sumNumbers(numberA, numberB);
    subNumbersOne(numberA, numberB);
    subNumbersTwo(numberB, numberA);
    multNumbers(numberA, numberB);
    divNumbersOne(numberA, numberB);
    divNumbersTwo(numberB, numberA);
    powerA(numberA);
    powerB(numberB);
    divNumberA(numberA);
    divNumberB(numberB);
    factorialOfA(numberA);
    factorialOfB(numberB);
}

function sumNumbers(numberA, numberB) {
    let sumAB = numberA + numberB;
    let result = document.querySelector("#sum");
    return result.value = sumAB;
}

function subNumbersOne(numberA, numberB) {
    let subAB = numberA - numberB;
    let result = document.querySelector("#sub--one");
    return result.value = subAB;
}

function subNumbersTwo(numberB, numberA) {
    let subBA = numberB - numberA;
    let result = document.querySelector("#sub--two");
    return result.value = subBA;
}

function multNumbers(numberA, numberB) {
    let multAB = numberA * numberB;
    let result = document.querySelector("#mult");
    return result.value = multAB;
}

function divNumbersOne(numberA, numberB) {
    let divAB = numberA / numberB;
    let result = document.querySelector("#div--one");
    return result.value = formatNumber(divAB);
}

function divNumbersTwo(numberB, numberA) {
    let divBA = numberB / numberA;
    let result = document.querySelector("#div--two");
    return result.value = formatNumber(divBA);
}

function powerA(numberA) {
    //  let powerOfA = numberA**2
    let powerOfA = Math.pow(numberA, 2)
    let result = document.querySelector("#power--a");
    return result.value = powerOfA;
}

function powerB(numberB) {
    // let powerOfB = numberB**2)
    let powerOfB = Math.pow(numberB, 2)
    let result = document.querySelector("#power--b");
    return result.value = powerOfB;
}

function divNumberA(numberA) {
    let result = document.querySelector("#div--a");
    let aux = 0;
    let array = [];
    for (let i = 1; i <= numberA; i++) {
        if (numberA % i == 0) {
            ++aux;
            array.push(i);
            result.value = array + "-(" + array.length + ")";
            // console.log(array + "-(" + array.length + ")")
        }
    }
}

function divNumberB() {
    let result = document.querySelector("#div--b");
    let aux = 0;
    let array = [];
    for (let i = 1; i <= numberB; i++) {
        if (numberB % i == 0) {
            ++aux;
            array.push(i);
            result.value = array + "-(" + array.length + ")";
        }
    }
}

function factorialOfA(numberA) {
    let result = document.querySelector("#fact--a");
    if (numberA < 0)
        return result.value = -1;
    else if (numberA == 0)
        return result.value = 1;
    else if (numberA > 21)
        return result.value = "Number is too big";
    else {
        return result.value = formatNumber(numberA * factorialOfB(numberA - 1));
    }
}

function factorialOfB(numberB) {
    let result = document.querySelector("#fact--b");
    if (numberB < 0)
        return result.value = -1;
    else if (numberB == 0)
        return result.value = 1;
    else if (numberB > 21)
        return result.value = "Number is too big";
    else {
        return result.value = formatNumber(numberB * factorialOfB(numberB - 1));
    }
}


