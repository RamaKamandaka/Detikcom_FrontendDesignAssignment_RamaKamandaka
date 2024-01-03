// toggle class active
const navbarNav = document.querySelector ('.navbarNav')
// Menu di klik
document.querySelector ('#menu').onclick = () => {
navbarNav.classList.toggle('active');
};


// Swiper Image
let x = 0;

const wideImage = document.querySelector(".wide-image img");
const images = Array.from(document.querySelectorAll(".all-images img"));

wideImage.src = images[x].src;

function blackImg(x) {
    for (let i = 0; i < images.length; i++) {
    i === x
        ? images[i].classList.remove("black-white-img")
        : images[i].classList.add("black-white-img");
    }
}

blackImg(x);

function activeImage(index) {
    x = index;
    wideImage.src = images[x].src;
    blackImg(x);
}

function previousBtn() {
    x--;

    x < 0 && (x = images.length - 1);

    wideImage.src = images[x].src;
    blackImg(x);
}

function nextBtn() {
    x++;

    x >= images.length && (x = 0);
    wideImage.src = images[x].src;
    blackImg(x);
}
