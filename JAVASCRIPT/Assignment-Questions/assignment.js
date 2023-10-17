// =================ANAGRAM CHECKER==========================

// let userText1 = "Dormitory";
// let userText2 = "dirty room ";
// let message = "";
// const myAnagramChecker = (text1, text2) => {
//   text1 = text1.toLowerCase();
//   text2 = text2.toLowerCase();
//   let newText1 = "";
//   let newText2 = "";
//   for (let i = 0; i < text1.length; i++) {
//     if (text1[i] !== " " && text1[i] !== ",") {
//       newText1 += text1[i];
//     }
//   }
//   newText1 = newText1.split("").sort().join();
//   for (let j = 0; j < text2.length; j++) {
//     if (text2[j] !== " " && text2[j] !== ",") {
//       newText2 += text2[j];
//     }
//   }
//   newText2 = newText2.split("").sort().join();
//   if(newText1 == newText2){
//     message = "ANAGRAM"
//   }
//   else{
//     message = "NOOOOT ANAGARAM"
//   }
//   return message
  
// };

// console.log(myAnagramChecker(userText1,userText2));

// console.log(myAnagramChecker("The Morse Code","Here come dots"));

// console.log(myAnagramChecker("Astronomer","Moon starer"));

// console.log(myAnagramChecker("hello","helllo"));


// friend's solution


// function areAnagrams(str1, str2) {
//   const cleanedStr1 = cleanAndNormalize(str1);
//   const cleanedStr2 = cleanAndNormalize(str2);
//   if (cleanedStr1.length !== cleanedStr2.length) {
//     return false;
//   }
//   const sortedStr1 = sortString(cleanedStr1);
//   const sortedStr2 = sortString(cleanedStr2);
//   return sortedStr1 === sortedStr2;
// }
// function cleanAndNormalize(str) {
//   let cleanedStr = "";
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i].toLowerCase();
//     if (char !== "\t" && char !== "\n" && char !== "\r") {
//       cleanedStr += char;
//     }
//   }
//   return cleanedStr;
// }
// function sortString(str) {
//   return str.split("").sort().join("");
// }
// console.log(areAnagrams("ali", "silent"));


// const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
// const myFunc = (arr) => {
//   const myArr = []
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] != arr[i+1]){
//       myArr.push(arr[i])
//     }
//   }
//   return myArr
// }

// console.log(myFunc(arrayWithDuplicates));

// friend's solution
// function kaldir(arr) {
//   const yeniKüme = [];
//   for (const item of arr) {
//     if (!yeniKüme.includes(item)) {
//       yeniKüme.push(item);
//     }
//   }
//   return yeniKüme;
// }

// const sayKümesi = [1, 2, 2, 3, 4, 4, 5];
// const yeniKüme = kaldir(sayKümesi);


// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [3, 4, 5, 6, 7];
// let ortak = [];
// for(let i=0;i<=arr1.length-1;i++){
//     for(let j=0;j<=arr2.length-1;j++) {
//         if(arr1[i]===arr2[j]){
//             ortak.push(arr1[i]);
// }}}
// console.log(ortak);




// function kümeKesişim(arr1, arr2) {
//   const kesişim = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         kesişim.push(arr1[i]);
//         break; 
//       }
//     }
//   }
//   return kesişim;
// }
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// const sonuç = kümeKesişim(array1, array2);
// console.log(sonuç);



