const searchInput = document.querySelector("#search");
const searchDiv = document.querySelector("#searchDiv");
const countries = document.querySelector(".countries");


// https://restcountries.com/v3.1/all
const country =async () => {
    

    try {
        const req = await fetch(" https://restcountries.com/v3.1/all")
        if(!req.ok){
            throw new Error("Hatasız Kul Olmaz")
        }
        const data = await req.json()
        console.log(data);
       show(data)
    } catch (err) {
        document.getElementById("err").innerText= err
    }
}

const show = (data) =>{
   data.forEach(element => {
    console.log(Object.entries(element))
   }); 
}

country()