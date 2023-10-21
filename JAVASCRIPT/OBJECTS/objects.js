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