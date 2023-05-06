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

let direction;

function generateDots() {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dotsContainer.appendChild(dot);
  }
  dotsContainer.children[0].classList.add("dot_selected");
}

function updateSelectedDot() {
  switch (direction) {
    case "left":
      if (0 < i < 4) {
        dotsContainer.children[i].classList.add("dot_selected");
        dotsContainer.children[i + 1].classList.remove("dot_selected");
      }
      break;

    case "right":
      if (0 < i < 4) {
        dotsContainer.children[i].classList.add("dot_selected");
        dotsContainer.children[i - 1].classList.remove("dot_selected");
      }
      break;

    default:
      null;
      break;
  }
}

function switchToLeft() {
  if (n === 0) {
    n = 4;
    i = 4;
    dotsContainer.children[0].classList.remove("dot_selected");
  }
  direction = "left";
  n -= 1;
  i -= 1;
  imageBanner.src = `./assets/images/slideshow/${slides[n].image}`;
  tagLineBanner.innerHTML = slides[n].tagLine;
  updateSelectedDot();
}

function switchToRight() {
  if (n === 3) {
    n = -1;
    i = -1;
    dotsContainer.children[3].classList.remove("dot_selected");
  }
  direction = "right";
  n += 1;
  i += 1;
  imageBanner.src = `./assets/images/slideshow/${slides[n].image}`;
  tagLineBanner.innerHTML = slides[n].tagLine;
  updateSelectedDot();
}

generateDots();

leftArrow.addEventListener("click", switchToLeft);

rightArrow.addEventListener("click", switchToRight);
