class SliderView {
  parentEl = document.querySelector(".slider");
  sliderHeading = document.querySelector(".slider__heading");
  forkifyHeading = document.querySelector(".forkify__heading");
  headings = Array.from(document.querySelectorAll(".slider__heading"));
  newHeadings = ["Pokemon Deck Building App", "Forkify Recipe App"];
  longHeadings = [
    "Pokemon Deck Building App",
    "Forkify: Recipe Search Application",
  ];

  constructor() {
    window.addEventListener("resize", this.checkViewportWidth.bind(this));
  }

  checkViewportWidth() {
    if (window.innerWidth <= 450) {
      this.headings.forEach((h, i) => {
        h.textContent = this.newHeadings[i];
      });
    } else {
      this.headings.forEach((h, i) => {
        h.textContent = this.longHeadings[i];
      });
    }
  }
}

export default new SliderView();
