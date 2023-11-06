//? Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

const addUpp = (number)=>{
    let sum = 0
    if(!isNaN(number)){
    for(let i = 1; i <= number;i++){
sum += i
    }
    }
    return sum
}

console.log(addUpp(10));

// ? Create a function which returns the unique elements of the given array.

const values = [1,2,3,1,2,4,5,6]
const uniqueValues =(arr)=>{
    let uniqueElements = []
for (let i = 0; i < arr.length; i++) {
    if(uniqueElements.includes(arr[i])){
        continue;
    }
    else {
        uniqueElements.push(arr[i])
    }
}
return uniqueElements
}

console.log(uniqueValues(values));