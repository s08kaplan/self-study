// // // Write a JavaScript program to list the properties of a JavaScript object.

// // const student = {
// //   name: "David",
// //   lastName: "Rayy",
// //   class: 11,
// //   rollNo: 12,
// // };

// // for (let i in student) {
// //   console.log(i);
// // }

// // console.log(Object.values(student));
// // console.log(Object.values(student).toString());

// // // Write a JavaScript program to list the properties of a JavaScript object.

// // const stud = {
// //   name: "David",
// //   lastName: "Rayy",
// //   class: 11,
// //   rollNo: 12,
// // };

// // for (let i in stud) {
// //   console.log(`${i}: ${stud[i]}`);
// // }

// // const library = [
// //   {
// //     author: "Bill Gates",
// //     title: "The Road Ahead",
// //     readingStatus: true,
// //   },
// //   {
// //     author: "Steve Jobs",
// //     title: "Walter Isaacson",
// //     readingStatus: true,
// //   },
// //   {
// //     author: "Suzanne Collins",
// //     title: "Mockingjay: The Final Book of The Hunger Games",
// //     readingStatus: false,
// //   },
// // ];

// // // for (let i of library) {
// // //   console.log(i);
// // // }

// // // for(const i in library){
// // //     console.log(library[i][i]);
// // // }

// // // console.log(Object.values(library));
// // console.log(library[0].valueOf());

// // const myResult = library.map((arr) => ({
// //   price: "20$",
// //   author: arr.author,
// // }));
// // console.log(myResult);

// // const myResult2 = (library[1].price = 30);
// // console.log(library);

// // const studentScores = {
// //   Alice: 95,
// //   Bob: 87,
// //   Charlie: 92,
// //   David: 78,
// //   Eve: 88,
// // };

// // // Given an object with properties representing student names and their respective scores, write a function to find and return the name of the student with the highest score

// // let highestScore = 0;

// // const result3 = (obj) => {
// //   for (let student in obj) {
// //     if (obj[student] > highestScore) {
// //       highestScore = obj[student];
// //     }
// //   }
// //   return highestScore;
// // };

// // const highest = result3(studentScores);
// // console.log(`The highest score is ${highest}`);
// // // Write a function that compares two objects and returns true if they have the same properties and values, and false otherwise.

// // const person1 = {
// //   name: "John",
// //   age: 25,
// //   city: "New York",
// // };

// // const person2 = {
// //   name: "Alice",
// //   age: 30,
// //   city: "Los Angeles",
// // };

// // const check = (obj1, obj2) => {
// //   // Check if both objects have the same number of properties
// //   const keys1 = Object.keys(obj1);
// //   const keys2 = Object.keys(obj2);

// //   if (keys1.length !== keys2.length) {
// //     return false;
// //   }

// //   // Check if the properties and their values are the same
// //   for (const key of keys1) {
// //     if (obj1[key] !== obj2[key]) {
// //       return false;
// //     }
// //   }

// //   return true;
// // };

// // const conclusion = check(person1, person2);

// // if (conclusion) {
// //   console.log("The objects have the same properties and values.");
// // } else {
// //   console.log("The objects are different.");
// // }

// // const person = {
// //   firstName: "John",
// //   lastName: "Doe",
// //   address: {
// //     street: "123 Main St",
// //     city: "Exampleville",
// //     zipCode: "12345"
// //   }
// // };
// // console.log("****************************************");
// // console.log(Object.values(person));
// // console.log("============================");
// // console.log(Object.keys(person));
// // console.log("*******===============********************");
// // console.log(Object.entries(person));

// // console.log(person.firstName);
// // console.log(person["firstName"]);
// // console.log(person.address.zipCode);

// // const school = {
// //   name: "Example School",
// //   students: [
// //     {
// //       firstName: "Alice",
// //       lastName: "Smith",
// //       grade: 9
// //     },
// //     {
// //       firstName: "Bob",
// //       lastName: "Johnson",
// //       grade: 10
// //     }
// //   ]
// // };

// // console.log(school.students[0].firstName);
// // console.log(school.students[1].grade);

// // const studentsss = [{firstName: "Alice",lastName: "Smith",grade: 9}, {firstName: "Bob",lastName: "Johnson",grade: 10}]

