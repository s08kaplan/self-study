// let x ; 
// if (x < 0) {
//     x = "negative number";
// }else if (x == 0) {
//     x = 0;
// }else {
//     x = "positive number"
// }
// console.log(x);

// let x,y,z;
// console.log("please enter 3 values for x, y and z respectively");
// x = 5;
// y= 8;
// z = 3;
// let result;
// if (x<y && y<z ){
//     z = " z is the largest number";
//     result = z;
// }else if (y<x && z<x ) {
//     x = "x is the largest number";
//     result = x;
// } else {
//    y = "y is the largest number"
//    result = y
// }

// console.log(result);

// let x,y;
// let result;
// let symbol ;
// x = 3;
// y = 4;
// symbol = "/"
// if (symbol == "+") {
//     result = x + y;
// }else if (symbol == "-") {
//     result = x - y;
// }else if (symbol == "*"){
//     result = x * y
// }else if (symbol == "/") {
//    result = (x/y)
// }
 
// console.log(result);
// ----------------------------------






// let x = prompt("enter a number : ") 
// if (x < 0) {
//     x = "the given number is a negative number";
// }else if (x == 0) {
//     x = "the given number is neither negative nor positive it is 0";
// }else {
//     x = "the given number is a positive number"
// }
// console.log(x);







// let x = prompt("enter a number : ")
// let y = prompt("enter a number : ")
// let z = prompt("enter a number : ")



// let result;
// if (x<y && y<z ){
//     z = " z is the largest number";
//     result = z;
// }else if (y<x && z<x ) {
//     x = "x is the largest number";
//     result = x;
// } else {
//    y = "y is the largest number"
//    result = y
// }

// console.log(result);







// let x = prompt("enter a number : ");
// let y = prompt("enter another number :");
// let symbol = prompt("choose one of the operation : '+', '-', '*', '/'")
// let result;

// if (symbol == "+") {
//     x = parseInt(x);
//     y = parseInt(y);
//     result = x + y;
// }else if (symbol == "-") {
//     result = x - y;
// }else if (symbol == "*"){
//     result = x * y
// }else if (symbol == "/") {
//    result = (x/y)
// }
 
// console.log(result);


// let day = prompt(`please enter a day from 1 to 7:`);
// let message;
// switch(parseInt(day)){
//     case 1:
//         message = "you have InClass";
//         break;
//     case 2:
//         message = "you have InClass";
//         break; 
//     case 3:
//         message = "you have InClass";
//         break;
//     case 4:
//         message = "you have InClass";
//         break;    
//     case 5:
//         message = "you have TEamwork";
//         break;
//     case 6:
//         message = "you have InClass and Workshop";
//         break;
//     case 7:
//         message = "you have self study";
//         break;
//     default:
//         alert("please enter a valid day number");
//         break;               
// }

// console.log(message);





// const grade = prompt("enter your grade : ");

// const message = parseInt(grade) >=50 ? "you passed" : "sorry keep studying";
// console.log(message);


// const note = prompt("please enter your grade : ");
// let result;
// if (note < 40){
//     result = "you failed";
// }else if(note >=40 && note<= 50) {
//     result = " your pass is on a condition 'it depends on your teacher:)))'"
// }else {
//     result = "you passed"
// }

// console.log(result);





// let wage = prompt("enter your wage : ");
// wage = parseInt(wage);
// const amount = 11400;

// let result = (wage < amount)?(wage+wage*1.5):(wage+wage*1.1);

// console.log(result);



// const budget = parseInt(prompt("enter your wage : "));
// const expense = parseInt(prompt("enter your expenses : "));
// const amount = 11400;
// result = (budget >= expense + 11400)?"you may have credit":"sorry we can't give you credit";
// console.log(result);



// const grade = parseInt(prompt("enter your grade : "));
// let result;
// if (grade < 0 || grade > 100) {
//         result = "enter a valid grade";
// }else if (0 <= grade && grade <= 25) {
//     result = "FF";
// }else if (26<= grade && grade <= 45) {
//     result = "DD";
// }else if (46 <= grade && grade <= 65) {
//     result = "CC";
// }else if (66 <= grade && grade <= 75) {
//     result = "BB";
// }else if ( 76 <= grade && grade <= 90) {
//     result = "BA";
// }else if (91 <= grade && grade <= 100) {
//     result = "AA"
// }

// console.log(result);





// const x = parseInt(prompt("enter a number : "));
// const y = parseInt(prompt("enter a number : "));
// const z = parseInt(prompt("enter a number : "));
// let result;
// if ( x < y && y < z) {
//        result = `the smallest number is : ${x} and the sum of the numbers is : ${x + y + z}
//        and the product of the numbers is : ${x * y * z}`
//     }else if (y < x && x < z) {
//         result = `the smallest number is : ${y} and the sum of the numbers is : ${x + y + z}
//         and the product of the numbers is : ${x * y * z}`
//     }else {
//         result = `the smallest number is : ${z} and the sum of the numbers is : ${x + y + z}
//         and the product of the numbers is : ${x * y * z}`
//     }
//     console.log(result);


