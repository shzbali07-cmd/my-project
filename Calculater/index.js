let firstNumber = "";
let secondNumber = "";
let operator = "";
let currentInput = "";

// display update
function updateDisplay(value){
    document.getElementById("out").innerHTML = value || "0";
}

// number press
function pressNumber(num){
    currentInput += num;

    if(operator === ""){
        // first number typing
        updateDisplay(currentInput);
    }else{
        // show full expression
        updateDisplay(firstNumber + " " + operator + " " + currentInput);
    }
}

// operator set
function setOperator(op){

    if(currentInput === "") return;

    firstNumber = currentInput;
    operator = op;
    currentInput = "";

    // show operator on screen
    updateDisplay(firstNumber + " " + operator);
}

// calculate
function calculate(){

    if(currentInput === "" || firstNumber === "" || operator === "") return;

    secondNumber = currentInput;

    let result = 0;

    if(operator === "+"){
        result = Number(firstNumber) + Number(secondNumber);
    }
    else if(operator === "-"){
        result = Number(firstNumber) - Number(secondNumber);
    }
    else if(operator === "*"){
        result = Number(firstNumber) * Number(secondNumber);
    }
    else if(operator === "/"){
        result = Number(firstNumber) / Number(secondNumber);
    }

    updateDisplay(result);

    // reset for next calculation
    currentInput = result.toString();
    firstNumber = "";
    secondNumber = "";
    operator = "";
}

// clear
function clearDisplay(){
    firstNumber = "";
    secondNumber = "";
    operator = "";
    currentInput = "";
    updateDisplay("0");
}