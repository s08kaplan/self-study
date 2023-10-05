// const cars = ["sahin","dogan","serce"]

// let text = "";
// for (let i = 0; i < cars.length; i++) {
//     text += cars[i] + " ";
//   }
//   console.log(text);

const userNum = Number(prompt("enter a number: "))

let result = "";
let message = "";
for (let i = 1; userNum - i >=1; i++){
    if (userNum < 0 ) {
        message = "Please enter a positive number"
    }
}