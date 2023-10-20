// arrays iterations questions (forEach, map, filter, reduce)


// soru 1: bir dizideki sayıların ortalamasını bulan fonksiyonu yazınız? 

let deli = [1, 2, 3, 45, 65]
// let result =""
// const lale = deli.reduce((num1,num2)=> num1 + num2)
// result = lale/deli.length
// console.log(lale);

const enSon = (deli) => {
    let result =""
    let gul =""
    gul = deli.reduce((num1,num2)=> num1 + num2)
    result = gul/deli.length
    return result
}

console.log(enSon(deli));



console.log(zencefil);
// let toplam = 0
// let ort = ""
// const sonuc = numbers1.forEach((number)=> {
//     toplam += number
//    ort = toplam / numbers1.length
// })
// console.log(ort);
// const sonuc = numbers1.reduce((number,secondNumber)=>{
//   return  (number + secondNumber)/numbers1.length
// })
// console.log(sonuc);



// soru 2: Soru: Bir dizi içerisindeki sayıların karesini alarak her bir sayıyı konsola yazdırın.

let numbers1 = [1, 2, 3, 45, 65]
// numbers1.forEach((number)=> console.log((number **2)))

const result = numbers1.map((x)=> x ** 2)
console.log(result);



// soru 3: Soru: Bir dizi içerisindeki sayıların karesini alarak yeni bir dizi oluşturun. Ardından, bu yeni dizideki çift sayıları filtreleyerek sadece çift sayıları içeren bir başka dizi oluşturun.

let numbers4 = [1, 2, 3, 4, 5];
const myResult = numbers4.map((number)=> number ** 2).filter((num)=>num % 2 === 0)
console.log(myResult);

// soru 4: Soru: Verilen bir diziyi tersine çevirin, ancak yalnızca forEach kullanarak yapın (reverse() kullanmadan).

let numbers5 = [1, 2, 3, 4, 5];
const reversed = []
numbers5.forEach((number)=> reversed.unshift(number))
console.log(reversed);

// soru 5: Soru: Bir dizi içindeki metin öğeleri içeren bir dizi verildiğinde, her öğeyi tersine çevirerek yeni bir dizi oluşturun.
// çıktı : ["tpircSavaJ", "nohtyP", "avaJ", "++C"]

let words = ["JavaScript", "Python", "Java", "C++"];
const reversed2 = words.map((word)=>word.split("").reverse().join(""))
console.log(reversed2);


// soru 6: Soru: Bir dizi içindeki asal sayıları filtreleyerek  yeni bir dizi oluşturun.




// soru 7: Soru: Bir dizideki sayıların karelerinden çift sayıların iki katlarının toplamını bulun.
let numbers7 = [1, 2, 3, 4, 5];
const reversed3 = numbers7.filter((number)=> number % 2 === 0).map((number)=> number * 2).reduce((num1,num2)=> num1 + num2)
console.log(reversed3);








const bizimArr = ["a", "b", , 1,2]

// for(let i in bizimArr){
//     console.log(i);
// }
// console.log(i);
// console.log("**************************");
// for(let j of bizimArr){
//     console.log(j);
// }