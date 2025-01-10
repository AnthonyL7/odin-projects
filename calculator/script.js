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
      return num2 !== 0 ? divide(num1,num2): 'Error: Division by zero'
    default: 
      return 'Invalid operator';
  }

}


const display = document.getElementById('display');
let currentNumber = ''
let firstNumber = null;
let secondNumber = null;
let operator = null;

// Triggers when user chooses a number and display that number 
function selectNumber(number) {
  currentNumber += number; // appends second digit. Example press 1 then press 2 will be 12
  display.textContent = currentNumber; // displays number
}

//
function selectOperator(op) {
  if (currentNumber !== '') {
    firstNumber = parseFloat(currentNumber);; //passes currentNumber choice as a an int to first number
  } 
  operator = op; // sets operator to = op in order to put it as a parameter 
  currentNumber = ''; // resets display so user can enter second digit
  display.textContent = `${firstNumber}` // display number
}


//calculate 
function calculate() {
  // if any Number variables and operator variable is empty then it will you an error
  if ( currentNumber === '' || firstNumber == null || operator === null) {
    display.textContent = 'Error';
    return;
  }

  secondNumber = parseFloat(currentNumber);
  const result = operate(operator, firstNumber, secondNumber);
  display.textContent = result.toFixed(2);
  firstNumber = result;
  currentNumber ='';
  secondNumber = null;
  operator = null;

}

//Reset
function reset() {
  currentNumber = '';
  firstNumber = null;
  secondNumber = null;
  operator = null;
  display.textContent = 0;
}