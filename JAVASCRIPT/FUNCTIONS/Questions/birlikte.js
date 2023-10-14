// let userNum = Number(prompt("enter a num:"))

// PI = 3

// function areaCircle(x){
//     return (Math.PI * x ** 2).toFixed(3)
// }

// console.log(areaCircle(userNum));
// let userNum = Number(prompt("enter a num:"))
// const areaCircle = function(a){
//     return (Math.PI * a ** 2).toFixed(3)
// }

// console.log(areaCircle(userNum));

// let userNum = Number(prompt("enter a num:"))
// const areaCircle = (b) =>  (Math.PI * b ** 2).toFixed(3)
// console.log(areaCircle(userNum));

//  area=(b)=>(Math.PI * b ** 2).toFixed(3)
//  console.log(area(userNum));

// const userNum = Number(prompt("enter a num:"))
// birthDate =(userNum)=> new Date().getFullYear() - userNum

// console.log(birthDate(userNum));

// const taban = 3
// const height = 2
// areaTriangle = (x,y)=> (x * y) / 2
// console.log(areaTriangle(taban,height));

// const kareAl =(a)=> a ** 2

// const kupAl = (b)=> b ** 3
//  const usAl=(x,y)=> (y ** x)+2

//  console.log(kareAl(3));
//  console.log(kupAl(4));
//  console.log(usAl(2,3));

// const text =
//   "Nike is an American athletic footwear and apparel corporation headquartered near Beaverton, Oregon, United States. It is the world's largest supplier of athletic shoes and apparel and a major manufacturer of sports equipment";

// const myKeyword = ["b", "l", "u", "e", "v", "i", "o", "l", "e", "t"];

// const myKeywordFunction = (text) => {
//   let myWord = "";
//   let letters = text.toUpperCase();
//   for (let i = 0; i <= text.length - 1; i++) {
//     if (letters[i] == "B") {
//       myWord += text[i];
//     } else if (letters[i] == "L") {
//       myWord += text[i];
//     } else if (letters[i] == "U") {
//       myWord += text[i];
//     } else if (letters[i] == "E") {
//       myWord += text[i];
//     }
//     if(myWord.match("B" && "L" && "U" && "E","B" || "L" || "U" || "E" )) {
//         myWord = ("BLUE")
//     }
//   }
//   return myWord;
// };

// console.log(myKeywordFunction(text));


// 6- Belirli bir sayının tam bölenlerinin toplamını bulan fonksiyonu yazınız?

// const userNum = 50

// const sumOfDivisor = (userNum) =>{
//             let sumDivisor = 0
//             for (let i = 1; i <= userNum; i++) {
//               if(userNum % i === 0){
//                 sumDivisor += i
//               }
              
//             }
//             return sumDivisor
// }

// console.log(sumOfDivisor(userNum)); 








// 7- Belirli bir sayının asal olup olmadığını bulan fonksiyonu yazınız? 2, 3, 5, 7, 11, … şeklinde devam eden, kendisinden ve 1'den başka pozitif böleni olmayan 2 ve 2'den büyük sayılara “asal sayı” denir.


// const primeChecker = (userNum) => {
//   let message =""
//   for (let i = 2; i < userNum; i++) {
//     if(userNum % i === 0){
//               message = "your number is NOT a prime number"
//               break;
//     }else{
//       message = "your number is a prime number"
//     }
    
//   }
//   return message
// }

// console.log(primeChecker(19));






// 8-Girilen bir cümledeki kelime sayısını bulan bir fonksiyon yazınız.

// const numberOfWords = (text) => {
//   let words = text.split(" ")
//   let counter = 0
//   if (words == "-" || "!" || "#" || "?"){
//     counter++
//   }
//   return words.length - counter
// }

// console.log(numberOfWords("hello guys how is it going ?"));







// 9- Bir kelime ve bir harf olmak üzere İki adet string parametre alan ve girilen harften girilen kelime içinde kaç adet olduğunu sonuç olarak dönen bir fonksiyon yazınız.
// Girilen harf kelime içinde yoksa 0 dönmeli.
// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// Notes:
// The first argument can be an empty string



