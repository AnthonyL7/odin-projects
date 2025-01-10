// Sum Function
function sum(a,b) {
  return a + b
}
console.log(sum(2,2))

// Subtract Function
function subtract(a,b) {
  return a - b
}
console.log(subtract(4,2))

// Multiply Function
function multiply(a,b) {
  return a * b
}
console.log(multiply(2,2))

// Divide Function
function divide(a,b) {
  return a / b
}
console.log(divide(10,5))


const display = document.getElementById('display');
let firstNumber = null;
let secondNumber = null;
let operator = null;

function selectNumber(number) {
  if (firstNumber === null) {
    firstNumber = number;
    display.textContent = firstNumber;
  } else if (secondNumber === null) {
    secondNumber = number;
    display.textContent = secondNumber;
  } else {
    alert('Invalid')
  }
}

function selectOperator(op) {
  if (firstNumber !== null && secondNumber === null) {
    operator = op;
    display.textContent = operator
  }
}

//Function Operate
function operate(operator, num1, num2) {
    switch (operator) {
      case '+':
        return sum(num1, num2);
      case '-':
        return subtract(num1,num2);
      case '*':
        return multiply(num1,num2);
      case '/':
        return divide(num1,num2);
      default: 
        return 'Invalid operator';
    }
  
  }

//calculate 
function calculate() {
  if (firstNumber !== null && secondNumber !== null && operator !== null) {
    const result = operate(operator, firstNumber, secondNumber);
    display.textContent = result;
  }
}

//Reset
function reset() {
  firstNumber = null;
  secondNumber = null;
  operator = null;
  display.textContent = 0;
}

/*
const clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click', () => {
  currentNumber = ''
  display.textContent = 0;

})

const divideBtn = document.getElementById('divideBtn');
divideBtn.addEventListener('click', () => {
  currentNumber = '/'
  display.textContent = '/';
})

const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', () => {
  currentNumber = 1
  display.textContent = 1;
})

const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', () => {
  currentNumber = 2
  display.textContent = 2;
})

const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', () => {
  currentNumber = 3
  display.textContent = 3;
})

const multiBtn= document.getElementById('multiBtn');
multiBtn.addEventListener('click', () => {
  currentNumber = '*'
  display.textContent = '*';
})

const btn4 = document.getElementById('btn4');
btn4.addEventListener('click', () => {
  currentNumber = 4
  display.textContent = 4;
})

const btn5 = document.getElementById('btn5');
btn5.addEventListener('click', () => {
  currentNumber = 5
  display.textContent = 5;
})

const btn6 = document.getElementById('btn6');
btn6.addEventListener('click', () => {
  currentNumber = 6
  display.textContent = 6;
})

const plusBtn = document.getElementById('plusBtn');
plusBtn.addEventListener('click', () => {
  display.textContent = '+';
})

const btn7 = document.getElementById('btn7');
btn7.addEventListener('click', () => {
  currentNumber = 7
  display.textContent = 7;
})

const btn8 = document.getElementById('btn8');
btn8.addEventListener('click', () => {
  currentNumber = 8
  display.textContent = 8;
})

const btn9 = document.getElementById('btn9');
btn9.addEventListener('click', () => {
  currentNumber = 9
  display.textContent = 9;
})

const minusBtn = document.getElementById('minusBtn');
minusBtn.addEventListener('click', () => {
  display.textContent = '-';
})

const btn0 = document.getElementById('btn0');
btn0.addEventListener('click', () => {
  currentNumber = 0
  display.textContent = 0;
})

const equalsBtn = document.getElementById('equalBtn');
equalBtn.addEventListener('click', () => {
  display.textContent = '=';
})
*/