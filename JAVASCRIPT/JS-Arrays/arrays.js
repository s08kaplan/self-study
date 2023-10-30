// const students = ["ali", "veli",true,false,1,15,23,"hey"]

// students[0] = "jenny";
// students[1] = "danny";
// students[8] = "jimmy";

// // olmayan index'e eleman atamasi yaparsak aralari boş elemanlarla
// // doldurur

// students[25] = "who";
// console.log(students);

// console.log(students);
// console.log(students[3]);


// const car = [];

// console.log(typeof car);
// let car  ;

// car = new Array("sahin","dogan","serce")

// console.log(car);
// console.log(typeof car);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString());
// console.log(typeof fruits);

// const myArray = [
//     "ali",
//     1,
//     true,
//     ["hasan","school"],
//     56,
//     [["hey","pay","attention","please",[0]]]
// ]

// console.log(myArray[3][1]);




// const cars = ["sahin","dogan","serce"];
// const cars2 = ["Saab", "Volvo", "BMW","Mercedes","Audi","Saab"]

// const myCars = cars.concat(cars2)
// console.log(myCars)

// const myFavorite = cars2.concat(cars)



// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// console.log(fruits);
// const myFavorite = fruits.slice(1);
// console.log(myFavorite);
// const yourFavorite = fruits.slice(2,4)
// console.log(yourFavorite);
// console.log(yourFavorite.length);





// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// let result = ""
// for (let i of fruits){
// result += i + " "

// }
// console.log(result);



// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// let result = ""
// for (let i in fruits){
// result += i + " "

// }
// console.log(result);

// const myArr = ["ali","veli","hasan",1,2,3,[1,2,"ayse"]];

// let result=""
// for (let i in myArr){
//     result += i + " "
// }
// console.log(result)

// const myArr = ["ali","veli","hasan",1,2,3,[1,2,"ayse"]];

// let result=""
// for (let i of myArr){
//     result += myArr[i]
// }
// console.log(result)






// const myArr = ["ali","veli","hasan",1,2,3,[1,2,"ayse"]];

// let result=""
// for (let i of myArr){
//     result += i + " "
// }
// console.log(result)



// let colors = ['red', 'green', 'blue'];
// let deletedColors = colors.splice(2, 0, 'purple', 'orange');
// console.log(colors)

// colors = ['red', 'green', 'purple', 'orange', 'blue'];
// deletedColors = colors.splice(3, 1, 'pink')
// console.log(colors);

// const persona = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
//   const persona1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
//   const persona2 = {
//     firstName:"Mary",
//     lastName: "Doe"
//   }

//   const persona3 = {
//     firstName : "Mahony",
//     lastName : "welawelawelwela"
//   }
  
  
//   console.log(persona.fullName.call(persona1));
//   console.log(persona.fullName.call(persona2));
//   console.log(persona.fullName.call(persona3));


// const personb = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   const personb1 = {
//     firstName: "Mary",
//     lastName: "Doe"
//   }
  

//   console.log(personb.fullName.apply(personb1));


// const gerson = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city  + " from " + country;
//     }
//   }
  
//   const gerson1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
  
//   console.log(gerson.fullName.apply(gerson1, ["Oslo", "Norway"]));

  
// const myCars = ["haci murat","dogan gorunumlu sahin","ferrari","mercedes","bmw"]
// const names = ["ali","ahmed","ayse","murad","jenny"]

// const matchArrays = (x,y) => {
//     const ownerCars = []
//     for (let i in x){
//         matchArrays[i] = `${myCars[i]} ${names[i]}`
//     }
//     return matchArrays
// }

// console.log(matchArrays(myCars,names));

// const arr = [2,3,5,6,8,9]
// const myAdd = (x) => {
//     let result = 0
//     for(let i of x){
// result += i
//     }
//     return result
// }

// console.log(myAdd(arr));


// const myCars = ["haci murat","dogan gorunumlu sahin","ferrari","mercedes","bmw"]

// const stringAdd = (x) =>{
//     let result = ""
//     for(let i of x){
// result += i + " "
//     }
//     return result
// }

// console.log(stringAdd(myCars));

// const myCars = ["haci murat","dogan gorunumlu sahin","ferrari","mercedes","bmw"]

// carEach = myCars.forEach(car => console.log(car))
// console.log(carEach);

// console.log(myCars.forEach(car => console.log(car)));



// const arr = [2,3,5,6,8,9]
// const result = []
// arr.forEach(num => result.push((num * 5)))
// console.log(result);


// const arr = [2,3,5,6,8,9]
// result = arr.map((x) => x * 5)
// console.log(result);

// const names = ["Ali","Danny","veli","Jenny"]
// result = names.map((x) => x.toUpperCase())
// console.log(result);

