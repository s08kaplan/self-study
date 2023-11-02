const ul = document.querySelector("ul")
const addElement = document.querySelector(".btn-add")
const DelElement = document.querySelector(".btn-delete")
const inputElement = document.querySelector(".input-list")

function addEl(){
   const newLi = document.createElement("li")
   const textLi = document.createTextNode(inputElement.value)
   newLi.appendChild(textLi)
    ul.appendChild(newLi)
    document.body.appendChild(ul)

}
DelElement.addEventListener("click",delElem)
addElement.addEventListener("click",addEl)

function delElem(){
    ul.removeChild(ul.lastElementChild)
}