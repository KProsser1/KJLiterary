/*var imgs = document.querySelectorAll('.slideLayout .slide');
var dots = document.querySelectorAll('.dot');
var currentImg = 0;
const interval = 3000;

function changeSlide(n) {
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.opacity = 0;
        dots[i].className = dots[i].className.replace(' active', '');
        console.log(dot);
    }

    currentImg = n;

    imgs[currentImg].style.opacity = 1;
    dots[currentImg].className += ' active';
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