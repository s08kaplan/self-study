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
