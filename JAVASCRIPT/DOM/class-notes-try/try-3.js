const h1 = document.createElement("h1")
const textOfH1 = document.createTextNode("Programlama Dilleri")
h1.appendChild(textOfH1)
document.body.appendChild(h1)
h1.setAttribute("style","color:red; font-size:4rem;text-align:center;margin-top:5rem")

const ul = document.createElement("ul")
const list1 = document.createElement("li")
const li1Text = document.createTextNode("JavaScript")
list1.appendChild(li1Text)
ul.appendChild(list1)
document.body.appendChild(ul)
// list1.style.color = "blueviolet"
list1.setAttribute("style","font-size: 1.5rem;color:blueviolet;list-style:none;text-align:center")