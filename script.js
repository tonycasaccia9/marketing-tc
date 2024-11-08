"use strict";

import * as model from "./model.js";
import contactView from "./views/contactView.js";
import navToggleView from "./views/navToggleView.js";
import sliderView from "./views/sliderView.js";
import eyebrowsView from "./views/eyebrowsView.js";

// Elements
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const overview = document.querySelector("#overview");

const navLinks = document.querySelector(".nav__links");
const navItem = document.querySelectorAll(".nav__link");
const allSections = document.querySelectorAll(".section");
const navToggle = document.querySelector(".nav__toggle");

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
  threshold: 0.15,
});

allSections.forEach(function (section) {
  // section.classList.add("section--hidden");
  sectionObserver.observe(section);
});

//////////////////////////////////////////
// Sticky nav

const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.15,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

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
    // logo.style.opacity = this;
  }
};
navLinks.addEventListener("mouseover", hoverHandler.bind(0.5));

navLinks.addEventListener("mouseout", hoverHandler.bind(1));

//////////////////////////////////////////
// Underline effect
const underline = document.querySelector(".underline");
window.addEventListener("load", function (e) {
  if (!underline) return;
  underline.classList.add("underline--active");
});

//////////////////////////////////////////
// Jump to sections
nav.querySelectorAll(".nav__item").forEach((item) =>
  item.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    if (!id) return;

    const targetSection = document.querySelector(id);
    const navHeight = nav.getBoundingClientRect().height;
    console.log(targetSection, id);
    const yOffsetInitial = window.pageYOffset === 0 ? -navHeight + 10 : 0;
    const yOffset = -navHeight;
    const yPosition =
      targetSection.getBoundingClientRect().top +
      (window.pageYOffset + yOffsetInitial) +
      yOffset;
    console.log(window.pageYOffset);

    window.scrollTo({ top: yPosition, behavior: "smooth" });

    // document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  })
);

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

const sliderCode = function () {
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
  const goToSlide = function (slide) {
    slides.forEach(function (s, i) {
      s.style.transform = `translateX(${(i - slide) * 100}%)`;
    });
  };

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
      curSlide = +e.target.dataset.slide;
      goToSlide(curSlide);
      activateDots(curSlide);
    }
  });

  const initSlider = function (slide) {
    createDots(curSlide);
    goToSlide(0);
    activateDots(curSlide);
  };
  initSlider(curSlide);
};
sliderCode();

/////////////////////////////////////////
// Tabbed Section
const tabs = document.querySelector(".tabs");
const tabsBtnsContainer = document.querySelector(".tabs__btns");
const tabsBtns = document.querySelectorAll(".tabs__btn");
const tabsContent = document.querySelectorAll(".tabs__content");

// Tab btn active
// tabsBtnsContainer.addEventListener("click", function (e) {
//   e.preventDefault();
//   if (!e.target.classList.contains("tabs__btn")) return;
//   tabsBtns.forEach(function (btn) {
//     btn.classList.remove("tabs__btn--active");
//     e.target.classList.add("tabs__btn--active");
//   });

//   // Switch active tab content
//   tabsContent.forEach(function (tab) {
//     tab.classList.remove("tabs__content--active");
//   });
//   document
//     .querySelector(`.tabs__content--${e.target.dataset.tab}`)
//     .classList.add("tabs__content--active");
// });

//////////////////////////////////////
// Controller

const controlSubmitForm = function (data) {
  model.addResponse(data);
  console.log(model.state);
};

const init = function () {
  contactView.addHandlerSubmitForm(controlSubmitForm);
};
init();
