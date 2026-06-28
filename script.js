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

let firstNum = '';
let secondNum = '';
let operator;

const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('operator');
const screen = document.querySelector('.screen');

digits.forEach(digit => {
    digit.addEventListener('click', () => {
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
