// ================================
// Portfolio Website - Day 7
// JavaScript
// ================================

// Welcome Message
window.onload = function () {
    alert("Welcome to My Portfolio Website!");
};

// ================================
// Hire Me Button
// ================================

function hireMe() {
    alert("Thank you for visiting my portfolio!\nLet's connect.");
}

// ================================
// Download Resume
// ================================

function downloadResume() {
    alert("Resume download will be available soon.");
}

// ================================
// Contact Form Validation
// ================================

function validateForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    if (email === "") {
        alert("Please enter your email.");
        return false;
    }

    if (!email.includes("@")) {
        alert("Enter a valid email address.");
        return false;
    }

    if (message === "") {
        alert("Please enter your message.");
        return false;
    }

    alert("Message Sent Successfully!");

    return true;
}

// ================================
// Current Year in Footer
// ================================

let year = document.getElementById("year");

if (year) {
    year.innerHTML = new Date().getFullYear();
}

// ================================
// Scroll To Top
// ================================

function scrollToTop() {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}

// ================================
// Show Button While Scrolling
// ================================

let topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if(topBtn){

        if(document.documentElement.scrollTop > 200){

            topBtn.style.display = "block";

        }
        else{

            topBtn.style.display = "none";

        }

    }

};

// ================================
// Smooth Navigation
// ================================

document.querySelectorAll('nav a').forEach(link=>{

    link.addEventListener('click',function(e){

        e.preventDefault();

        let target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ================================
// Typing Effect
// ================================

const text="Java Backend Developer | Web Developer";

let i=0;

function typingEffect(){

    let typing=document.getElementById("typing");

    if(typing){

        if(i<text.length){

            typing.innerHTML+=text.charAt(i);

            i++;

            setTimeout(typingEffect,100);

        }

    }

}

typingEffect();

// ================================
// Skills Hover Animation
// ================================

let skills=document.querySelectorAll("#skills li");

skills.forEach(skill=>{

    skill.addEventListener("mouseover",function(){

        this.style.transform="scale(1.08)";

    });

    skill.addEventListener("mouseout",function(){

        this.style.transform="scale(1)";

    });

});

// ================================
// Thank You Message
// ================================

console.log("Portfolio Loaded Successfully");