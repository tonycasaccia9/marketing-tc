class NavToggleView {
  parentEl = document.querySelector(".nav__links");
  navToggle = document.querySelector(".nav__toggle");
  constructor() {
    this.checkViewportWidth(); // Check width on load

    window.addEventListener("resize", this.checkViewportWidth.bind(this)); // Listen for resize
  }

  checkViewportWidth() {
    if (window.innerWidth <= 985) {
      this.addhandlerToggle();
      this.parentEl.classList.add("hidden");
    } else {
      this.parentEl.classList.remove("hidden");
    }
  }

  toggleNav() {
    this.parentEl.classList.toggle("hidden");
  }

  hideNav() {
    this.parentEl.classList.add("hidden");

    console.log("hide");
  }

  addhandlerToggle() {
    ["click"].forEach((ev, i) => {
      this.navToggle.addEventListener(ev, this.toggleNav.bind(this));
    });

    ["click"].forEach((ev) =>
      this.parentEl.addEventListener(ev, this.toggleNav.bind(this))
    );
  }
}

export default new NavToggleView();
