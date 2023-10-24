// Write a JavaScript program to list the properties of a JavaScript object.

const student = {
  name: "David",
  lastName: "Rayy",
  class: 11,
  rollNo: 12,
};

for (let i in student) {
  console.log(i);
}

console.log(Object.values(student));
console.log(Object.values(student).toString());

// Write a JavaScript program to list the properties of a JavaScript object.

const stud = {
  name: "David",
  lastName: "Rayy",
  class: 11,
  rollNo: 12,
};

for (let i in stud) {
  console.log(`${i}: ${stud[i]}`);
}

const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

// for (let i of library) {
//   console.log(i);
// }

// for(const i in library){
//     console.log(library[i][i]);
// }

// console.log(Object.values(library));
console.log(library[0].valueOf());

const myResult = library.map((arr) => ({
  price: "20$",
  author: arr.author,
}));
console.log(myResult);

const myResult2 = (library[1].price = 30);
console.log(library);

const studentScores = {
  Alice: 95,
  Bob: 87,
  Charlie: 92,
  David: 78,
  Eve: 88,
};

// Given an object with properties representing student names and their respective scores, write a function to find and return the name of the student with the highest score


let highestScore = 0;

const result3 = (obj) => {
  for (let student in obj) {
    if (obj[student] > highestScore) {
      highestScore = obj[student];
    }
  }
  return highestScore;
};

const highest = result3(studentScores);
console.log(`The highest score is ${highest}`);
// Write a function that compares two objects and returns true if they have the same properties and values, and false otherwise.


const person1 = {
  name: "John",
  age: 25,
  city: "New York",
};

const person2 = {
  name: "Alice",
  age: 30,
  city: "Los Angeles",
};

const check = (obj1, obj2) => {
  // Check if both objects have the same number of properties
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  // Check if the properties and their values are the same
  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};

const conclusion = check(person1, person2);

if (conclusion) {
  console.log("The objects have the same properties and values.");
} else {
  console.log("The objects are different.");
}



