// const cars = ["sahin","dogan","serce"]

// let text = "";
// for (let i = 0; i < cars.length; i++) {
//     text += cars[i] + " ";
//   }
//   console.log(text);

// const userNum = Number(prompt("enter a number: "))

// let result = "";
// let message = "";
// for (let i = 1; userNum - i >=1; i++){
//     if (userNum < 0 ) {
//         message = "Please enter a positive number"
//     }
// }

// const userNum = Number(prompt("Please enter a number :"))
// const userNum = 3
// let message = ""
// if (userNum % 2 == 0){
//     message = 2 * userNum
// }else {
//     message = userNum ** 2
// }
// console.log(message);

// const userNum = Number(prompt("Please enter a number :"))

// let message =  (userNum % 2 ==0)?(userNum * 2):(userNum ** 2)
// console.log(message);

// ===========================================================

// const userNum = Number(prompt("Please enter a number :"))
// let lightRed = ""
// let lightYellow = ""
// let lightGreen = ""
// let counter = new Date().getSeconds()
// let message =""

// while (userNum > 30) {
//     if (lightRed){

//     }
// }

// ==================================================================

// const userNum = Number(prompt("Please enter a number :"))
// let message = ""
// if (userNum % 15 == 0) {
//    message = "WONDERFUL";
// }else if (userNum % 3 == 0) {
//     message = "HEY";
// }else if (userNum % 5 == 0) {
//     message = "OLEY"
// }else {
//     message = "Hey What's up Bro What's your problem with numbers"
// }

// console.log(message);

// const num = Math.round(Math.random()*100)

// let message = ""
// if (num % 15 == 0) {
//    message = "WONDERFUL";
// }else if (num % 3 == 0) {
//     message = "HEY";
// }else if (num % 5 == 0) {
//     message = "OLEY"
// }else {
//     message = "Hey What's up Bro What's your problem with numbers"
// }

// console.log(`The number is : ${num} and message is :${message}`);

// const num = Math.round(Math.random()*100)

// let message = (num % 15 == 0)?"WONDERFUL":(num % 3 == 0)?"HEY":(num % 5 == 0)?"OLEY":"Hey What's up Bro What's your problem with numbers"
// console.log(`The number is : ${num} and message is :${message}`);

// const num = Number(prompt("Please enter a number :"))
// const num = 5
// for (let i = 1; i <= num ; i++) {
//   let row = "";

//   for (let j = 1; j <= i ; j++) {
//     row += "*";
//   }
//   console.log(row);
// }


// ====================================================


function trafficLightSimulation() {
    // Set the durations for each light phase (in milliseconds)
    const greenLightDuration = 5000; // 5 seconds
    const yellowLightDuration = 2000; // 2 seconds
    const redLightDuration = 3000; // 3 seconds
    const total = 60000
    
    // Function to display a message and change the light color
    function showMessageAndChangeLight(message, color) {
        console.log(message);
        document.body.style.backgroundColor = color;
    }

    // Green light phase
    showMessageAndChangeLight("WAIT for green light", "red");
    setTimeout(function () {
        // After green light duration, change to yellow
        showMessageAndChangeLight("READY for yellow light", "yellow");

        // Yellow light phase
        setTimeout(function () {
            // After yellow light duration, change to red
            showMessageAndChangeLight("GO GO GO for green light", "green");

            // Red light phase (restart the simulation)
            setTimeout(trafficLightSimulation, redLightDuration);
        }, yellowLightDuration);
    }, greenLightDuration);
}

// Start the traffic light simulation
trafficLightSimulation();
