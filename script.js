let displayValue = '0';
let firstOperand = null;
let secondOperand = false;
let operator = null;

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = displayValue;
}

function appendNumber(number) {
    if (secondOperand) {
        displayValue = number.toString();
        secondOperand = false;
    } else {
        displayValue = displayValue === '0' ? number.toString() : displayValue + number;
    }
    updateDisplay();
}

function setOperation(nextOperator) {
    const value = parseFloat(displayValue);

    if (operator && secondOperand) {
        operator = nextOperator;
        return;
    }

    if (firstOperand === null) {
        firstOperand = value;
    } else if (operator) {
        const result = performCalculation[operator](firstOperand, value);

        displayValue = `${parseFloat(result.toFixed(7))}`;
        firstOperand = result;
    }

    secondOperand = true;
    operator = nextOperator;
    updateDisplay();
}

const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
    '=': (firstOperand, secondOperand) => secondOperand
};

function calculate() {
    let result = null;

    if (operator && !secondOperand) {
        const value = parseFloat(displayValue);
        result = performCalculation[operator](firstOperand, value);
        displayValue = `${parseFloat(result.toFixed(7))}`;
        firstOperand = null;
        secondOperand = false;
        operator = null;
    }

    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    firstOperand = null;
    secondOperand = false;
    operator = null;
    updateDisplay();
}
