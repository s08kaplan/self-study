// console.log(1 && 3);  cevap: 3 (iki değer de true ise ikinci değeri döner)
// console.log(1 && 0);  cevap: 0 (false değeri arar varsa false değeri döner)
// console.log([] && 1); cevap: 1  (boş array false değildir dolayısıyla iki true değerden sonuncusunu döner)

// console.log(0 || false); cevap: false (veya operatörü ture arar eğer iki değer de false ise ikinci değeri döner )
// console.log(0 || true);  cevap: true
// console.log(1 || true);  cevap: true

//if/else - ternary
// kullanıcıdan yaş değeri alan ve yaş >= 18 ise "Yaşınız ... , oy verebilirsiniz.", aksi halde "Yaşınız ... , oy veremezsiniz." uyarısı veren kodu if/else ve ternary kullanarak yazınız

// if-else
// const userAge = Number(prompt("please enter your age: "))
// let message =""
// if(userAge >= 18){
// message=`Your age is: ${userAge} and you can vote`
// }else {
//     message = `Your age is: ${userAge} and you cannot vote`
// }

//  Ternary
// const userAge = Number(prompt("please enter your age: "))
// userAge >= 18 ? `Your age is: ${userAge} and you can vote` : `Your age is: ${userAge} and you cannot vote`

//functions
// kullanıcının isim ve doğum tarihi değerlerini parametre olarak alan ve kullanıcın yaşını hesaplayan fonksiyonu function declaration ve arrow function ile yazınız

// const userName = prompt("please enter your name : ");
// const userBirthYear = Number(prompt("please enter your date of birth: "));

//  function declaration

// function myCalculate(name, year) {
//     let message = ""
//   const date = new Date().getFullYear();
//   const age = date - year;
// return message = `Your name is: ${name} and you are ${age} years old`
// }
// console.log(myCalculate(userName,userBirthYear));

// Arrow Function

// const userName = prompt("please enter your name : ");
// const userBirthYear = Number(prompt("please enter your date of birth: "));

// const calculateAge = (name,year) =>{
//     let message = ""
//     const date = new Date().getFullYear();
//     const age = date - year;
//     return message = `Your name is: ${name} and you are ${age} years old`
// }

// console.log(calculateAge(userName,userBirthYear));


//Array iterators
//  isimler dizisin içerisindeki her ismi küçük harf olarak yeni bir diziye saklayınız.
//  const isimler = [
//   'Ahmet',
//   'mehmet',
//   'ismet',
//   'SAFFET',
//   'Can',
//   'Canan',
//   'Cavidan',
// ];

// const result = isimler.map(isim=>isim.toLowerCase())
// console.log(result);

//* fiyatlar array'inde fiyatı 250 TL den az olanlari ayri bir diziye saklayalınız.
// const fiyatlar = [100, 250, 50, 89];

// const priceResult = fiyatlar.filter(fiyat=>fiyat < 250) 
// console.log(priceResult);

//  Yasi(age) 33 den kücük olan kisilerin adlarini (name) listeleyiniz.
// const kisiler = [
//   {
//     name: 'Ahmet',
//     surname: 'Can',
//     job: 'developer',
//     age: 30,
//   },
//   {
//     name: 'Mehmet',
//     surname: 'Baki',
//     job: 'tester',
//     age: 35,
//   },
//   {
//     name: 'Nur',
//     surname: 'Ersan',
//     job: 'team lead',
//     age: 40,
//   },
//   {
//     name: 'Merve',
//     surname: 'Veli',
//     job: 'developer',
//     age: 26,
//   }
// ];

// const wanted = kisiler
// .filter(kisi=>kisi.age < 33)
// .reduce((sum,number)=> (sum + number.age),0)

// console.log(wanted);

// ikinci cozum

// const istenen = kisiler
// .reduce((sum,kisi)=>{
//     if(kisi.age < 33){
//         return sum + kisi.age   
//     }
//     return sum
// },0)

// console.log(istenen);

// Objects
// calisan objesinde … değerlerini consola yazdırınız
// const calisan = {
//   ad: 'Ahmet',
//   "soy-ad": 'Yilmaz',
//   yas: 30,
//   is: 'developer',
//   lokasyon: {sehir: "Ankara", ilce: "Kızılay"},
//   diller: ['C', 'C++', 'Pyhton', 'JS'],
//   maas: 120000,
// };

// console.log(Object.values(calisan));
// console.log({...calisan});

// Spread
// araclar ve otomobiller dizilerini başka bir dizide birleştiriniz
// const araclar = ['Ucak', 'Helikopter', 'Bisiklet'];
// const otomobiller = ['Tır', 'Otobus', 'Araba', 'SUV'];

// const tasitlar = [...araclar,...otomobiller]
// console.log(tasitlar);

// calısan objesine ait değerleri yas değerini güncelleyerek yeni bir obje içinde biriktiriniz
// const calisan = {
//   ad: 'Ahmet',
//   "soy-ad": 'Yilmaz',
//   yas: 30,
//   is: 'developer',
//   lokasyon: {sehir: "Ankara", ilce: "Kızılay"},
//   diller: ['C', 'C++', 'Pyhton', 'JS'],
//   maas: 120000,
// };
// const newCalisan = {...calisan, yas: 35}
// const degerler = Object.values(newCalisan)
// console.log(degerler);

//Destructuring
// car objesinden brand, model,name,surname propertilerini destruct ediniz
// const car = {
//     brand: 'BMW',
//     model: 1990,
//     engine: 1.6,
//     owner:{
//       name: 'Ahmet',
//       surname: 'Can',
//   },
// };

// const {brand,model,owner:{name,surname}} = car
// console.log(brand);
// console.log(model);
// console.log(name);
// console.log(surname);


// Data fetching
// aşağıdaki url'den data çekerek first name değerini console'da gösteriniz
// let url= 'https://randomuser.me/api/'


// fetch ile cozum

// fetch(url)
// .then(res=>res.json())
// .then(data=>console.log(data.results[0].name.first))
// .catch(error=>console.log(error))


// async-await 

// const resultDataName = async () => {
//     try {
        
//    const res = await fetch(url)
//    const data = await res.json()
//    console.log(data.results[0].name.first);
    
   
//     } catch (error) {
//         console.log("sorry something went wrong");
//     }
    
// }
   
// console.log(resultDataName());