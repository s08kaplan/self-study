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



