class EyebrowsView {
  eyebrows = document.querySelectorAll(".eyebrow");

  constructor() {
    this.addHandlerChangeEyebrow();
    window.addEventListener("resize", this.checkViewportWidth.bind(this));
    window.addEventListener("load", this.checkViewportWidth.bind(this));
  }

  checkViewportWidth() {
    if (window.innerWidth <= 450) {
      this.eyebrows.forEach((eyebrow) => {
        eyebrow.style.fontSize = "1.6rem";
        eyebrow.style.fontWeight = "600";
        const heading = eyebrow.textContent.toUpperCase();
        eyebrow.textContent = heading;
      });
    } else {
      this.eyebrows.forEach((eyebrow) => {
        eyebrow.style.fontSize = "2.4rem";
        eyebrow.style.fontWeight = "600";
        const heading = eyebrow.textContent.toUpperCase();
        eyebrow.textContent = heading;
      });
    }
  }
  addHandlerChangeEyebrow() {}
}

export default new EyebrowsView();
