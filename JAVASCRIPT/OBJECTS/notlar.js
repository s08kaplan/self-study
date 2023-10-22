const person = {
    name: "John",
    age: 30,
    city: "New York"
  };


  console.log(person.name);
  console.log(person["name"]);

  const person1 = {
    firstName: {fake1:"John",
    fake2:"Betty",
    fake3:"Ronaldo"
  },
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  console.log(person1.firstName.fake1);
  console.log(person1.firstName.fake2);
  console.log(person1.firstName.fake3);
  console.log("******************************************");
  console.log(person1["firstName"]["fake1"]);
  console.log(person1["firstName"]["fake2"]);
  console.log(person1["firstName"]["fake3"]);


  const person2 = {
    firstName: "Richard",
    lastName: "Danny",
    id: 556622145,
    fullName: function() {
      return person2.firstName + " " + person2.lastName;
    }
  };

  console.log(person2.fullName());// burada fullName propertysinin değeri bir fonksiyon olduğu için yazdırırken () eklemeyi unutmayalım

  const myArray = Object.values(person2)
  console.log(myArray);// burada fonsiyon ile belirtilen kısım fonksiyonun yapısı olarak döner diğerleri normal elemanlar olarak döner


//   ====================================DOM=================================================


 