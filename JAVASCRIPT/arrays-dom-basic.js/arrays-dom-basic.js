const hex = [0,1,2,3,4,5,6,7,8,9, "A", "B", "C", "D", "E", "F" ]
const btn = document.getElementById("button")
const color = document.querySelector(".color")
const message = document.getElementById("baslik")
const myTry = document.querySelectorAll(".h3")


btn.addEventListener("click", function(){
    hexColor= "#"
    for(let i =0; i<6; i++){
        hexColor += hex[getRandomNumber()]
    }

    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor
    message.innerHTML = "woooooooow"
    myTry.forEach((h3)=> {
        h3.style.color = "blueviolet";
        h3.style.fontSize = "2rem"
    })
    
})

function getRandomNumber (){
    return Math.floor(Math.random() *hex.length)
}