// const euro = 9.68;
// const dolar = 8.1;
// const tIFiyatlar = [100, 150, 100, 50, 80];

// resultDolar = tIFiyatlar.map((x) => (x/8.1).toFixed(2))
// resultEuro = tIFiyatlar.map((x)=> (x / 9.68).toFixed(2))

// console.log(resultDolar);
// console.log(resultEuro);


// const coordinates = [-100, 150, -32, 43, -20]
// const negativeCoordinates = coordinates.filter((coordinate)=> coordinate < 0)
// console.log(negativeCoordinates);


// const coordinates = [-100, 150, -32, 43, -20]

// const negativesToPositives = coordinates
// .filter((coordinate)=>  coordinate < 0)
// .map((x)=> -1 * x)
// .forEach((x)=>console.log(x))


//  Bir Firma, 3000 TL den az olan maaslara %10 zam yapmak
// istiyor ve zam yapilan bu kisilere toplam kaç TL ödenecegini bilmek istiyor.
// Ilgili programi yaziniz.



// const maaslar = [3000, 2891, 3500, 4200, 7000, 2500];

// result = maaslar
// .filter((maas)=> maas < 3000)
// .map((filteredMaas)=> (filteredMaas * 1.1).toFixed(2))
// .forEach((message)=>console.log(message))


// =========================WORKSHOP==============================

// 3. Soru: Bir dizi içindeki metin öğelerini birleştirerek tek bir metin oluşturmak için hangi dizi yöntemini ve diziyi nasıl kullanırsınız?

// let words = ["Merhaba", "dünya", "bu", "bir", "örnektir"];

// console.log(words.join(" "));

// 4. Soru: Bir cümleyi alın ve kelimeleri ters sırayla birleştirerek yeni bir cümle oluşturun.

// let sentence = "JavaScript harika bir dil";
// console.log(sentence.split(" ").reverse().join(" "));

// 5. Soru: Bir metinde "u" harfini içeren kaç kelime olduğunu bulmak için hangi dizi yöntemini kullanırsınız ve nasıl yaparsınız?

// let text = "There are many shorthand techniques in JavaScript that can shorten the code length, reduce redundancy, and improve the readability and maintainability of the code. This article will introduce 20 JS abbreviation techniques to improve efficiency, helping you say goodbye to the shit mountain and write elegant code easily!";

// console.log(text.match(/u/gi).length);

// 6. Soru: İki dizi içindeki ortak elemanları bulup yeni bir dizi oluşturun?

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [3, 4, 5, 6, 7];

// const intersectionArrFinder = (arr1, arr2) => {
//   const intersectionArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] == arr2[j]) {
//         intersectionArr.push(arr1[i]);
//         break;
//       }
//     }
//   }
//   return intersectionArr
// };
// console.log(intersectionArrFinder(arr1,arr2));


// 7. Bir isim listesindeki isimlerden ilk 10 ve son 10 ismi çıkartarak yeni bir sıralı liste oluşturun.

// let isimListesi = ["Ali", "Ayşe", "Mehmet", "Fatma", "Hasan", "Zeynep", "Emre", "Selin", "Mustafa", "Elif", "Baran", "Gamze", "Eren", "Dilara", "Burak", "Pınar", "İsmail", "Sibel", "Murat", "Gülşah", "Ahmet", "Hatice", "Kemal", "Sevgi", "Yusuf", "Aslı", "Can", "Zehra", "Onur", "Ebru", "Serkan", "Nazlı", "Cemal", "Gonca", "Ercan", "Esra", "Hakan", "Nur"];

// const isim1 = isimListesi.slice(0,10)
// const isim2 = isimListesi.slice(-10)
// let result = []
// result = isim1 +", " + isim2

// console.log(result);


// ============================================================================

// Given an array of objects representing people, each with a name and age, write a function that filters out people over a certain age and returns an array of their names.
// before solution trying something else and not finished
// const people = ["Ali", "Veli", "Danny", "Jenny"]
// const ages = [25, 30, 27, 26]

// const matchInfo = []

// const myFunc =(people,ages)=>{
//     for (let i = 0; i < people.length; i++) {
//         matchInfo.push(people[i]+": "+ages[i])   
//     }
//     return matchInfo
// }
// console.log(myFunc(people,ages));




// Arrays
// Certainly, here's another problem that involves JavaScript's `forEach`, `filter`, `map`, and arrays:

// *Problem:* You are given an array of strings containing names of people. You need to perform the following tasks:

// 1.  method to create a new array that contains only names with more than 5 characters.
// 2. to create a new array where each name is converted to uppercase.
// 3.  to print each uppercase name in the console.

// *Instructions:*

// 1. Start with an array of names, for example: `["Alice", "Bob", "Charlie", "David", "Eve"]`.
// 2.  method to create a new array that contains only names with more than 5 characters.
// 3.  to create a new array where each name is converted to uppercase.
// 4. method to print each uppercase name in the console.

