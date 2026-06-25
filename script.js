/*=========================================
        URBAN CUSTOME
            script.js
            PART - 1
=========================================*/


/*=========================================
            LOADER
=========================================*/

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

setTimeout(()=>{

loader.style.opacity="0";

loader.style.visibility="hidden";

loader.style.transition=".8s";

},1800);

});





/*=========================================
            STICKY HEADER
=========================================*/

const header=document.getElementById("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.classList.add("sticky");

}

else{

header.classList.remove("sticky");

}

});





/*=========================================
            MOBILE MENU
=========================================*/

const menuBtn=document.getElementById("menuBtn");

const navbar=document.getElementById("navbar");

menuBtn.onclick=()=>{

navbar.classList.toggle("showMenu");

menuBtn.classList.toggle("active");

};





/*=========================================
        CLOSE MENU AFTER CLICK
=========================================*/

document.querySelectorAll("#navbar a")

.forEach(link=>{

link.onclick=()=>{

navbar.classList.remove("showMenu");

menuBtn.classList.remove("active");

};

});





/*=========================================
            SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]')

.forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))

.scrollIntoView({

behavior:"smooth"

});

});

});





/*=========================================
        ACTIVE NAVIGATION
=========================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("#navbar a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

const sectionHeight=section.clientHeight;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});





/*=========================================
            HERO PARALLAX
=========================================*/

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

let value=window.scrollY;

hero.style.backgroundPositionY=value*0.35+"px";

});





/*=========================================
        SCROLL REVEAL
=========================================*/

const revealElements=document.querySelectorAll(

".about,.services,.why,.process,.featured-builds,.gallery,.reviews,.faq,.contact"

);

function reveal(){

const trigger=window.innerHeight-120;

revealElements.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<trigger){

item.classList.add("show");

}

});

}

window.addEventListener("scroll",reveal);

reveal();





/*=========================================
        HERO TEXT ANIMATION
=========================================*/

const heroTitle=document.querySelector(".hero-content h1");

setInterval(()=>{

heroTitle.animate([

{

opacity:1,

letterSpacing:"10px"

},

{

opacity:.85,

letterSpacing:"14px"

},

{

opacity:1,

letterSpacing:"10px"

}

],

{

duration:2200

});

},2500);





/*=========================================
        BUTTON HOVER EFFECT
=========================================*/

document.querySelectorAll(".btn,.btn-outline")

.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-6px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0px)";

});

});





/*=========================================
        TRUST CARD EFFECT
=========================================*/

document.querySelectorAll(".trust-card")

.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});





/*=========================================
            CONSOLE
=========================================*/

console.log("URBAN CUSTOME WEBSITE LOADED");/*=========================================
        URBAN CUSTOME
            script.js
            PART - 2
=========================================*/


/*=========================================
        COUNTER ANIMATION
=========================================*/

const counters=document.querySelectorAll(".count");

const counterObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let current=0;

const update=()=>{

current+=target/100;

if(current<target){

counter.innerHTML=Math.ceil(current);

requestAnimationFrame(update);

}else{

counter.innerHTML=target+"+";

}

};

update();

counterObserver.unobserve(counter);

}

});

},{threshold:.5});

counters.forEach(counter=>{

counterObserver.observe(counter);

});





/*=========================================
        FAQ ACCORDION
=========================================*/

document.querySelectorAll(".faq-item")

.forEach(item=>{

const question=item.querySelector(".faq-question");

const answer=item.querySelector(".faq-answer");

const icon=question.querySelector("span");

question.addEventListener("click",()=>{

document.querySelectorAll(".faq-answer")

.forEach(a=>{

if(a!==answer){

a.style.display="none";

}

});

document.querySelectorAll(".faq-question span")

.forEach(i=>{

if(i!==icon){

i.innerHTML="+";

}

});

if(answer.style.display==="block"){

answer.style.display="none";

icon.innerHTML="+";

}else{

answer.style.display="block";

icon.innerHTML="−";

}

});

});





/*=========================================
        GALLERY LIGHTBOX
=========================================*/

document.querySelectorAll(".gallery-container img")

.forEach(image=>{

image.onclick=()=>{

const lightbox=document.createElement("div");

lightbox.className="lightbox";

lightbox.innerHTML=`

<img src="${image.src}" alt="">

`;

document.body.appendChild(lightbox);

lightbox.onclick=()=>{

lightbox.remove();

};

};

});





/*=========================================
        SCROLL TO TOP
=========================================*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};





/*=========================================
        CONTACT FORM
=========================================*/

const form=document.getElementById("contactForm");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your enquiry has been sent successfully.");

form.reset();

});

}





/*=========================================
        WHATSAPP ANIMATION
=========================================*/

const whatsapp=document.querySelector(".whatsapp");

if(whatsapp){

setInterval(()=>{

whatsapp.animate([

{transform:"translateY(0px)"},

{transform:"translateY(-8px)"},

{transform:"translateY(0px)"}

],{

duration:1400

});

},1800);

}





/*=========================================
        CALL BUTTON
=========================================*/

const callBtn=document.querySelector(".call-btn");

if(callBtn){

setInterval(()=>{

callBtn.animate([

{

boxShadow:"0 0 0 rgba(199,169,107,.5)"

},

{

boxShadow:"0 0 30px rgba(199,169,107,.9)"

},

{

boxShadow:"0 0 0 rgba(199,169,107,.5)"

}

],{

duration:1800

});

},2000);

}





/*=========================================
        IMAGE FADE EFFECT
=========================================*/

const images=document.querySelectorAll("img");

const imageObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="scale(1)";

}

});

});

images.forEach(img=>{

img.style.opacity="0";

img.style.transform="scale(.95)";

img.style.transition=".8s";

imageObserver.observe(img);

});





/*=========================================
        LIGHTBOX CSS
=========================================*/

const style=document.createElement("style");

style.innerHTML=`

.lightbox{

position:fixed;

left:0;

top:0;

width:100%;

height:100%;

background:rgba(0,0,0,.95);

display:flex;

justify-content:center;

align-items:center;

z-index:999999;

cursor:pointer;

}

.lightbox img{

max-width:90%;

max-height:90%;

border-radius:20px;

box-shadow:0 20px 60px rgba(199,169,107,.45);

animation:zoom .35s ease;

}

@keyframes zoom{

from{

opacity:0;

transform:scale(.8);

}

to{

opacity:1;

transform:scale(1);

}

}

`;

document.head.appendChild(style);





/*=========================================
        GOLD BUTTON GLOW
=========================================*/

setInterval(()=>{

document.querySelectorAll(".btn,.btn-outline")

.forEach(btn=>{

btn.animate([

{

boxShadow:"0 0 10px rgba(199,169,107,.3)"

},

{

boxShadow:"0 0 28px rgba(199,169,107,.8)"

},

{

boxShadow:"0 0 10px rgba(199,169,107,.3)"

}

],{

duration:2200

});

});

},2400);





/*=========================================
            FINISHED
=========================================*/

console.log("✔ URBAN CUSTOME WEBSITE READY");