// // const organization = {
// //   name: "Tech Company",
// //   departments: {
// //     hr: {
// //       manager: "Alice",
// //       employees: ["Bob", "Charlie"]
// //     },
// //     development: {
// //       manager: "David",
// //       employees: ["Eve", "Frank"]
// //     }
// //   },
// //   myChoice:function(){
// //    return this.name+ " "+this.departments.hr.manager
// //   }
// // };

// // console.log(organization.departments.hr.employees[1]);
// // console.log(organization["departments"]["development"]["employees"][1]);
// // console.log(organization.myChoice());

// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   fullName: function() {

//     return `${this.firstName} ${this.lastName}`;
//   },
//   greet: function() { console.log('hello'); },
//   greet2() { console.log('hello2'); }
// };
// // console.log(person.fullName());
// console.log(person.greet());
// console.log(person.greet2());

// Certainly! The use of the prototype in JavaScript provides several advantages, including efficient memory usage and the ability to add methods or properties to multiple objects of the same constructor. Let me explain these advantages simply:

// Efficient Memory Usage: When you create an object using a constructor function, any methods or properties added directly within the constructor are duplicated in each object. This can consume a lot of memory if you create many instances of that object. Using the prototype, you store the methods and properties only once, and all objects share the same reference, saving memory.

// Adding Methods to Multiple Objects: When you add a method to the prototype of a constructor, all objects created from that constructor automatically gain access to that method. This is useful when you want to share methods or properties among multiple objects.

// Here's an example:

// javascript
// Copy code
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// // Adding a method to the prototype
// Person.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// const person1 = new Person("John", "Doe");
// const person2 = new Person("Alice", "Smith");

// console.log(person1.getFullName()); // Output: "John Doe"
// console.log(person2.getFullName()); // Output: "Alice Smith"
// In this example, getFullName is defined on the prototype, and both person1 and person2 share the same method, which helps save memory and makes code maintenance easier.

// // Using the prototype is a fundamental concept in JavaScript's object-oriented programming and is essential when working with constructor functions to create objects efficiently.

// const posts = [
//   {
//     title: "Post 1",
//     tags: ["php", "css"],
//   },

//   {
//     title: "Post 2",
//     tags: ["javascript", "html5"],
//   },
//   {
//     title: "Post 3",
//     tags: ["html5", "json"],
//   },
// ];
//  const result4 = posts.reduce((acc,obj)=> [...acc,...obj["tags"]],[])
//  console.log(result4);

//  const lastResult = result4.reduce((acc,item)=>{
//     if(!acc.includes(item)){
//         acc.push(item)
//     }
//     return acc
//  },[])
//  console.log(lastResult);

//  const valuesOfArr = [1,2,1,5,1,4,2,6,2,8]
//  const myChoice2 = valuesOfArr.reduce((acc,number)=>{
//     if(!acc.includes(number)){
//         acc.push(number)
//     }
//     return acc
//  },[])

//  console.log(myChoice2.sort((a,b)=> a-b));

//  const organization = {

//    name: "Tech Company",
//    departments: {
//      hr: {
//        manager: "Alice",
//        employees: ["Bob", "Charlie"]
//      },
//      development: {
//        manager: "David",
//        employeess: ["Eve", "Frank"]
//      }
//    }
// }

// const {departments}=organization
// console.log(departments);
// console.log("****************************");
// const {departments:{hr}}=organization
// console.log(hr);
// console.log("*****************************");
// const {departments:{hr:{employees}}}= organization
// console.log(employees);
// console.log("*********************************");

// const {departments:{development:{employeess:[,p]}}}= organization
// console.log(employeess);
// console.log("************************************");

// console.log(p);

// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.

// const constants = [2.72, 3.14, 9.81, 37, 100]
// const [e,pi,gravity,humanBodyTemp,waterBoilingTemp]= constants

// console.log(humanBodyTemp);
// const newValue = [firstValue,secondValue,...others] =constants
// console.log(others);
// console.log(firstValue);
// ======================================================

// Destructure and assign the elements of countries array to fin, est, sw, den, nor

// const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

// const [fin,est,sw,den,nor] = countries
// console.log(den);
// console.log(nor);

// ================================================

// Destructure the rectangle object by its properties or keys

// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200,
//   perimeter: 60
// }

// const {width:w,height:h,area,perimeter:p} = rectangle

// console.log(p);
// console.log(area);
// console.log(w);

// =======================================

//Iterate through the users array and get all the keys of the object using destructuring

const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

