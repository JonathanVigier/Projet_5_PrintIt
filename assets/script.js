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
const imageBanner = document.querySelector(".banner-img");
const tagLineBanner = document.getElementById("banner").children[3];
const dots = document.querySelectorAll(".dot");
let n = 0;
let i = 0;

leftArrow.addEventListener("click", () => {
  if (n === 0) {
    n = 4;
    i = 4;
    dots[0].classList.remove("dot_selected");
  }
  n -= 1;
  i -= 1;
  imageBanner.src = `./assets/images/slideshow/${slides[n].image}`;
  tagLineBanner.innerHTML = slides[n].tagLine;
  if (0 < i < 4) {
    dots[i].classList.add("dot_selected");
    dots[i + 1].classList.remove("dot_selected");
  }
  console.log(n);
});

rightArrow.addEventListener("click", () => {
  if (n === 3) {
    n = -1;
    i = -1;
    dots[3].classList.remove("dot_selected");
  }
  n += 1;
  i += 1;
  imageBanner.src = `./assets/images/slideshow/${slides[n].image}`;
  tagLineBanner.innerHTML = slides[n].tagLine;
  if (0 < i < 4) {
    dots[i].classList.add("dot_selected");
    dots[i - 1].classList.remove("dot_selected");
  }
  console.log(n);
});

console.log(tagLineBanner);
