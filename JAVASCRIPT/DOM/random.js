const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const symbols = ["~", "!", "@", "#", "$", "%", "&", "*", "_", ".", "?"];

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let password = "";
let letter = "";
let numero = "";
let symbol = "";
let main = document.querySelector(".main");
const p = document.getElementsByClassName("result")[0];
const result = document.querySelector("h3");
let button = document.addEventListener("click", change);
const pass = document.querySelector("p.pass");
function change() {
  let letter = "";
  let numero = "";
  let symbol = "";
  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    randomColor += colors[Math.floor(Math.random() * colors.length)];
  }
  for (let i = 0; i < 4; i++) {
    password = "";
    letter += letters[Math.floor(Math.random() * letters.length)];
    numero += numbers[Math.floor(Math.random() * numbers.length)];
    symbol += symbols[Math.floor(Math.random() * symbols.length)];
    password = letter + numero + symbol;
  }

  document.querySelector("h3").innerHTML = randomColor;
  document.body.style.backgroundColor = randomColor;
  main.style.backgroundColor = randomColor;
  p.innerHTML = "Your Password is READY!";
  pass.innerHTML = password;
}
