// !===============HARCAMA FORMU=====================
document.addEventListener("DOMContentLoaded",()=>{
  const harcamaFormu = document.querySelector("#harcama-formu");
const kaydet = document.getElementById("kaydet");
const ekle = document.querySelector("#ekle-btn")

// let miktar = document.getElementById("miktar").value;
//   let tarih = document.getElementById("tarih").value;
    
//   let harcamaAlani = document.getElementById("harcama-alani").value;

  
//   let message = "";
//   let textColor = "";
//   let bgColor = "";

kaydet.addEventListener("click", harcamaFormKaydet);

function harcamaFormKaydet(e) {
  e.preventDefault();

  let miktar = document.getElementById("miktar").value;
  let tarih = document.getElementById("tarih").value;
    
  let harcamaAlani = document.getElementById("harcama-alani").value;
  

  let message = "";
  let textColor = "";
  let bgColor = "";

  switch (true) {
    case tarih === "" && miktar === "" && harcamaAlani === "":
      message = "Madem boş bırakacan ne diye uğraşıyon!!!";
      textColor = "black";
      bgColor = "red";
      break;
    case tarih && miktar === "" && harcamaAlani === "":
      message = "Hani miktar, hani harcama alanı";
      textColor = "black";
      bgColor = "yellow";
      break;
    case tarih && miktar < 0 && harcamaAlani === "":
      message = "Yok daha neler ";
      textColor = "blueviolet";
      bgColor = "magenta";
      break;
    case tarih && miktar < 0 && harcamaAlani:
      message = "çay da söyleyim mi!!!! ";
      textColor = "blueviolet";
      bgColor = "gray";
      break;
    case tarih==="" && miktar < 0 && harcamaAlani:
      message = "balkonu da mutfağa katalım mı!! ";
      textColor = "blueviolet";
      bgColor = "gray";
      break;
    case tarih && miktar && harcamaAlani === "":
      message = "Arkadaş, boş bırakma ki daha sonra anlayabilesin";
      textColor = "yellowgreen";
      bgColor = "green";
      break;
    case tarih ==="" && miktar && harcamaAlani === "":
      message = "oldu paşam";
      textColor = "yellowgreen";
      bgColor = "blue";
      break;


    // case tarih && miktar && harcamaAlani:
    //     //  istenen();
    //      tarih=""
    //      miktar=""
    //      harcamaAlani=""
        //  break;
  }


  showMessage(message, textColor, bgColor);

  if(tarih && miktar && harcamaAlani){
      const table = document.querySelector("#harcama-tablosu")

    const tbody = document.querySelector("#harcama-body")
    const tr = document.createElement("tr")
   const tableTarih = document.createElement("td")
    tableTarih.innerText=tarih
   const tableMiktar = document.createElement("td")
   tableMiktar.innerText= miktar
  const  tableHarcamaAlani = document.createElement("td")
  tableHarcamaAlani.innerText = harcamaAlani
    const kova = document.createElement("td")
    kova.innerText="kova resmi:))"
    tr.appendChild(tableTarih)
    tr.appendChild(tableHarcamaAlani)
    tr.appendChild(tableMiktar)
    tr.appendChild(kova)
    tbody.appendChild(tr)
table.appendChild(tbody)

setTimeout(clearDefault, 2000);
        
kova.addEventListener("click",()=>{
  kova.parentNode.remove()
})
         
  }
}

function showMessage(message, textColor, bgColor) {
  document.querySelector("body").style.color = textColor;
  document.querySelector("body").style.backgroundColor = bgColor;
  document.querySelector("form#harcama-formu h4").innerText =
    message.toUpperCase();

  setTimeout(clearDefault, 2000);
}

function clearDefault() {
  document.querySelector("body").style.color = "";
  document.querySelector("body").style.backgroundColor = "";
  document.querySelector("form#harcama-formu h4").innerText = "Harcama Formu";

  let tarih = document.getElementById("tarih").value;
  let harcamaAlani = document.getElementById("harcama-alani").value;

  tarih=""
  miktar=""
 harcamaAlani=""
}




ekle.addEventListener("click",(e)=>{
  e.preventDefault()
  const gelir = document.querySelector("#geliriniz")
    const gelirInput = document.querySelector("#gelir-input").value
    gelir.innerText = gelirInput

    const gider = document.querySelector("#gideriniz")
    
  const miktar = document.getElementById("miktar").value;
    gider.innerText = miktar

    const kalan = document.querySelector("#kalan")
    kalan.innerText = Number(gelir.innerText) - Number(gider.innerText)
  setTimeout(ekleDefault,2000);
  })

function ekleDefault(){
  ekle.value =""
}



})





























































