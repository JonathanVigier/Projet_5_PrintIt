const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const imageBanner = document.getElementById("banner-img");
const tagLineBanner = document.getElementById("tagline");
const dotsContainer = document.querySelector(".dots");

let n = 0;
let i = 0;

function generateDots() {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dotsContainer.appendChild(dot);
  }
  dotsContainer.children[0].classList.add("dot_selected");
}

function switchToLeft() {
  if (n === 0) {
    n = 4;
    i = 4;
  }

  n -= 1;
  i -= 1;
  imageBanner.src = `./assets/images/slideshow/${slides[n].image}`;
  tagLineBanner.innerHTML = slides[n].tagLine;
}

function switchToRight() {
  if (n === 3) {
    n = -1;
    i = -1;
  }

  n += 1;
  i += 1;
  imageBanner.src = `./assets/images/slideshow/${slides[n].image}`;
  tagLineBanner.innerHTML = slides[n].tagLine;
}

leftArrow.addEventListener("click", switchToLeft);

rightArrow.addEventListener("click", switchToRight);
