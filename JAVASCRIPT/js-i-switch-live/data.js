// const name = prompt("Please enter your name :")
// const dob = prompt("Enter your day of birth: ")
// console.log(`${name} is ${new Date().getFullYear() - dob} years old`);


// const r = prompt("please enter the radius:")
// const PI = 3.14

// const square = PI * r * r
// console.log(`SQUARE = ${square}`);

// let number1 = 55

// console.log({number1}); // {number1:58} olarak çıktı verir key:value olarak

// let num = Number(prompt("enter a three digit number:"))

// const oneth = num % 10
// const tenth = (num & 100).toString.charAt(0)
// const hundredth = num.toString().charAt(0)

// console.log(oneth, tenth, hundredth);



// const num = 123
// tenth = num.toString().charAt(1)


// const x = Number(prompt())
// const y = Number(prompt())
// const z = Number(prompt())

// const sumNum = x + y + z
// const productNum = x * y * z

// let message = ""

// if ( x < y && y < z) {
//     message = `min value is x: ${x} and max value is z : ${z}
//     the sum is : ${sumNum} and the product is : ${productNum}`
// }else if (x < y && x < z && z < y){
//     message = `min value is x: ${x} and max value is y : ${y}
//     the sum is : ${sumNum} and the product is : ${productNum}`
// }else if (y < x && x < z){
//     message = `min value is y: ${y} and max value is z : ${z}
//     the sum is : ${sumNum} and the product is : ${productNum}`
// }else if (y < x && z < x){
//     message = `min value is y: ${y} and max value is x : ${x}
//     the sum is : ${sumNum} and the product is : ${productNum}`
// }else if (z < x && x < y){
//     message = `min value is x: ${x} and max value is z : ${z}
//     the sum is : ${sumNum} and the product is : ${productNum}`
// }

// ====================================================

// const day = Number(prompt("Please enter a number of day from 1 to 31(included):"))
// const month = Number(prompt("Please enter a number of month from 1 to 12(included):"))

// let message = ""

// if ( day <= 0 || day > 31 && month <= 0 || month >12) {
//     message = "Please enter a valid value!"
// }else if (day >= 21 && month ==2 || day <= 31 && month == 5) {
//     message = `The season for ${month}/${day} is Spring`
// }else if (day >= 1 && month == 6 || day <=21 && month == 9) {
//     message = `The season for ${month}/${day} is Summer`
// }else if (day >= 22 && month ==9 || day <= 20 && month == 12 ) {
//     message = `The season for ${month}/${day} is Fall`
// }else {
//     message = `The season for ${month}/${day} is Winter`
// }

// console.log(message);