// const x = parseInt(prompt("enter a number : "));
// const y = parseInt(prompt("enter a number : "));
// const z = parseInt(prompt("enter a number : "));
// let result;
// const sum = (x + y + z);
// const product = (x * y * z);
// if ( x < y && y < z) {
//        result = `the smallest number is : ${x}`
//     }else if (y < x && x < z) {
//         result = `the smallest number is : ${y} `
//     }else {
//         result = `the smallest number is : ${z} `
//     }
//     console.log(result,sum, product);

// const yourNumber = parseInt(prompt("enter a number : "));
// const message = (yourNumber%2==0)?"the given number is an even number":"the given number is an odd number "
// console.log(message);

// alert("if you wanna convert Celsius to fahrenheit,use the first converter");
// let celsiusToFahrenheit = parseInt(prompt("enter your celsius value :"));
// celsiusToFahrenheit = celsiusToFahrenheit * 9/5 + 32;
// console.log(celsiusToFahrenheit );

// let fahrenheitToCElsius = parseInt(prompt("enter your fahrenheit value :"));
// fahrenheitToCElsius = (fahrenheitToCElsius - 32) * 5/9
// console.log(fahrenheitToCElsius);





// =========================!!!!!!!==================


// const x = Number(prompt())
// const y = Number(prompt())
// const z = Number(prompt())

// const sumNum = x + y + z
// const productNum = x * y * z

// let message = ""

// if ( x < y && y < z) {
//     message = `min value is x: ${x} and max value is z : ${z}
//     the sum is : ${sumNum} and the product is : ${productNum}`
// }else if (x < y && x < z && z < y){
//     message = `min value is x: ${x} and max value is y : ${y}
//     the sum is : ${sumNum} and the product is : ${productNum}`
// }else if (y < x && x < z){
//     message = `min value is y: ${y} and max value is z : ${z}
//     the sum is : ${sumNum} and the product is : ${productNum}`
// }else if (y < x && z < x){
//     message = `min value is y: ${y} and max value is x : ${x}
//     the sum is : ${sumNum} and the product is : ${productNum}`
// }else if (z < x && x < y){
//     message = `min value is x: ${x} and max value is z : ${z}
//     the sum is : ${sumNum} and the product is : ${productNum}`
// }

// ====================================================

// const day = Number(prompt("Please enter a number of day from 1 to 31(included):"))
// const month = Number(prompt("Please enter a number of month from 1 to 12(included):"))

// let message = ""

// if ( day < 1 || day > 31 || month < 1 || month >12) {
//     message = "Please enter a valid value!"
// }else if (day >= 21 && month ==2 || day <= 31 && month == 5) {
//     message = `The season for ${month}/${day} is Spring`
// }else if (day >= 1 && month == 6 || day <=21 && month == 9) {
//     message = `The season for ${month}/${day} is Summer`
// }else if (day >= 22 && month ==9 || day <= 20 && month == 12 ) {
//     message = `The season for ${month}/${day} is Fall`
// }else {
//     message = `The season for ${month}/${day} is Winter`
// }

// console.log(message);



// ============================


// const day = Number(prompt("Please enter a number of day from 1 to 31(included):"))
// const month = Number(prompt("Please enter a number of month from 1 to 12(included):"))

// let message = ""

// switch( true ){
//     case day >= 21 && month ==2 || day <= 31 && month == 5:
//         message = `The season for ${month}/${day} is Spring`;
//     break;
//     case day >= 1 && month == 6 || day <=21 && month == 9:
//         message = `The season for ${month}/${day} is Summer`;
//     break;
//     case day >= 22 && month ==9 || day <= 20 && month == 12 :
//         message = `The season for ${month}/${day} is Fall`;
//         break;
//     case day>=21 && month == 12 || day <= 20 && month ==2:
//         message = `The season for ${month}/${day} is Winter`;
//         break;
//     case  day < 1 || day > 31 && month < 1 || month >12:
//         message = "Please enter a valid value!";
//         break;
// }
   
// console.log(message);







// const x = Number(prompt("enter a number:"))
// const y = Number(prompt("enter a number:"))
// let message = "";
// if (x > y) {
//   if (x > 0) {
//     message =("x is greater than y and positive.");
//   } else {
//     message = ("x is greater than y but not positive.");
//   }
// } else {
//   message = ("x is not greater than y.");
// }
// console.log(message);








// const x = Number(prompt("enter a number:"))
// const y = Number(prompt("enter a number:"))
// let message = "";
// if (x > y) {
//   if (x > 0 && y>0) {
//     message =(`x is greater than y and positive: ${x},
//     y is positive: ${y}`);
//   } else if (x > 0 && y < 0) {
//     message =(`x is greater than y and positive: ${x},
//     y is negative: ${y}`);
//   }else if(x > 0 && y == 0){
//     message =(`x is greater than y and positive: ${x},
//     y is 0`);
//   } else {
//     message = (`x is greater than y but not positive,  x: ${x} and y: ${y}.`);
//   }
// } else {
//   message = (`x is not greater than y, x:  ${x} and y: ${y}.`);
// }

// console.log(message);







// for (let i = 0; i < 10; i++) {
//     if (i === 5){
//         continue;
//     }console.log(i)
// }


while (let i = 0; i < 10; i++) {
    if (i === 5){
        continue;
    }console.log(i)
}

let x = 5
let message ="şart oluşmadı ama do while çalıştı"

do {
    console.log(message);
}
while (x < 5){
    console.log(message);
}

