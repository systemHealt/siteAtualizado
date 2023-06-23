const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
let slideNumber = 0;

nextBtn.addEventListener("click", () => {
  changeSlide("next");
});

prevBtn.addEventListener("click", () => {
  changeSlide("prev");
});

function changeSlide(direction) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  if (direction === "next") {
    slideNumber++;
    if (slideNumber > numberOfSlides - 1) {
      slideNumber = 0;
    }
  } else if (direction === "prev") {
    slideNumber--;
    if (slideNumber < 0) {
      slideNumber = numberOfSlides - 1;
    }
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
}

let playSlider;

function startSlider() {
  playSlider = setInterval(() => {
    changeSlide("next");
  }, 4000);
}

startSlider();

slider.addEventListener("mouseover", () => {
  clearInterval(playSlider);
});

slider.addEventListener("mouseout", () => {
  startSlider();
});
