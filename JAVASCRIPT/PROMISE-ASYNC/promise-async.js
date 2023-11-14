// const func1 = (something) => {
//     console.log("everything going well");
//     something()
// }

// const func2 = () => {
//     console.log("what about you?");
// }

// func1(func2)

// console.log("******************************");

// const func3 = (something) => {
//     something()
//     console.log("everything going well");
// }

// const func4 = () => {
//     console.log("what about you?");
// }

// func3(func4)

// console.log("---------------------------");


// const func5 = (something) => {
//     setTimeout(()=>{
//        something()
//         console.log("everything going well");
//     },1000)
    
// }

// const func6 = () => {
//     setTimeout(()=>{
//          console.log("what about you?");
//     },3000)
   
// }

// func5(func6)

console.log("===============================");
const func7 = (something) => {
    setTimeout(()=>{
        something()
        console.log("everything going well");
    },4000)
   
}

const func8 = () => {
    setTimeout(()=>{
         console.log("what about you?");
    },2000)
   
}

func7(func8);