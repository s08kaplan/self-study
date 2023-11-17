// const getInfo = () => {fetch("https://randomuser.me/api/")
// .then((res) => {if(!res.ok){
//     throw new Error("Hatasız Kul Olmaz")
// }
// return res.json()
// })
// .then(data => showInfo(data))
// .catch(err => showErr(err))
// }
// const showInfo = (data) =>{
//     console.log(data);

//     data.forEach(element => {
//         document.querySelector(".container").appendChild(element)
//     });

// }
// getInfo()

// const showErr =(err)=>{
//     document.querySelector(".container").append(err)
// }
// const btn = document.querySelector(".refresh")
//     btn.addEventListener("click",getInfo)


const url = 'https://randomuser.me/api/'


// fetch then 


// fetch(url)
// .then((res) =>
//   res.json()

// )
// .then((jsonData)=>{
//   const user = jsonData.results[0]

//   console.log(user);
  
//   const name = jsonData.results[0].name
//   console.log(name.title+' '+name.first+' '+ name.last);

//   ekranaBas(user)

// })
// .catch((err)=>{
//   console.log(err);
  
// })


// async await

async function getUser(){
try {
  const res = await fetch(url);
  const jsonData = await res.json();
  const user = jsonData.results[0]

  ekranaBas(user)
  
}catch (err) {
    document.body.innerText = err
    document.body.style.textAlign="center"
    document.body.style.color = "white"
    document.body.style.backgroundColor = "red"
  
    const intervalId = setInterval(() => {
      document.body.style.backgroundColor =
        document.body.style.backgroundColor === "red" ? "white" : "red";
        const urlErr = 'url("https://cdn.pixabay.com/photo/2014/09/19/16/09/smiley-452694_1280.jpg")'
        document.body.style.backgroundImage = 
        document.body.style.backgroundImage === urlErr?(document.body.style.backgroundImage.display = "none"):document.body.style.backgroundImage = urlErr;
        document.body.style.backgroundSize = 'cover';
    }, 100);
  
   
    setTimeout(() => {
      clearInterval(intervalId);
      document.body.style.backgroundColor = "red";
    }, 3000);
  }
    
  
}
  



getUser()
  



function ekranaBas(user){
  const {name} = user
console.log(user);
document.querySelector('.name').innerHTML = name.title + ' ' + name.first + ' ' + name.last;
document.querySelector('.email').innerHTML = user.email;

document.querySelector('.img-con img').src = user.picture.large;
document.querySelector('.adress').innerHTML = user.location.street.number + ' ' + user.location.street.name + ' ' + user.location.city + ' ' + user.location.state + ' ' + user.location.country + ' ' + user.location.postcode;
 console.log(document.querySelector('.img-con img'));
document.querySelector('.btn.random').addEventListener('click',getUser)
 
}