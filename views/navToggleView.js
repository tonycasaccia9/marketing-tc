class NavToggleView {
  parentEl = document.querySelector(".nav__links");
  navToggle = document.querySelector(".nav__toggle");
  constructor() {
    this.checkViewportWidth(); // Check width on load

    window.addEventListener("resize", this.checkViewportWidth.bind(this)); // Listen for resize
    this.addhandlerToggle();
  }

  checkViewportWidth() {
    if (window.innerWidth <= 985) {
      this.parentEl.classList.add("hidden");
    } else {
      this.parentEl.classList.remove("hidden");
    }
  }

  toggleNav() {
    this.parentEl.classList.toggle("hidden");
    console.log("toggle");
  }

  hideNav() {
    if (window.innerWidth <= 985) {
      this.parentEl.classList.add("hidden");
    }
  }

  addhandlerToggle() {
    ["click"].forEach((ev, i) => {
      this.navToggle.addEventListener(ev, this.toggleNav.bind(this));
      this.parentEl.addEventListener(ev, (e) => {
        const link = e.target.closest(".nav__link");
        if (!link) return;
        console.log("hide");
        this.hideNav();
      });
    });
  }
}

export default new NavToggleView();
