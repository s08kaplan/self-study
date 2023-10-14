let message = document.getElementById("message");
let display = document.getElementById("display");
let firstNumber = "";
let secondNumber = "";
let op = "";

const allClear = () => (display.value = "");
const del = () => (display.value = display.value.slice(0, -1));

let calculate = (value) => (display.value += value);

const operate = (operator) => {
  op = operator;
  firstNumber = display.value;
  display.value = "";
};

const result = () => {
  if (op == "+" && op == "-") {
    display.value = "you can not do this";
  }
  if (op == "*") {
    secondNumber = display.value;
    display.value = firstNumber * secondNumber;
  } else if (op == "-") {
    secondNumber = display.value;
    display.value = firstNumber - secondNumber;
  } else if (op == "+") {
    secondNumber = display.value;
    display.value = parseFloat(firstNumber) + parseFloat(secondNumber);
  } else if ("/") {
    secondNumber = display.value;
    if (secondNumber == 0) {
      display.value = "Cannot divide by zero";
      //   document.body.style.backgroundColor = "red";
    } else {
      display.value = firstNumber / secondNumber;
    }
    //     document.body.style.backgroundColor = "";
  }
};

// document.getElementById("display").addEventListener("input", function () {
//     document.body.style.backgroundColor = "";
// });
