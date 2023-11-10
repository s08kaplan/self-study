// !==================DATE=======================
const headDate = document.querySelector(".head-date");
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
const year = date.getFullYear();

day = day < 10 ? "0" + day : day;
month = month < 10 ? "0" + month : month;
// let fullDate = day + "/" + month + "/" + year;
let fullDate = year + "-" + month + "-" + day
// headDate.value = fullDate;
document.querySelector("#date").value = fullDate
document.querySelector("#date").addEventListener("change",(item)=>{
  console.log(item.target.value);
})


// ?================HARCAMA MIKTARI -HARCAMA ALANI=================

let expenseAmount = document.querySelector("input.expense");
let expenseFor = document.querySelector(".harcama-input").firstElementChild;
// const expenseFor =  document.querySelector(".harcama-input input")

console.log(expenseAmount);
// ?===================HARCAMA ALANI KAYDET BUTTON===========

//? ========================AND EVENT======================

const save = document.querySelector(".kaydet");
console.log(expenseAmount.value);

save.addEventListener("click", warning1);
const validExpenseValues = /^(kira|fatura|kredi kartı)$/i;
function warning1() {
  if (expenseAmount.value === "" && expenseFor.value === "") {
    expenseFor.value = "madem bos yapican niye ugrastiriyon".toUpperCase();
  } else if (expenseAmount.value === "") {
    expenseFor.value = "hooop nire hani harcama miktari".toUpperCase();
  } else if (expenseAmount.value && expenseFor.value === "") {
    expenseFor.value = "tamam da harcama  ne olarak not alalim".toUpperCase();
  } else if (
    expenseAmount.value &&
    !validExpenseValues.test(expenseFor.value)
  ) {
    expenseFor.value =
      "canim gardasim kira mi fatura mi kredi karti mi nedir ya hu".toUpperCase();
  } else if (expenseAmount.value && validExpenseValues.test(expenseFor.value)) {
    const gider = document.querySelector(".number-table tr:nth-child(2) td");
    gider.innerText = expenseAmount.value;
    myTableFunc()
  }
  setTimeout(clearDefault, 2000);
}



function clearDefault() {
  expenseAmount.value = "";
  expenseFor.value = "";
}


function myTableFunc(){
const trashCan = "kova";
const newInfo = [fullDate, expenseFor.value, expenseAmount.value, trashCan];

 const table = document.querySelector(".second-part table");
const tbody = document.createElement("tbody")
const tr = document.createElement("tr");
// const td = document.createElement("td");
const tableDate = document.createElement("td")
tableDate.textContent = fullDate
const tableExpense = document.createElement("td")
tableExpense.innerText = expenseFor.value
const tableExpenseAmount = document.createElement("td")
tableExpenseAmount.innerText = expenseAmount.value
const tableProcess = document.createElement("td")
tableProcess.innerText = trashCan

tr.appendChild(tableDate)
tr.appendChild(tableExpense)
tr.appendChild(tableExpenseAmount)
tr.appendChild(tableProcess)
tbody.appendChild(tr) 
table.appendChild(tbody)


}














// ?=====================GELİR VE EKLE===================
const ekle = document.querySelector("button.ekle");

ekle.addEventListener("click", myFunc2);

function myFunc2() {
  const gelirInput = document.querySelector(
    "[placeholder='Gelirinizi giriniz']"
  );

  const gelir = document.querySelector(".number-table tr:nth-child(1) td");
  gelir.innerText = gelirInput.value;

  function clearDefault2() {
    gelirInput.value = "";
  }
  setTimeout(clearDefault2, 2000);
}
