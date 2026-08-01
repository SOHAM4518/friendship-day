/* ==========================
   FRIENDSHIP DAY PREMIUM
========================== */

const loader = document.getElementById("loader");
const hero = document.getElementById("hero");
const gallery = document.getElementById("gallery");
const quiz = document.getElementById("quiz");
const letter = document.getElementById("letter");
const end = document.getElementById("end");

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

const heroImage = document.getElementById("heroImage");
const slideImage = document.getElementById("slideImage");
const caption = document.getElementById("caption");

const question = document.getElementById("question");
const answers = document.getElementById("answers");

const typing = document.getElementById("typing");

/* ==========================
   LOADER
========================== */

window.onload = () => {

setTimeout(() => {

loader.style.opacity = "0";

setTimeout(() => {

loader.style.display = "none";

},1000);

},3200);

}

/* ==========================
   MUSIC
========================== */

let playing = false;

musicBtn.onclick = () => {

if(!playing){

music.play();

musicBtn.innerHTML="⏸️";

playing=true;

}else{

music.pause();

musicBtn.innerHTML="🎵";

playing=false;

}

}

/* ==========================
   GIFT BUTTON
========================== */

document.getElementById("openGift").onclick=()=>{

hero.classList.add("hidden");

gallery.classList.remove("hidden");

startSlider();

}

/* ==========================
   SLIDESHOW
========================== */

const photos=[

"images/photo1.jpg",

"images/photo2.jpg",

"images/photo3.jpg",

"images/photo4.jpg",

"images/photo5.jpg",

"images/photo6.jpg"

];

const captions=[

"❤️ Every friendship begins with a beautiful moment.",

"😊 Every smile with you becomes a memory.",

"📸 Thank you for every selfie and every laugh.",

"🌸 Life is better with a best friend like you.",

"✨ Every picture tells our story.",

"💖 Forever grateful for this friendship."

];const titles=[

"🌸 Where It All Began",

"😊 Our Best Smile",

"😂 Endless Laughter",

"❤️ Beautiful Moments",

"✨ Unforgettable Memories",

"💖 Forever Best Friends"

];

let current=0;

function startSlider(){

slideImage.src=photos[0];

caption.innerHTML=captions[0];

setInterval(()=>{

current++;

if(current>=photos.length){

clearInterval();

gallery.classList.add("hidden");

quiz.classList.remove("hidden");

loadQuestion();

return;

}

slideImage.style.opacity=0;

setTimeout(()=>{

slideImage.style.transform="scale(.9)";
slideImage.style.opacity=0;

setTimeout(()=>{

slideImage.src=photos[current];

document.getElementById("memoryTitle").innerHTML=titles[current];

caption.innerHTML=captions[current];

document.getElementById("memoryCounter").innerHTML=
`📸 Memory ${current+1} of ${photos.length} ❤️`;

slideImage.style.opacity=1;
slideImage.style.transform="scale(1)";

updateDots();

},350);

document.getElementById("memoryCounter").innerHTML =
`📸 Memory ${current + 1} of ${photos.length} ❤️`;

slideImage.style.opacity = 1;

},400);

},3500);

}

/* ==========================
   FRIENDSHIP QUIZ
========================== */

const quizData = [
{
question:"💖 What am I to you?",
answers:[
"❤️ My Best Friend",
"🌎 My Favourite Person",
"🤗 Family",
"💝 All of the Above"
]
},
{
question:"😂 Which memory is your favourite?",
answers:[
"📸 Our Selfies",
"🤣 Our Laughs",
"🍕 Hanging Out",
"❤️ Every Moment"
]
},
{
question:"🌸 How long should our friendship last?",
answers:[
"♾ Forever",
"❤️ Lifetime",
"🌎 Always",
"💖 Till We Grow Old"
]
}
];

let q = 0;

function loadQuestion(){

question.innerHTML = quizData[q].question;

answers.innerHTML="";

quizData[q].answers.forEach(ans=>{

let div=document.createElement("div");

div.className="answer";

div.innerHTML=ans;

div.onclick=()=>{

q++;

if(q<quizData.length){

loadQuestion();

}else{

quiz.classList.add("hidden");

document.getElementById("reasons").classList.remove("hidden");

}

}

answers.appendChild(div);

});

}

/* ==========================
   TYPEWRITER LETTER
========================== */

const message = `Dear Chitra ❤️,

Happy Friendship Day!

Thank you for every smile 😊

Every selfie 📸

Every laugh 😂

Every memory ❤️

Life becomes beautiful when people like you are part of it.

You're not just my best friend...

You're one of the best parts of my life.

No matter where life takes us,

I hope we always stay connected.

Thank you for being YOU.

❤️ Forever Your Best Friend,

Soham ❤️`;

let index = 0;

function typeLetter(){

typing.innerHTML="";

index=0;

let timer=setInterval(()=>{

typing.innerHTML+=message.charAt(index);

index++;

if(index>=message.length){

clearInterval(timer);

}

},40);

}

/* ==========================
   CELEBRATION
========================== */

document.getElementById("celebrateBtn").onclick=()=>{

letter.classList.add("hidden");

end.classList.remove("hidden");

let duration=3000;

let animationEnd=Date.now()+duration;

(function frame(){

confetti({

particleCount:6,

angle:60,

spread:55,

origin:{x:0}

});

confetti({

particleCount:6,

angle:120,

spread:55,

origin:{x:1}

});

if(Date.now()<animationEnd){

requestAnimationFrame(frame);

}

})();

}

/* ==========================
   FLOATING HEARTS
========================== */

const heartContainer=document.createElement("div");

heartContainer.className="hearts";

document.body.appendChild(heartContainer);

setInterval(()=>{

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="💖";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.animationDuration=(4+Math.random()*5)+"s";

heartContainer.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

},350);

document.addEventListener("mousemove",e=>{

const star=document.createElement("div");

star.innerHTML="✨";

star.style.position="fixed";

star.style.left=e.clientX+"px";

star.style.top=e.clientY+"px";

star.style.pointerEvents="none";

star.style.fontSize="18px";

star.style.zIndex="999";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},700);

});

setInterval(()=>{

const now=new Date();

document.getElementById("clock").innerHTML=

now.toLocaleTimeString();

},1000);

document.getElementById("continueLetter").onclick = () => {

document.getElementById("reasons").classList.add("hidden");

letter.classList.remove("hidden");

typeLetter();

};

/* ==========================
   ENVELOPE OPEN
========================== */

const envelope = document.getElementById("envelope");

if (envelope) {

    envelope.addEventListener("click", () => {

        document.querySelector(".flap").style.transform = "rotateX(180deg)";

        setTimeout(() => {

            document.querySelector(".envelope-container").style.display = "none";

            const letterContent = document.getElementById("letterContent");

            letterContent.classList.remove("hidden");

            letterContent.classList.add("show");

            typeLetter();

        }, 1000);

    });

}

/* ==========================
   DOT INDICATORS
========================== */

const dots=document.getElementById("dots");

photos.forEach((p,i)=>{

const d=document.createElement("span");

d.className="dot";

if(i===0)d.classList.add("active");

dots.appendChild(d);

});

function updateDots(){

document.querySelectorAll(".dot").forEach((dot,index)=>{

dot.classList.toggle("active",index===current);

});

}

document.getElementById("shareBtn").addEventListener("click", () => {

    const url = "https://soham4518.github.io/friendship-day/";

    const text =
`❤️ Happy Friendship Day Chitra ❤️

I made something special just for you.

${url}`;

    window.open(
        "https://wa.me/?text=" + encodeURIComponent(text),
        "_blank"
    );

});
