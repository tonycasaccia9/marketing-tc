"use strict";

// Elements
const header = document.querySelector(".header");
const overview = document.querySelector("#overview");

const navLinks = document.querySelector(".nav__links");
const navItem = document.querySelectorAll(".nav__link");
const allSections = document.querySelectorAll(".section");

// Event handlers
document.querySelector("body").addEventListener("click", function (e) {});

//////////////////////////////////////////
// Reveal Sections
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});
allSections.forEach(function (section) {
  section.classList.add("section--hidden");
  sectionObserver.observe(section);
});

//////////////////////////////////////////
// Nav Button Hover effect
const hoverHandler = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    // Lighten siblings and logo
    siblings.forEach((el) => {
      if (e.target !== el) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};
navLinks.addEventListener("mouseover", hoverHandler.bind(0.5));

navLinks.addEventListener("mouseout", hoverHandler.bind(1));

//////////////////////////////////////////
// Underline effect
const underline = document.querySelector(".underline");
window.addEventListener("load", function (e) {
  console.log(underline);
  underline.classList.add("underline--active");
});

//////////////////////////////////////////
// Jump to sections
navLinks.addEventListener("click", function (e) {
  e.preventDefault();
  const id = e.target.getAttribute("href");
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});

//////////////////////////////////////////
// Slider
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const btnRight = document.querySelector(".slider__btn--right");
const btnLeft = document.querySelector(".slider__btn--left");
const dotsContainer = document.querySelector(".dots");

// Default working view
// slider.style.overflow = "visible";
// slider.style.scale = "0.5";
// slider.style.transform = "translateX(-700px)";

let curSlide = 0;
const maxSlide = slides.length;

const createDots = function (slide) {
  // select container and populate with dot html
  slides.forEach(function (_, i) {
    dotsContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot dots__dot--active" data-slide="${i}"></button>`
    );
  });
};
createDots(curSlide);

const activateDots = function (slide) {
  // Reset dots to non active
  document.querySelectorAll(".dots__dot").forEach(function (dot) {
    dot.classList.remove("dots__dot--active");
  });

  // assign active dot
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};
activateDots(curSlide);
const goToSlide = function (slide) {
  slides.forEach(function (s, i) {
    s.style.transform = `translateX(${(i - slide) * 100}%)`;
  });
};
goToSlide(0);

const nextSlide = function () {
  if (curSlide === maxSlide - 1) curSlide = 0;
  else curSlide++;
  goToSlide(curSlide);
  activateDots(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) curSlide = maxSlide - 1;
  else curSlide--;
  goToSlide(curSlide);
  activateDots(curSlide);
};

btnRight.addEventListener("click", nextSlide);

btnLeft.addEventListener("click", prevSlide);

dotsContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    console.log(e.target);
    curSlide = +e.target.dataset.slide;
    console.log(curSlide);
    goToSlide(curSlide);
    activateDots(curSlide);
  }
});
