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


const gerson = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city  + " from " + country;
    }
  }
  
  const gerson1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  console.log(gerson.fullName.apply(gerson1, ["Oslo", "Norway"]));

  
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