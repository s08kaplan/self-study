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

// console.log("===============================");
// const func7 = (something) => {
//     setTimeout(()=>{
//         something()
//         console.log("everything going well");
//     },4000)
   
// }

// const func8 = () => {
//     setTimeout(()=>{
//          console.log("what about you?");
//     },2000)
   
// }

// func7(func8);


const func1 = (something) => {
    console.log("hey");
    something()
}

const func2 = () => {
    console.log("i am here");
}

func1(func2)
console.log("***************");


const func3 = (something) => {
    something()
    console.log("hey");
}

const func4 = () => {
    console.log("i am here");
}

func3(func4)

console.log("--------------------");

const func5 = (something) => {
    setTimeout(()=>{
         something()
    console.log("hey"); 
    },2000)
   
  
}

const func6 = () => {
    console.log("i am here");
}

func5(func6)

console.log("=======================");

const operation = (x,y,op) => {
    return op(x,y)
}

const add =(a,b) =>{
    return a + b
}

const subtract = (w,t) => {
return w - t
}

const multiply = (y,z) => {
    return y * z
}

 console.log(operation(2,3,add));

 console.log(operation(5,8,multiply));

setTimeout(()=>{
    console.log( multiply(4,8));
}
  
,3000);

 console.log(operation(5,2,subtract));


//!  =============================================

const toplam = (a,b) => {
    return a + b
}

const result = toplam(2,3);

const kafamaGore = new Promise((resolve,reject)=>{
    if(result === 5){
        resolve()
    }else {
        reject("kusura bakma kardes sonuc 5 degil")
    }
})

kafamaGore
.then(()=>{
    console.log(`demek ki dogru kisma girdi o zaman  2 + 3 - 5 * 8 islemini de yap bi zahmet ${2+3-5*8} `);
})

.catch((err)=> {
    console.log("heey hata olustu");
})

//! ***************************************

const carpim = (k,l) => {
    return k * l
}

const result2 = carpim(5,4)

const kafamaGore2 = async () => {
    try {
        const sonuc = await Promise.resolve(result2 === 10)
        console.log(sonuc,`ifade true ya da false oldugu icin degil 
        dogru ya da yanlıs bir cevap geldigi icin
         buradaki mesaji okuyorsunuz 
         tabi console.log'da :))))
         ayrica await zaten beklemek demekti
          yani gelecek bir cevap bekleniyordu o da geldi 
         sayet cevap gelmeseydi o zaman hata olusurdu 
         ve catch kismina girerdi 
         bu arada konsolda bu kadar uzun yazi gorunce
          lutfen dilimize hakim olalim 😂`);
    } catch (err) {
        console.log("hata oldu hayret neden acaba");
    }
}

kafamaGore2()


console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");

const myChoice = new Promise((resolve,reject)=>{
    fetch("https://jsonplaceholder.org/users")
    .then(response => {
        return response.json()
    })
    .then(response.json().firstname)
})
.catch(err =>{
    console.log("errrrrrr");
})

console.log(myChoice);


const myChoice1 = new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => resolve(data.map(el=>el.name)))
        .catch(err => reject(err));
});

myChoice1
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log("Error:", err);
    });


    console.log(myChoice1);