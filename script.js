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
        return "Sorry! Cannot divide by 0. This is an ERROR!";
    }
    return a / b;
}

function operate(firstNum, secondNum, operator) {
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    if (operator == '+') {
        return add(firstNum, secondNum);
    } else if (operator == '-') {
        return subtract(firstNum, secondNum);
    } else if (operator == '*') {
        return multiply(firstNum, secondNum);
    } else if (operator == '/') {
        return divide(firstNum, secondNum);
    } else {
        return null;
    }
}

let firstNum = '';
let secondNum = '';
let operator = '';
let shouldResetScreen = false;

const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const screen = document.querySelector('.screen');
const equalsBtn = document.querySelector('#equals-btn');
const clearBtn = document.querySelector('#clear-btn');

function updateDisplay() {
    if(firstNum === '' && secondNum === '' && operator === '') {
        screen.textContent = 0;
    } else {
        screen.textContent = `${firstNum} ${operator} ${secondNum}`.trim();
    }
}

function clearCalculator() {
    firstNum = '';
    secondNum = '';
    operator = '';
    shouldResetScreen = false;
    updateDisplay();
}

digits.forEach(digit => {
    digit.addEventListener('click', () => {
        if (shouldResetScreen) {
            clearCalculator();
        }
        if (operator === '') {
            firstNum += digit.textContent;
        } else {
            secondNum += digit.textContent;
        }
        updateDisplay();
    })
})

operators.forEach(op => {
    op.addEventListener('click', () => {
        if(shouldResetScreen) {
            shouldResetScreen = false;
        }

        if (firstNum != '' && secondNum != '' && operator != '') {
            let result = operate(firstNum, secondNum, operator);
            
            if(typeof result === 'number') {
                result = Math.round(result * 1000000) / 1000000;
            }

            firstNum = result.toString();
            secondNum = '';
        }

        if (firstNum !== '') {
            operator = op.textContent;
            updateDisplay();
        }
    })
})

equalsBtn.addEventListener('click', () => {
    const result = operate(firstNum, secondNum, operator);
    const spanElement = document.createElement('span');
    spanElement.textContent = result;
    screen.replaceChildren();
    screen.appendChild(spanElement);
    isResultOn = true;
})

clearBtn.addEventListener('click', clearCalculator);