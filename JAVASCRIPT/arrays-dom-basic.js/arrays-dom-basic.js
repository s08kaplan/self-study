const hex = [0,1,2,3,4,5,6,7,8,9, "A", "B", "C", "D", "E", "F" ]
const btn = document.getElementById("button")
const color = document.querySelector(".color")
let message = document.getElementById("baslik")



btn.addEventListener("click", function(){
    hexColor= "#"
    for(let i =0; i<6; i++){
        hexColor += hex[getRandomNumber()]
    }

    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor
    message.innerHTML = "woooooooow"
})

function getRandomNumber (){
    return Math.floor(Math.random() *hex.length)
}