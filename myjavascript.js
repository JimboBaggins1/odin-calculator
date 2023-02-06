//myjavascript.js

//----------------------Create calculator display-------------------------//
const buttonIDArray = ['AC', 'plus-minus', 'mod', 'divide', 'seven', 'eight', 'nine', 'multiply',
                    'four', 'five', 'six', 'minus', 'one', 'two', 'three', 'add', 'zero', 'point',
                    'equals'];

const buttonArray = ['AC', '+/-', '%', '/', '7', '8', '9', '*',
                    '4', '5', '6', '-', '1', '2', '3', '+', '0', '.',
                    '='];

const container = document.querySelector('#container');

const createCalc = function(idArray, buttonArray) {
    const display = document.createElement('div');
    display.setAttribute('id', 'display');
    container.appendChild(display);
    for (let i = 0; i < 19; i++) {
        const buttons = document.createElement('button');
        buttons.setAttribute('class', 'buttons');
        buttons.setAttribute('id', `${idArray[i]}`);
        buttons.textContent = `${buttonArray[i]}`;
        container.appendChild(buttons);
    }
}

createCalc(buttonIDArray, buttonArray);





//----------------------Operator Functions-------------------------//


// Add
const add = function(num1, num2) {
    return num1 + num2;
};

// Subtract
const subtract = function(num1, num2) {
    return num1 - num2;
};

// Multiply
const multiply = function(num1, num2) {
    return num1 * num2;
};

// Divide
const divide = function(num1, num2) {
    return num1 / num2;
};


//----------------------Operate-------------------------//


// Takes two numbers and and operator callback
const operate = function(operator, num1, num2) {
    return operator(num1, num2);
};