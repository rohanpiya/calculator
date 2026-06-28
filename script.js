function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Sorry! Cannot divide by 0";
    }
    return a / b;
}

function operate(firstNum, secondNum, operator) {
    if (operator == '+') {
        return add(firstNum, secondNum);
    } else if (operator == '-') {
        return subtract(firstNum, secondNum);
    } else if (operator == '*') {
        return multiply(firstNum, secondNum);
    } else if (operator == '/') {
        return divide(firstNum, secondNum);
    }
}

function clearCalculator() {
    firstNum = '';
    secondNum = '';
    operator = undefined;
    screen.replaceChildren();
}

let firstNum = '';
let secondNum = '';
let operator;
let isResultOn = false;

const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const screen = document.querySelector('.screen');
const equalsBtn = document.querySelector('#equals-btn');
const clearBtn = document.querySelector('#clear-btn');

digits.forEach(digit => {
    digit.addEventListener('click', () => {
        if (isResultOn == true) {
            clearCalculator();
            isResultOn = false;
        }
        if(operator == undefined) {
            firstNum = firstNum + digit.textContent;
        } else {
            secondNum = secondNum + digit.textContent;
        } 
        const spanElement = document.createElement('span');
        spanElement.textContent = digit.textContent;
        screen.appendChild(spanElement);
    })
})

operators.forEach(op => {
    op.addEventListener('click', () => {
        operator = op.textContent
        const spanElement = document.createElement('span');
        spanElement.textContent = op.textContent;
        screen.appendChild(spanElement);
    })
})

equalsBtn.addEventListener('click', () => {
    firstNum = parseInt(firstNum);
    secondNum = parseInt(secondNum);
    const result = operate(firstNum, secondNum, operator);
    const spanElement = document.createElement('span');
    spanElement.textContent = result;
    screen.replaceChildren();
    screen.appendChild(spanElement);
    isResultOn = true;
})

clearBtn.addEventListener('click', clearCalculator);