// const names = ["Alice", "Bob", "Charlie"];
// //Write your code here
// const nameLengths = names
// .map(name=> name.length )
// console.log(nameLengths) // [5, 3, 7]

// const words = ["apple", "banana", "cherry"];
// const capitalizedWords = words
// .map(name=>name.toUpperCase())
// console.log(capitalizedWords)

// function deepFreeze (o) {
//   Object.freeze(o);
//   if (o === undefined) {
//     return o;
//   }

//   Object.getOwnPropertyNames(o).forEach(function (prop) {
//     if (o[prop] !== null
//     && (typeof o[prop] === "object" || typeof o[prop] === "function")
//     && !Object.isFrozen(o[prop])) {
//       deepFreeze(o[prop]);
//     }
//   });

//   return o;
// };

// const products = [
//   { name: "Product 1", price: 20, category: "Electronics" },
//   { name: "Product 2", price: 30, category: "Clothes" },
//   { name: "Product 3", price: 40, category: "Electronics" },
//   { name: "Product 4", price: 50, category: "Clothes" },
//   { name: "Product 5", price: 60, category: "Clothes" },
//   { name: "Product 6", price: 70, category: "Electronics" },
//   { name: "Product 7", price: 80, category: "Clothes" },
//   { name: "Product 8", price: 90, category: "Electronics" },
//   ];
// const[{products:{price},products:{category}}]=products
// const mySolution = products
// .filter(product=> product.category === "Electronics")
// .map(obj=>obj.price)
// .reduce((sum,price)=> sum + price)

// const electronics = products
// .filter(product=> (product.category === "Electronics"))

// const electronicsLength = electronics.length
// const electronicsAverage = mySolution/electronicsLength

// console.log(electronicsAverage)

// const mySolution2 = products
// .filter(product=> product.category === "Clothes")
// .map(obj=>obj.price)
// .reduce((sum,price)=> sum + price)

// const clothes = products
// .filter(product=> (product.category === "Clothes"))

// const clothesLength = electronics.length
// const clothesAverage = mySolution/electronicsLength

// console.log(clothesAverage)

// let wantedResultForElectronics = electronicsAverage > 50 && electronicsAverage
// let wantedResultForClothes = clothesAverage > 50 && clothesAverage

// console.log(wantedResultForClothes,wantedResultForElectronics);

// const products = [
//   { name: "Product 1", price: 20, category: "Electronics" },
//   { name: "Product 2", price: 30, category: "Clothes" },
//   { name: "Product 3", price: 40, category: "Electronics" },
//   { name: "Product 4", price: 50, category: "Clothes" },
//   { name: "Product 5", price: 60, category: "Clothes" },
//   { name: "Product 6", price: 70, category: "Electronics" },
//   { name: "Product 7", price: 80, category: "Clothes" },
//   { name: "Product 8", price: 90, category: "Electronics" },
//   ];

//   const sumOfElectronics = products.reduce((acc,item)=> {

//    if(item.category==="Electronics"){
//    return acc + item.price}
//    else {
//     return acc
//    }

//   },0)
//   console.log(sumOfElectronics);

//   const sumOfClothes = products.reduce((acc,item)=> {

//     if(item.category==="Clothes"){
//     return acc + item.price}
//     else {
//      return acc
//     }

//    },0)
// console.log(sumOfClothes);

// ======================================================

// Task : You are given an array of objects representing a collection of employees, each with a name, salary,
// and department. Your task is to use map, filter, and reduce to calculate the average salary for each
// department and then return an array of objects containing only the departments that have an average
// salary above 65000.

const employees = [
  { name: "John", salary: 50000, department: "IT" },
  { name: "Jane", salary: 60000, department: "HR" },
  { name: "Bob", salary: 55000, department: "IT" },
  { name: "Sophie", salary: 75000, department: "HR" },
  { name: "Mike", salary: 65000, department: "IT" },
  { name: "Emily", salary: 80000, department: "HR" },
  { name: "David", salary: 70000, department: "IT" },
];

// // const departmentGroup = department
// const employeeDepartmentGroup = employees.reduce((acc,group)=>{
//   let keyWord = group.department
// if(!acc[keyWord]){
//   acc[keyWord]=[]
// }
//  acc[keyWord].push(group)
// return acc
// },{})

// // console.log(employeeDepartmentGroup);
// console.log(employeeDepartmentGroup["IT"]);

