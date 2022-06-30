"use strict";
const slides = document.querySelectorAll(".slide"); // Select all slides
slides.forEach((slide, indx) => {                   // loop through slides and set each slides translateX
  slide.style.transform = `translateX(${indx * 100}%)`;
});

const nextSlide = document.querySelector(".btn-next"); // select next slide button

let curSlide = 0;                                    // current slide counter
let maxSlide = slides.length - 1;                    // maximum number of slides

nextSlide.addEventListener("click", function () {    // add event listener and navigation functionality
  if (curSlide === maxSlide) {                       // check if current slide is the last and reset current slide
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides.forEach((slide, indx) => {                  //  move slide by -100%
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

const prevSlide = document.querySelector(".btn-prev");// select next slide button

prevSlide.addEventListener("click", function () {     // add event listener and navigation functionality
  if (curSlide === 0) {                               // check if current slide is the first and reset current slide to last
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  slides.forEach((slide, indx) => {                   //  move slide by 100%
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});