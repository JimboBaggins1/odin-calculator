//myjavascript.js

//----------------------Create calculator display-------------------------//
const keyCodes = ['c', '@', '%', '/', '7', '8', '9', '*', '4', 
                    '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

const buttonIDArray = ['AC', 'plus-minus', 'percent', 'divide', 'seven', 'eight', 'nine', 'multiply',
                    'four', 'five', 'six', 'minus', 'one', 'two', 'three', 'add', 'zero', 'point',
                    'equals'];

const buttonArray = ['AC', '+/-', '%', '/', '7', '8', '9', '*',
                    '4', '5', '6', '-', '1', '2', '3', '+', '0', '.',
                    '='];

const container = document.querySelector("#container");
const display = document.createElement("div");
display.setAttribute("id", "display");
container.appendChild(display);

const createCalc = function (keyCodes, idArray, buttonArray) {
  for (let i = 0; i < 19; i++) {
    const buttons = document.createElement("button");
    buttons.setAttribute("class", "buttons");
    buttons.setAttribute("id", `${idArray[i]}`);
    buttons.setAttribute("data-key", `${keyCodes[i]}`);
    buttons.textContent = `${buttonArray[i]}`;
    container.appendChild(buttons);
  }
};

createCalc(keyCodes, buttonIDArray, buttonArray);

//----------------------Operator Functions-------------------------//

// Add
const add = function (num1, num2) {
  return num1 + num2;
};

// Subtract
const subtract = function (num1, num2) {
  return num1 - num2;
};

// Multiply
const multiply = function (num1, num2) {
  return num1 * num2;
};

// Divide
const divide = function (num1, num2) {
  return num1 / num2;
};

//----------------------Operate-------------------------//

// Takes two numbers and and operator callback
const operate = function (operator, num1, num2) {
  return operator(num1, num2);
};

//----------------------Functions to populate display when key is pressed-------------------------//
// Populate display
const populateDisplay = function (keys) {
    if (keys === 'AC') {
        display.textContent = '0';
    }
    if (display.textContent.length <= 9) {
        if (keys === 'AC') {
            display.textContent = '0';
        } else {
            display.textContent += `${keys}`;
        }
} 
  let storedDisplay = display.textContent;
  console.log(storedDisplay);
};

// Look for key press
window.addEventListener("keydown", function (e) {
  const keys = document.querySelector(`button[data-key = '${e.key}']`);
  if (!keys) return;
  console.log(keys);
  populateDisplay(keys.textContent);
});



