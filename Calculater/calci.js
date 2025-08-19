let currentInput = '';
let previousInput = '';
let currentOperation = '';

const display = document.getElementById('display');

function appendNumber(num) {
  currentInput += num;
  updateDisplay();
}

function appendOperator(op) {
  if (!currentInput) return;
  if (previousInput) calculate();
  currentOperation = op;
  previousInput = currentInput;
  currentInput = '';
  updateDisplay();
}

function calculate() {
  if (!previousInput || !currentInput) return;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  let result;
  switch (currentOperation) {
    case '+': result = prev + current; break;
    case '-': result = prev - current; break;
    case '*': result = prev * current; break;
    case '/':
      if (current === 0) {
        alert("Cannot divide by zero"); return;
      }
      result = prev / current; break;
    default: return;
  }
  
  currentInput = result.toString();
  previousInput = '';
  currentOperation = '';
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  currentOperation = '';
  updateDisplay();
}

function updateDisplay() {
  display.value = currentInput || previousInput || '';
}
