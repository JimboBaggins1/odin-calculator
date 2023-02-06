//myjavascript.js

//----------------------Create calculator display-------------------------//
const container = document.querySelector('#container');

const createCalc = function() {
    for (let i = 0; i < 10; i++) {
        const buttons = document.createElement('button');
        buttons.setAttribute('class', 'buttons');
        container.appendChild('buttons');
    }
}







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