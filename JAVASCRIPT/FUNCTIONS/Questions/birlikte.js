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

const text =
  "Nike is an American athletic footwear and apparel corporation headquartered near Beaverton, Oregon, United States. It is the world's largest supplier of athletic shoes and apparel and a major manufacturer of sports equipment";

const myKeyword = ["b", "l", "u", "e", "v", "i", "o", "l", "e", "t"];

const myKeywordFunction = (text) => {
  let myWord = "";
  let letters = text.toUpperCase();
  for (let i = 0; i <= text.length - 1; i++) {
    if (letters[i] == "B") {
      myWord += text[i];
    } else if (letters[i] == "L") {
      myWord += text[i];
    } else if (letters[i] == "U") {
      myWord += text[i];
    } else if (letters[i] == "E") {
      myWord += text[i];
    }
  }
  return myWord;
};

console.log(myKeywordFunction(text));
