//myjavascript.js


let displayValue = 0;
let storage1 = null;
let storage2 = null;

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
  if (num2 === 0) {
    return 'Divide by zero error.. How embarrassing'
  } else {
    return num1 / num2;
  };
};



//----------------------Operate-------------------------//

// Takes two numbers and and operator callback
const operate = function (operator, num1 = 0, num2 = 0) {
  display.textContent = `${operator(num1, num2)}`;
  return operator(num1, num2);
};

//----------------------Functions to populate display when key is pressed-------------------------//
const isOperatorClicked = function (keys) {
  switch (keys) {
    case "+":
      if (storage1 === null) {
        storage1 = display.textContent.substring(0, display.textContent.length - 1);
      } else {
        storage2 = display.textContent.substring(0, display.textContent.length - 1);
        storage1 = operate(operator, Number(storage1), Number(storage2));
      }
      console.log(storage1);
      console.log(storage2);
      operator = add;
      display.textContent = "";
      break;
    case "-":
      if (storage1 === null) {
        storage1 = display.textContent.substring(0, display.textContent.length - 1);
      } else {
        storage2 = display.textContent.substring(0, display.textContent.length - 1);
        storage1 = operate(operator, Number(storage1), Number(storage2));
      }
      console.log(storage1);
      console.log(storage2);
      operator = subtract;
      display.textContent = "";
      break;
    case "*":
      if (storage1 === null) {
        storage1 = display.textContent.substring(0, display.textContent.length - 1);
      } else {
        storage2 = display.textContent.substring(0, display.textContent.length - 1);
        storage1 = operate(operator, Number(storage1), Number(storage2));
      }
      console.log(storage1);
      console.log(storage2);
      operator = multiply;
      display.textContent = "";
      break;
    case "/":
      if (storage1 === null) {
        storage1 = display.textContent.substring(0, display.textContent.length - 1);
      } else {
        storage2 = display.textContent.substring(0, display.textContent.length - 1);
        storage1 = operate(operator, Number(storage1), Number(storage2));
      }
      console.log(storage1);
      console.log(storage2);
      operator = divide;
      display.textContent = "";
      break;
    case "AC":
      storage1 = null;
      storage2 = null;
      display.textContent = 0;
      break;
    case "=":
      storage2 = display.textContent.substring(0, display.textContent.length - 1);
      storage1 = operate(operator, Number(storage1), Number(storage2));
      display.textContent = storage1;
      storage1 = null;
  }
};

// Populate display
const populateDisplay = function (keys) {
  if (display.textContent === "0" || display.textContent === "Divide by zero error.. How embarrassing") {
    display.textContent = `${keys}`;
  } else {
    display.textContent += `${keys}`;
  }
  isOperatorClicked(keys);
};

// Look for key press
window.addEventListener("keydown", function (e) {
    const keys = document.querySelector(`button[data-key = '${e.key}']`);
    if (!keys) return;
    console.log(keys);
    populateDisplay(keys.textContent);
  });

// Look for button click
const buttons = document.querySelectorAll('.buttons');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
    console.log(this.dataset.key);
    populateDisplay(this.innerText);
    });
};

