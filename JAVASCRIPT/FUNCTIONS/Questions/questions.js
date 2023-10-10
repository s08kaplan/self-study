// function reversedText(text){
//     let reversed = "";
//     let words = "";
//     for (let word of text){
//         words = text.split(" ")
//     }for (let i = 0;i <= words.length-1;i++){
//         reversed += words[(words.length-1)-i] + " "
//     }
//     return reversed
// } 
// const text = "hello js world 2023";
// console.log(reversedText(text));



// function reversedText(text) {
//     let reversed = "";
//     let words = text.split(" ");
  
//     for (let i = words.length - 1; i >= 0; i--) {
//       reversed += words[i] + " ";
//     }
  
//     return reversed.trim(); // Remove the trailing space and return the reversed text
//   }
  
//   const text = "hello js world 2023";
//   console.log(reversedText(text));
 


// function reversed(sentence){
//     let reversedText = ""
//    const n = (sentence.length) 
//    for (let i = 1; i >= 0 && i <= n; i++ ){
//     reversedText += sentence[n-i];
//    }
//    return reversedText;
// }

// const text = "hey let's get started"
// console.log(reversed(text));





// function reversedText(sentence){
//     let words = ""
//     let reversed = ""
//     words = sentence.split(" ")
//     for (let i = words.length - 1;i >=0;i--){
//         reversed += words[i] + " "
//     }
//     return reversed;
// } 

// let text = "Hello Js World 2023";
// console.log(reversedText(text));




// const userNum = Number(prompt("please enter a positive number :"))

// function myFactorial(nnumber){
//     if (nnumber < 0 ){
//         return "please enter a positive number"
//     }else if ( nnumber === 0 || nnumber === 1){
//         return 1
//     }
//     return nnumber * myFactorial(nnumber - 1) 
// }

// console.log(myFactorial(5));


// function myPassword(text){
//     let letters = text.slice(0).toLowerCase();
//     let changed =""
//     let nletter = "g"
//     for(let i of letters){
//         if(i === "k"){
//              continue;
//              return changed += i
//         }else if ( i === "."){
//             continue;
//             return changed += i
//         }changed +=i
//     }
    
//     return changed + "****"
// }

// console.log(myPassword("ankara."));






// function myPassword(text){
//     let letters = text.slice(0).toLowerCase();
//     let changed =""
//     for(let i of letters){
//         if(i === "k"){
//            i = i.replace("k","g")
//         }else if ( i === "."){
//             i = i.replace(".","!")
            
//         }changed += i
//     }
    
//     return changed + "****"
// }

// console.log(myPassword("ankara."));



// function myPassword(text){
//     let letters = text.slice(0).toLowerCase();
//     let changed =""
//     for(let i of letters){
//         if(i === "k"){
//            i = i.replace("k","g")
//         }else if ( i === "."){
//             i = i.replace(".","!")
            
//         }changed += i
//     }
    
//     return changed + "****"
// }

// console.log(myPassword("ankara."));



// function myPassword(text){
//     let letters = text.slice(0).toLowerCase();
//     let changed =""
//     for(let i of letters){
//         if(i === "k" || i === "a"){
//            i = i.replace("k","g");
//            i = i.replace("a","#");
//         }else if ( i === "."){
//             i = i.replace(".","!")
            
//         }changed += i
//     }
    
//     return changed + "****"
// }

// console.log(myPassword("WASHINGTON"));

// let randomNumber = Math.round(Math.random()*100)

// function randomLetterPassword(word, randomNumber) {
//     word = word.toLowerCase();
//     let changed = "";

//     if (randomNumber < 33) {
//         for (let letter of word) {
//             if (letter === "a") {
//                 changed += "12";
//             } else if (letter === "e") {
//                 changed += "23";
//             } else if (letter === "o") {
//                 changed += "0z";
//             } else {
//                 changed += letter;
//             }
//         }
//     } else if (randomNumber >= 33 && randomNumber < 66) {
//         for (let letter of word) {
//             if (letter === "k") {
//                 changed += "g";
//             } else if (letter === "l") {
//                 changed += "!";
//             } else {
//                 changed += letter;
//             }
//         }
//     } else {
//         for (let letter of word) {
//             if (letter === "a") {
//                 changed += "789";
//             } else {
//                 changed += letter;
//             }
//         }
//     }

