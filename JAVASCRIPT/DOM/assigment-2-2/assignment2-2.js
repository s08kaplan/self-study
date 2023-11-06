const body = document.body;

//? ======================COLORS========================
const colors = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F"
];



//? ==========================IMAGES=====================

const imgs = [
  "url(./img/background-3390802_1920.jpg)",
  "url(./img/berries-2277_640.jpg)",
  "url(./img/drop-5971598_1920.jpg)",
  "url(./img/flower-729512_1280.jpg)",
  "url(./img/mountains-1624284_1920.jpg)",
  "url(./img/rose-729509_1280.jpg)",
  "url(./img/sparrows-2759978_1920.jpg)",
  "url(./img/sunrise-1959227_640.jpg)",
  "url(./img/sunset-1373171_1280.jpg)",
  "url(./img/sunset-3755807_1920.jpg)",
  "url(./img/swan-16736_640.jpg)",
  "url(./img/water-lily-3784022_1280.jpg)"
];

//? =========================SONGS=========================

const songs = [
  "./sounds/'İkinci Bahar - Enstrümantal Müzik'.mp3",
  "./sounds/Anıl Güler video kapanış müziği __om han muoi hai.mp3",
  "./sounds/Bağdat Yolu - Sevim Tuna.mp3",
  "./sounds/barıs manco - kara sevda.mp3",
  "./sounds/Bir Ateşe Attın Beni.mp3",
  "./sounds/Bu Böyledir (2021 Tek Edit).mp3",
  "./sounds/Bu şarkı, gönlü kırık âşıklara gelsin! - Gönül Dağı 5. Bölüm.mp3",
  "./sounds/Fatih Kısaparmak _ Haram Saltanatı (Official Video) 🎧.mp3",
  "./sounds/Gel Artık #YeşilDeniz Dizi Müzikleri.mp3",
  "./sounds/Güncel Gürsel Artıktay - uzak yol.mp3",
  "./sounds/Handan Kara - KADER BAĞLADI BİZİ.mp3",
  "./sounds/Handan Kara - Sonbahar Rüzgarları.mp3",
  "./sounds/Hoş Geldin (Burak Serdar Şanal) #YeşilDeniz Dizi Müzikleri.mp3",
  "./sounds/Keloğlan (Rüştü Asyalı) Uyan.mp3",
  "./sounds/Leyla ile Mecnun.mp3",
  "./sounds/Metin Akpınar  -Baharı Bekleyen Kumrular Gibi -Aşık oldum  -Nostalji.mp3",
  "./sounds/Neşet Ertaş - Dane Dane Benleri Var [ Gönül Dağı © 1999 Kalan Müzik ].mp3",
  "./sounds/Neşet Ertaş - Kaşların Karasına.mp3",
  "./sounds/Nesrin Sipahi - Ankara Rüzgarı.mp3",
  "./sounds/Sagopa Kajmer - Avutsun Bahaneler (Official Video).mp3",
  "./sounds/Sagopa Kajmer - Istakoz 2012.mp3",
  "./sounds/Samet Burak Ay - Keyfimiz Elllere Dert Oldu.mp3"
];

const audio = document.querySelector("audio")


// ?=====================MESSAGES========================

const messages = [
  "random color is possible why not be possible random sound,random message and others",
  "just enjoy the moment",
  "hola mis amigos",
  "ah bu şarkıların gözü kör olsun",
  "hep ingilizce olmaz",
  "Anthony Hocam benden size selamlar saygılar",
  "uzun bir aranın ardından umarım olmuştur",
  "eksiklerimi söyleyin demek isterdim ama çok olduğu için boşverin hadi şarkıları dinleyelim"
];



//? ========================MAIN-MESSAGE========================
const mainMessage = document.getElementById("main-message");
const mainText = document.createTextNode(
  "hi there let's share some fun(or sadness) together "
);
mainMessage.appendChild(mainText);
const main = document.querySelector(".img-container");
main.appendChild(mainMessage);

//? =====================RANDOM MESSAGE========================

const randomMessage = document.getElementById("random-message");


//? =========================BUTTON===========================

const button = document.querySelector(".btn");
const pauseButton = document.querySelector(".pause")
//! =================RANDOM MESSAGE EVENT===================
// button.addEventListener("click", () => {
//   randomMessage.style.top =
//     Math.floor(Math.random() * (body.offsetHeight - 250)) + "px";
//   randomMessage.style.left =
//     Math.floor(Math.random() * (body.offsetWidth - 700)) + "px";
//   randomMessage.style.fontSize = Math.round(Math.random()*50)+"px"
    
// })



//! =========================RANDOM COLOR EVENT===============

const randomColor =()=>{
    let randomColour = "#"
    for (let i = 0; i < 6; i++) {
        
        randomColour += colors[Math.round(Math.random() * colors.length)]
    }
    return button.style.color = randomColour
}

// !===================Random Evenets==================

button.addEventListener("click",randomColor)
button.addEventListener("click",()=>{
button.style.backgroundColor = randomColor();
mainMessage.style.color = randomColor();
randomMessage.style.color = randomColor()
body.style.backgroundImage = imgs[Math.round(Math.random()*imgs.length)]
randomMessage.innerText = messages[Math.round(Math.random()*messages.length)]
})

const remember = document.querySelector(".remember")

button.addEventListener("click",()=>{
    remember.style.display="block"
})


button.addEventListener("click",()=>{
    audio.src =  songs[Math.floor(Math.random() * songs.length)]
    audio.play();
})

let isPause=false
pauseButton.addEventListener("click",()=>{
    if(!isPause){
        audio.pause()
    }else {
        audio.play()
    } 
    isPause = !isPause
})
