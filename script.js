function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    if (b === 0) {
        return "Sorry! Cannot divide by 0";
    }
    return a/b;
}

function operate(firstNum, secondNum, operator) {
    if (operator == '+'){
        return add(firstNum, secondNum);
    } else if (operator == '-') {
        return subtract(firstNum, secondNum);
    } else if (operator == '*') {
        return multiply(firstNum, secondNum);
    } else if (operator == '/') {
        return divide(firstNum, secondNum);
    }
}
