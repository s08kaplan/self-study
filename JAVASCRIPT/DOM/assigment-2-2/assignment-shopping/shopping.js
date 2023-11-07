
































































// plus[0].addEventListener("click",()=>{
//     quantity.innerText = Number(quantity.innerText)+1
// })

// minus[0].addEventListener("click",()=>{
//     let result =""
//     if(quantity.innerText >1){
//         quantity.innerText = Number(quantity.innerText)-1
//         result = quantity.innerText
//     }else{
//         quantity.innerText =1
//         result = quantity.innerText
//     }
//   return result
// })
// plus[1].addEventListener("click",()=>{
//     quantity[1].innerText = Number(quantity[1].innerText)+1
// })

// minus[1].addEventListener("click",()=>{
//     let result =""
//     if(quantity[1].innerText >1){
//         quantity[1].innerText = Number(quantity[1].innerText)-1
//         result = quantity[1].innerText
//     }else{
//         quantity[1].innerText =1
//         result = quantity[1].innerText
//     }
//   return result
// })

// // Get all plus and minus buttons
// const plusMinusButtons = document.querySelectorAll(".fa-plus, .fa-minus");

// // Add a click event listener to the common parent element (section with class "products")
// document.querySelector(".products").addEventListener("click", (event) => {
//   const target = event.target;

//   // Check if the clicked element is a plus or minus button
//   if (
//     target.classList.contains("fa-plus") ||
//     target.classList.contains("fa-minus")
//   ) {
//     // Find the parent product element
//     const product = target.closest(".product");

//     if (product) {
//       // Find the quantity element within the product
//       const quantityElement = product.querySelector(".quantity");

//       if (quantityElement) {
//         // Get the current quantity
//         let currentQuantity = parseInt(quantityElement.innerText);

//         if (target.classList.contains("fa-plus")) {
//           // Increment the quantity when the plus button is clicked
//           currentQuantity += 1;
//         } else if (target.classList.contains("fa-minus")) {
//           // Decrement the quantity, ensuring it's at least 1
//           currentQuantity = Math.max(1, currentQuantity - 1);
//         }

//         // Update the quantity element with the new value
//         quantityElement.innerText = currentQuantity;
//       }
//     }
//   }
// });

// const productPrice = document.querySelectorAll("#product-price");

// const products = document.querySelector(".products");
// products.addEventListener("click", (e) => {
//   if (
//     e.target.classList.contains(
//       "fa-plus" || e.target.classList.contains("fa-minus")
//     )
//   ) {
//     const product = e.target.closest(".product")
//     if (product) {
//       productPrice = Number(productPrice.innerText);
//     }
//     if (e.target.classList.contains("fa-plus")) {
//       productPrice += productPrice * currentQuantity;
//     } else if (e.target.classList.contains("fa-minus")) {
//       productPrice -= productPrice * currentQuantity;
//     }
//   }
// });
