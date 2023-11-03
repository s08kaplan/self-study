const clickButton = document.querySelector(".btn-click");
const mouseOverButton = document.querySelector(".btn-over");
const colorKeys = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

const colorSection = document.querySelector(".colorDiv");
const main = document.querySelector(".bgDiv")
const p = document.getElementById("colorText");

clickButton.addEventListener("click", () => {
  let randomColor = "#";

  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * colorKeys.length);
    let randomElement = colorKeys[randomNumber];
    randomColor += randomElement;

    p.innerText = randomColor;
    console.log((document.body.style.backgroundColor = randomColor));
  }
  p1.style.visibility = "visible";
});
let clickCount = 0

clickButton.addEventListener("click",()=>{
clickCount++
if(clickCount === 3){
    
// let image1Visible = false
// image1Visible = ! image1Visible
// if(image1Visible){
//     image1.style.display = "block"
// }else {
//     image1.style.display = "none"
// }
   const imageDiv = document.createElement("div")
   const image1 = document.createElement("img")
   const messageP = document.createElement("p")
   const message = document.createTextNode("Anthony hoca geldi dağılın assignment yolda!!!")
   messageP.appendChild(message)
   imageDiv.appendChild(messageP)
   image1.src = "https://ca.slack-edge.com/T05QKNCTHM4-U05QSC0S5C2-ee40c928bbc0-512"
   main.appendChild(imageDiv)
   imageDiv.appendChild(image1)
   image1.style.width = "100px"
   image1.style.position = "relative"
   image1.style.left="100px"
}
})




mouseOverButton.addEventListener("mouseover", () => {
  let randomColor = "#";

  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * colorKeys.length);
    let randomElement = colorKeys[randomNumber];
    randomColor += randomElement;

    p.innerText = randomColor;
    console.log((document.body.style.backgroundColor = randomColor));
  }
});

const p1 = document.createElement("p");
const message1 = document.createTextNode("Anthony hocam sürpriz birazdan");
p1.appendChild(message1);

colorSection.appendChild(p1);
p1.style.visibility = "hidden";