// *Expected Output:*


// CHARLIE
// DAVID


// Your solution should demonstrate the use of `filter` to select names with more than 5 characters, `map` to convert those names to uppercase, and `forEach` to log the results.




// Sure, here's a problem that involves JavaScript's `forEach`, `filter`, `map`, and arrays:

// *Problem:* You are given an array of numbers. You need to perform the following tasks:

// 1.  method to create a new array that contains only even numbers from the original array.
// 2. to create a new array where each number is squared (each number is raised to the power of 2).
// 3.  method to log the result of each squared number in the console.

// *Instructions:*

// 1. Start with an array of numbers, for example: `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`.
// 2.  to create a new array that contains only even numbers.
// 3.  to create a new array where each number is squared.
// 4.  method to log each squared number in the console.

// *Expected Output:*


// 4
// 16
// 36
// 64
// 100


// Your solution should demonstrate the use of `filter` to select even numbers, `map` to square those numbers, and `forEach` to log the results.





// Of course! Here are some problems for you to solve that involve the use of `filter`, `map`, and `forEach` in JavaScript.

// *Basic Level:*

// 1. *Filter and Map:*
//    Given an array of numbers, filter out the even numbers and then create a new array where each number is doubled.

// 2. *Filter Names:*
//    Given an array of strings containing names, filter out the names that start with the letter "A."

// 3. *Calculate Total:*
//    Given an array of prices, use `map` to calculate the total cost after applying a 10% discount to each price.

// *Intermediate Level:*

// 4. *Filter Unique Values:*
//    Given an array of numbers, remove duplicate values using `filter` to create a new array with unique values.

// 5. *Transform Data:*
//    You have an array of objects, each with properties `name` and `age`. Use `map` to create a new array with only the names.

// 6. *Sum of Squares:*
//    Given an array of numbers, use `forEach` to calculate the sum of the squares of each number.

// Feel free to choose any problem and solve it. If you need guidance or solutions, feel free to ask!







// const people2= ["Ali", "Veli", "Danny", "Jenny"]

// const people3 = ["Alice", "Bob", "Charlie", "David", "Eve"]


// const result = people2
// .filter((name)=> name.length >= 5)
// .map((name)=>name.toUpperCase())

// console.log(result);


// const result2 = people3
// .filter((word)=>word.length >= 4)
// .map((letter)=> letter.toLowerCase())
// console.log("************************************");
// console.log(result2);









// const result = numbers
// .filter((number)=> number % 2 === 0)
// // .map((number)=> number ** 2)
// .forEach((number)=> console.log(number ** 2))


// console.log(result);
// console.log(numbers);
// console.log(result);


// const randomNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



// const ourResult = randomNumbers
// .reduce((number1,number2)=> (number1 + number2),5)
// console.log(ourResult);

// const ourResult2 = randomNumbers
// .reduce((a,b)=> a - b)
// console.log(ourResult2);


const numbers = [1,2,4,7,9,11]

const result3 = numbers
.reduce((x,y)=> x - y)
console.log(result3);

const result4 = numbers
.reduceRight((x,y)=> (x - y),4)

console.log(result4);



const sahislar = {
    sahis1: {
      name: "Can",
      name:"mahmud",
      surname: "Canan",
      dob: "1990",
      job: "developer",
      salary: "140000",
      drivingLicense: true,
    },
    sahis2: {
      name: "John",
      surname: "Sweet",
      dob: "1990",
      job: "tester",
      salary: "110000",
      drivingLicense: false,
    },
    sahis3: {
      name: "Steve",
      surname: "Job",
      dob: "2000",
      job: "developer",
      salary: "90000",
      drivingLicense: true,
    },
  }

  for (const name in sahislar) {
    console.log(name);
}

    console.log("*********************************");
  for (const name of Object.keys(sahislar)) {
    console.log(name);
 }

 console.log("=====================================");
  for (const name of Object.values(sahislar)) {
    console.log(name);
}

console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
  for (const name of Object.values(sahislar.sahis1)) {
    console.log(name);
}

console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
for (const name of Object.keys(sahislar.sahis1)) {
    console.log(name);
}
console.log("---------------------------------------");
  for (const name of Object.entries(sahislar)) {
    console.log(name);
 }
console.log("#######################################");  
const {sahis2}=sahislar
console.log(sahis2);
for (const item in sahis2) {
    
    console.log(item);    
}
console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

for (const value of Object.keys(sahis2)) {
    console.log(value);
}

console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
for (const value of Object.values(sahis2)) {
    console.log(value);
}

console.log("'''''''''''''''''''''''''''''''''''''''");
for (const value of Object.entries(sahis2)) {
    console.log(value);
}