// function istenen(){
//   const miktar = document.getElementById("miktar").value;
//   const tarih = document.getElementById("tarih").value;
    
//   const harcamaAlani = document.getElementById("harcama-alani").value;
  
//   const table = document.querySelector("#harcama-tablosu")

//     const tbody = document.querySelector("#harcama-body")
//     const tr = document.createElement("tr")
//    const tableTarih = document.createElement("td")
//     tableTarih.innerText=tarih
//    const tableMiktar = document.createElement("td")
//    tableMiktar.innerText= miktar
//   const  tableHarcamaAlani = document.createElement("td")
//   tableHarcamaAlani.innerText = harcamaAlani
//     const kova = document.createElement("td")
//     kova.innerText="kova resmi:))"
//     tr.appendChild(tableTarih)
//     tr.appendChild(tableHarcamaAlani)
//     tr.appendChild(tableMiktar)
//     tr.appendChild(kova)
//     tbody.appendChild(tr)
// table.appendChild(tbody)
// }





    // const miktar = document.getElementById("miktar").value;
  //   const tarih = document.getElementById("tarih").value;
      
  //   const harcamaAlani = document.getElementById("harcama-alani").value;
    
  //   const table = document.querySelector("#harcama-tablosu")
  
  //     const tbody = document.querySelector("#harcama-body")
  //     const tr = document.createElement("tr")
  //    const tableTarih = document.createElement("td")
  //     tableTarih.innerText=tarih
  //    const tableMiktar = document.createElement("td")
  //    tableMiktar.innerText= miktar
  //   const  tableHarcamaAlani = document.createElement("td")
  //   tableHarcamaAlani.innerText = harcamaAlani
  //     const kova = document.createElement("td")
  //     kova.innerText="kova resmi:))"
  //     tr.appendChild(tableTarih)
  //     tr.appendChild(tableHarcamaAlani)
  //     tr.appendChild(tableMiktar)
  //     tr.appendChild(kova)
  //     tbody.appendChild(tr)
  // table.appendChild(tbody)















// if(tarih.value === "" && miktar.value ==="" && harcamaAlani.value ===""){
//  document.querySelector("body").style.color = "black"
//     document.querySelector("body").style.backgroundColor = "red"
//  document.querySelector("form#harcama-formu h4").innerText="Madem boş birakacan ne diye ugrastiriyon!!!".toUpperCase()
// }
// else if(tarih.value && miktar.value ==="" && harcamaAlani.value ===""){
//     document.querySelector("form#harcama-formu h4").innerText ="hani miktar hani harcama alani".toUpperCase()
//     document.querySelector("form#harcama-formu h4").style.color = "black"
// document.querySelector("body").style.backgroundColor = "yellow"
// }
// else if(tarih.value && miktar.value < 0  && harcamaAlani.value ===""){
//     document.querySelector("body").style.color = "blueviolet"
//     document.querySelector("body").style.backgroundColor = "magenta"
//     document.querySelector("form#harcama-formu h4").innerText ="arkadas bos birakma ki daha sonra anlayabilesin".toUpperCase()
//     if(tarih.value && miktar.value  && harcamaAlani.value ===""){
//         document.querySelector("form#harcama-formu h4").innerText ="yok daha neler".toUpperCase()
//     document.querySelector("body").style.color = "yellowgreen"
//     document.querySelector("body").style.backgroundColor = "green"
//     }
// // }else if(){

// // }
// setTimeout(clearDefault,2000)
// }
// }

// function clearDefault() {
//   document.querySelector("body").style.color = "";
//   document.querySelector("body").style.backgroundColor = "";
//   document.querySelector("form#harcama-formu h4").innerText = "Harcama Formu";
// }

// if(e.target.tagName === "INPUT"){
//     console.log(e.target.value);
// }











// const harcamaFormu = document.querySelector("#harcama-formu")
// console.log(harcamaFormu);
// // console.log(harcamaFormu.closest("form").querySelector("input"));
// // harcamaFormu.addEventListener("click",harcamaForm)
// const kaydet = document.getElementById("kaydet")

// kaydet.addEventListener("click",harcamaFormKaydet)
// function harcamaFormKaydet(e){
// const tarih = document.getElementById("tarih")
// const miktar = document.getElementById("miktar")
// const harcamaAlani =document.getElementById("harcama-alani")
