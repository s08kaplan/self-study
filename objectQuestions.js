// Sample products data
// products

var allProducts = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    ],
  },
  {
    id: 2,
    title: "iPhone X",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/2/1.jpg",
      "https://i.dummyjson.com/data/products/2/2.jpg",
      "https://i.dummyjson.com/data/products/2/3.jpg",
      "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    ],
  },
  {
    id: 3,
    title: "Samsung Universe 9",
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    discountPercentage: 15.46,
    rating: 4.09,
    stock: 36,
    brand: "Samsung",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
    images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
  },
  {
    id: 4,
    title: "OPPOF19",
    description: "OPPO F19 is officially announced on April 2021.",
    price: 280,
    discountPercentage: 17.91,
    rating: 4.3,
    stock: 123,
    brand: "OPPO",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/4/1.jpg",
      "https://i.dummyjson.com/data/products/4/2.jpg",
      "https://i.dummyjson.com/data/products/4/3.jpg",
      "https://i.dummyjson.com/data/products/4/4.jpg",
      "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    ],
  },
];
console.log(allProducts);

// <--------------------  Delete product  ------------------------->
// 1 - Ürün listesinden id'si verilen ürünü silen ve geri kalan ürün listesini dönen fonksiyonu yazınız.(deleteProduct(id))








// <--------------------  Delete product  ------------------------->

// <--------------------  Create  product  ------------------------->
// 2 - Ürün listesine yeni bir ürün ekleyen ve yeni listeyi dönen fonksiyonu yazınız. (createNewProduct({title, description, image}))







// <--------------------  Create  product  ------------------------->

// <--------------------  Edit  product  ------------------------->
// 3 - Ürün listesindeki id si belirtlen bir ürünün başlığını ve açıklamasını güncelleyen ve yeni listeyi dönen fonksiyonu yazınız. (editProduct({id, title, description}))

// <--------------------  Edit  product  ------------------------->

// <--------------------  filter  product  ------------------------->
// 4 - Ürün listesindeki ürünleri gönderilen arama kelimesine göre, ürünün adı, açıklaması ve markasında arayıp eşleşen tüm ürünlerin listesini dönen fonksiyonu yazınız. (filterProducts(query)) büyük-küçük harf duyarlılığı olmamalıdır.

// <--------------------  filter  product  ------------------------->

//! ============================================================================

//! Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
//! Example string : 'Web Development Tutorial'
//! Expected Output : 'Development'

const sentence = "Web Development Tutorial";
// const findLongestWord =(sentence)=>{
// const firstStep = sentence
// .split(" ")
// .map((word) => word.length)
// .sort((a,b)=> b-a)[0]
// return firstStep
// }

// console.log(findLongestWord(sentence));


// function find_longest_word(str) {
//   // Remove non-letter characters and convert to lowercase
//   const lettersOnly = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
//   // Split the string into an array of words
//   const words = str.split(' ');  
//   // Initialize a variable to store the longest word
//   let longest_Word = '';
//     // Loop through each word in the array
//   for (let i = 0; i < words.length; i++) {
//     // The longest word should be updated if the current word is longer than the longest word.
//     if (words[i].length > longest_Word.length) {
//       longest_Word = words[i];
//     }
//   }  
//   // Return the longest word
//   return longest_Word;
// }
// const str = 'the quick brown fox';
// console.log("The original string: "+str);
// const result = find_longest_word(str);
// console.log("The longest word of the said string: "+result)
// console.log(result);

//? ================================================================

//! Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
//! Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
//! Example string : 'The quick brown fox'
//! Expected Output : 5


const sentence2 = 'The quick brown fox'


const vowelCounter =(sentence)=>{
const result= sentence.match(/[aeiou]/gi)
return result.length
}
console.log(vowelCounter(sentence2));


// ? (another solution from the owner of the question)

// function vowel_count(str1)
// {
//   var vowel_list = 'aeiouAEIOU';
//   var vcount = 0;
  
//   for(var x = 0; x < str1.length ; x++)
//   {
//     if (vowel_list.indexOf(str1[x]) !== -1)
//     {
//       vcount += 1;
//     }
  
//   }
//   return vcount;
// }
// console.log(vowel_count("The quick brown fox"));









// !-------------------------HOCADAN-----------------------------------

// Sample products data
// products