/* Use reduce to create an object with department as the key
and an array of employee objects as the value */
const employeesByDepartment = employees.reduce((acc, employee) => {
  const department = employee.department;
  if (!acc[department]) {
    acc[department] = [];
  }
  acc[department].push(employee);
  return acc;
}, {});
// Use map to calculate the average salary for each department
const avgSalaryByDepartment = Object.keys(employeesByDepartment).map(
  (department) => {
    const sum = employeesByDepartment[department].reduce(
      (acc, employee) => acc + employee.salary,
      0
    );
    return {
      department: department,
      average: sum / employeesByDepartment[department].length,
    };
  }
);
// Use filter to only select departments with an average above a certain threshold
const highPaidDepartments = avgSalaryByDepartment.filter(
  (department) => department.average > 65000
);
console.log(highPaidDepartments);

// ===========================================

//!Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.
const input = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 65,
  },
];

//result [13, 67, 54];

// const wantedResult = input.reduce((acc,arr)=>{
//   let age = arr.age
//   if(!acc[age]){
//     acc[age]=[]
//   }
//   acc[age].push(age)
//   return acc
// },{})

// console.log(wantedResult);

// const [{age}] = input

// console.log(age);

// const ageArr =input.map(arr=> arr.age)
// console.log(ageArr);

// console.log(Math.min(...ageArr));
// console.log(Math.max(...ageArr));
const ageOfArr = (arr) => {
  const ageArr = arr.map((arr) => arr.age);

  return [
    Math.min(...ageArr),
    Math.max(...ageArr),
    Math.max(...ageArr) - Math.min(...ageArr),
  ];
};

console.log(ageOfArr(input));

// ========================================================

// Write a function that takes an array and a target number as input, and returns the indices of two numbers within the array that add up to the target number. If no such numbers exist, the function should return null.
// For example:
// Input array: [1, 2, 3, 4, 5]
// Target number: 9
// In this case, the function should return [3, 4], because 4 + 5 = 9 and these numbers are at the 3rd and 4th indices in the array.

// const myFunc = (arr, number) => {
//   let result = null;

//   arr.forEach((a, i) => {
//     arr.forEach((b, j) => {
//       if (a + b === number && i < j) {
//         result = [i, j];
//       }
//     });
//   });

//   return result;
// };

// const userArr = [1, 2, 3, 4, 5];
// console.log(myFunc(userArr, 9));

//! if first dice is 1 and second dice is 6, output should be 'one - six'

// For example :

// call this function with dices(10) Yo should display all 10 result.

// And display the result in the following format on the console:

// for Example:

//! 1st dice: 2 2nd dice: 3 output => 'two' - 'three'

//! 1st dice: 6 2nd dice: 4 output => 'four' - 'six' // Always dsiplay the low dice first.

const dice1 = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
};

const dice2 = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
};

const dices = (obj1, obj2) => {
  let result = "";
  let random1 = Math.round(Math.random() * Object.keys(dice1).length);
  // obj1[random1]
  let random2 = Math.round(Math.random() * Object.keys(dice2).length);
  // obj2[random2]
  if (random1 === 0) {
    random1++;
  }
  if (random2 === 0) {
    random2++;
  }
  if (obj1[random1] < obj2[random2] && Number(obj1) + Number(obj2) !== 10) {
    result = `${obj1[random1]}  ${obj2[random2]}`;
  } else if (
    obj1[random1] > obj2[random2] &&
    Number(obj1) + Number(obj2) !== 10
  ) {
    result = `${obj2[random2]}   ${obj1[random1]}`;
  } else if (Number(obj1) + Number(obj2) === 10) {
    result = "ten";
  }
  return result;
};

console.log(dices(dice1, dice2));









const input2 = {
  1: "John",
  age1: 13,

  2: "Mark",
  age2: 56,

  3: "Rachel",
  age3: 45,

  4: "Nate",
  age4: 67,

  5: "Jennifer",
  age5: 65,
};
// cons,name2,name3}=input2
console.log(input2[1]);




const input3 = [
  {
    name: "John",
    age: 13,
  },
  {
    person: "Mark",
    age1: 56,
  },
  {
    name2: "Rachel",
    age2: 45,
  },
  {
    name3: "Nate",
    age3: 67,
  },
  {
    name4: "Jennifer",
    age4: 65,
  },
];
 const [{name2,age2}]=input3
 console.log(name2);