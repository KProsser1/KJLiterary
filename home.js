/*var slides = document.getElementsByClassName('.slideContainer .slideLayout');
var dots = document.querySelectorAll('.dot');
var currentSlide = 0;
const interval = 3000;

function changeSlide(n) {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(' active', '');
    }

    currentSlide = n;

    slides[currentSlide].style.display = "block";
    dots[currentSlide].className += ' active';
}*/























let slides = document.querySelectorAll(".slideLayout"),
arrowLeft = document.querySelector(".prev"),
arrowRight = document.querySelector(".next"),
slideIndex = 0;

function reset() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
}

function startSlide() {
    reset();
    slides[0].style.display = "block";
}

function slideLeft() {
    reset();
    slides[slideIndex - 1].style.display = "block";
    slideIndex --;
}

function slideRight() {
    reset();
    slides[slideIndex + 1].style.display = "block";
    slideIndex ++;
}

arrowLeft.addEventListener("click", function () {
    if (slideIndex === 0) {
        slideIndex = slides.length;
    }
    slideLeft();
});

arrowRight.addEventListener("click", function () {
    if (slideIndex === 2) {
        slideIndex = -1;
    }

    slideRight();
})

startSlide();

//automatic scroll

showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName(".slideLayout");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (slideIndex === slides.length) {
        slideIndex = 0
    }
    slides[slideIndex].style.display = "block";
    setTimeout(showSlides, 4000);
    slideIndex++;
    console.log(slideIndex);
}

/*
//clickable scroll
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function slideIndexSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slideLayout");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

/*
var music = 

function playSong(){
    music.play();
}

function pauseSong(){
    music.pause();
}*/