//     return changed;
// }

// console.log(randomLetterPassword("we are alive", randomNumber));




// ========another option from chatgpt======================

// function replaceLetter(text, target, replacement) {
//     let newText = "";
//     for (let i = 0; i < text.length; i++) {
//         if (text[i] === target) {
//             newText += replacement;
//         } else {
//             newText += text[i];
//         }
//     }
//     return newText;
// }

// let text = "Hello, world!";
// let newText = replaceLetter(text, "o", "X");
// console.log(newText); // Output: "HellX, wxrld!"


// let letters = "ABCDEFGHJKLMNOPQRSTUVWXYZ"
// let result=""
// for(let i in letters) {
//     result+=i + " "
// }
// console.log(result);

// const cars = ["ferrari", "volvo", "audi", "mercedes"];
// let text = "";
// for (let i = 0; i < cars.length; i++) {
//   if (i === 0) {
//     cars[i] = "dogan"; // Replace "ferrari" with "dogan"
//   }
//   text += `The car index number ${i} in cars array is: ${cars[i]} `+"  ";
// }
// console.log(text);

// ==================FUNCTIONS HW============================

// let addNumbers = function operation(number1,number2){
//   return number1 + number2
// }

// let subtractNumbers = function operation(number1, number2){
//   return number1 - number2
// }

// let multiplyNumbers = function operation(number1, number2){
//   return number1 * number2
// }

// let divideNumbers = function operation(number1, number2){
//   if(number2 === 0){
//       console.log("A number cannot divide by 0");
//   }
//   return number1 / number2
// }


// let myCalculate = function(number1,number2,operation){
//   return operation(number1,number2)
// }

// console.log(myCalculate(2,3,addNumbers)); 


// let addNumbers =(number1,number2) =>{
//   return number1 + number2
// }

// let subtractNumbers =(number1, number2)=>{
//   return number1 - number2
// }

// let multiplyNumbers =(number1, number2)=>{
//   return number1 * number2
// }

// let divideNumbers =(number1, number2)=>{
//   if(number2 === 0){
//       console.log("A number cannot divide by 0");
//   }
//   return number1 / number2
// }


// let myCalculate =(number1,number2,operation)=>{
//   return operation(number1,number2)
// }

// console.log(myCalculate(2,0,divideNumbers)); 



// let addNumbers =() => number1 + number2


// let subtractNumbers =()=> number1 - number2


// let multiplyNumbers =(number1, number2)=>number1 * number2


// let divideNumbers =(number1, number2)=>{
//     if(number2 === 0){
//         console.log("A number cannot divide by 0");
//     }
//     return number1 / number2
// }


// let myCalculate =(number1,number2,operation)=> operation(number1,number2)


//  console.log(myCalculate(2,0,divideNumbers)); 


// const radius = Number(prompt("enter a radius value to calculate the area of circle:"))
// const PI = 3
// const areaCircle =()=> PI * radius**2
// console.log(areaCircle()); 


// const radius = Number(prompt("enter a radius value to calculate the area of circle:"))
// const myPI = 3
// let areaCircle =(num)=> myPI * num**2
// console.log(areaCircle(radius)); 


// const yourBirthday =Number(prompt("enter your year of birthday :"))
// let result =()=> new Date().getFullYear() - yourBirthday
// console.log(result());

// let base =Number(prompt("enter the base of the triangle :"))
// let height = Number(prompt("enter the height of the triangle :"))
// let areaTriangle =()=> (base * height)/2
// console.log(areaTriangle()); 


// const userNumber = Number(prompt("enter a number :"))
// const userNumber2 = Number(prompt("enter another number :"))

// const squareNumber =(num)=>num ** 2
// const cubeNumber = (num)=>num ** 3
// const powerNumber = (number1,number2=1)=>number1 ** number2

// console.log(squareNumber(userNumber));
// console.log(cubeNumber(userNumber));
// console.log(powerNumber(userNumber,userNumber2));

const year =1999
let leapYearCheck = function(year){
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
         return "the given year is a leap year"
    }
    return "NOT a leap year"
}

console.log(leapYearCheck(year)); 