// var allProducts = [
//   {
//     id: 1,
//     title: 'iPhone 9',
//     description: 'An apple mobile which is nothing like apple',
//     price: 549,
//     discountPercentage: 12.96,
//     rating: 4.69,
//     stock: 94,
//     brand: 'Apple',
//     category: 'smartphones',
//     thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
//     images: [
//       'https://i.dummyjson.com/data/products/1/1.jpg',
//       'https://i.dummyjson.com/data/products/1/2.jpg',
//       'https://i.dummyjson.com/data/products/1/3.jpg',
//       'https://i.dummyjson.com/data/products/1/4.jpg',
//       'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
//     ],
//   },
//   {
//     id: 2,
//     title: 'iPhone X',
//     description:
//       'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
//     price: 899,
//     discountPercentage: 17.94,
//     rating: 4.44,
//     stock: 34,
//     brand: 'Apple',
//     category: 'smartphones',
//     thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
//     images: [
//       'https://i.dummyjson.com/data/products/2/1.jpg',
//       'https://i.dummyjson.com/data/products/2/2.jpg',
//       'https://i.dummyjson.com/data/products/2/3.jpg',
//       'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
//     ],
//   },
//   {
//     id: 3,
//     title: 'Samsung Universe 9',
//     description:
//       "Samsung's new variant which goes beyond Galaxy to the Universe",
//     price: 1249,
//     discountPercentage: 15.46,
//     rating: 4.09,
//     stock: 36,
//     brand: 'Samsung',
//     category: 'smartphones',
//     thumbnail: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
//     images: ['https://i.dummyjson.com/data/products/3/1.jpg'],
//   },
//   {
//     id: 4,
//     title: 'OPPOF19',
//     description: 'OPPO F19 is officially announced on April 2021.',
//     price: 280,
//     discountPercentage: 17.91,
//     rating: 4.3,
//     stock: 123,
//     brand: 'OPPO',
//     category: 'smartphones',
//     thumbnail: 'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
//     images: [
//       'https://i.dummyjson.com/data/products/4/1.jpg',
//       'https://i.dummyjson.com/data/products/4/2.jpg',
//       'https://i.dummyjson.com/data/products/4/3.jpg',
//       'https://i.dummyjson.com/data/products/4/4.jpg',
//       'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
//     ],
//   },
// ];


// console.log(allProducts);

// // <--------------------  Delete product  ------------------------->
// // 1 - Ürün listesinden id'si verilen ürünü silen ve geri kalan ürün listesini dönen fonksiyonu yazınız.(deleteProduct(id))




function deleteProduct(id){



//! const filteredList =  allProducts.filter((product)=>{
 
//!   return product.id !== id
//! })

//! allProducts = filteredList

//! return allProducts

//! }

//! console.log(deleteProduct(2));



// // <--------------------  Delete product  ------------------------->


// // <--------------------  Create  product  ------------------------->
// // 2 - Ürün listesine yeni bir ürün ekleyen ve yeni listeyi dönen fonksiyonu yazınız. (createNewProduct({title, description, image}))


//! function createNewProduct(parametre) {
//!   const {newTitle,description,image} =parametre
  
//!   console.log(newTitle);
//!   console.log(description);
//!   console.log(image);

//!  const newObject = {
//!   id:allProducts.length + 1,
//!   title:newTitle,
//!   description:description,
//!   images:[image],

//!   }
//! allProducts.push(newObject);
//! }

//! let newProduct = {
//!   newTitle:'iphone 15',
//!   description:'lorem ipsum',
//!   image:'imageurl'
//! };

//! createNewProduct(newProduct);

//! console.log(allProducts);






// // <--------------------  Create  product  ------------------------->

// // <--------------------  Edit  product  ------------------------->
// // 3 - Ürün listesindeki id si belirtlen bir ürünün başlığını ve açıklamasını güncelleyen ve yeni listeyi dönen fonksiyonu yazınız. (editProduct({id, title, description}))



// // <--------------------  Edit  product  ------------------------->

// // <--------------------  filter  product  ------------------------->
// // 4 - Ürün listesindeki ürünleri gönderilen arama kelimesine göre, ürünün adı, açıklaması ve markasında arayıp eşleşen tüm ürünlerin listesini dönen fonksiyonu yazınız. (filterProducts(query)) büyük-küçük harf duyarlılığı olmamalıdır.




// // <--------------------  filter  product  ------------------------->



// <--------------------  filter  product  ------------------------->
// 4 - Ürün listesindeki ürünleri, ürünün adı, açıklaması ve markasında arayıp eşleşen tüm ürünlerin listesini dönen fonksiyonu yazınız. (filterProducts(query)) büyük-küçük harf duyarlılığı olmamalıdır.

// function filterProducts(query) {
  
//   console.log(query);
//   const filteredProducts = allProducts.filter(product => product.title.toLowerCase().includes(query.toLowerCase()) || product.description.toLowerCase().includes(query.toLowerCase()) )
//   console.log(filteredProducts);
  
  
//   return filteredProducts;
//   }