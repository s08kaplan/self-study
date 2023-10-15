// =================ANAGRAM CHECKER==========================

let userText1 = "Dormitory";
let userText2 = "dirty room ";
let message = "";
const myAnagramChecker = (text1, text2) => {
  text1 = text1.toLowerCase();
  text2 = text2.toLowerCase();
  let newText1 = "";
  let newText2 = "";
  for (let i = 0; i < text1.length; i++) {
    if (text1[i] !== " " && text1[i] !== ",") {
      newText1 += text1[i];
    }
  }
  newText1 = newText1.split("").sort().join();
  for (let j = 0; j < text2.length; j++) {
    if (text2[j] !== " " && text2[j] !== ",") {
      newText2 += text2[j];
    }
  }
  newText2 = newText2.split("").sort().join();
  if(newText1 == newText2){
    message = "ANAGRAM"
  }
  else{
    message = "NOOOOT ANAGARAM"
  }
  return message
  
};

console.log(myAnagramChecker(userText1,userText2));

console.log(myAnagramChecker("The Morse Code","Here come dots"));

console.log(myAnagramChecker("Astronomer","Moon starer"));

console.log(myAnagramChecker("hello","helllo"));



