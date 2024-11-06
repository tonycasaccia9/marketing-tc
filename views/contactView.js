class ContactView {
  parentEl = document.querySelector("#contactForm");
  modal = document.querySelector(".modal");
  overlay = document.querySelector(".modal__overlay");
  btnCloseModal = document.querySelector(".button--close");
  btnsOpenModal = document.querySelectorAll(".btn--show-modal");

  constructor() {
    this.addHandlerOpenWindow();
    this.addHandlerCloseWindow();
  }

  openModal = function () {
    this.modal.classList.remove("hidden");
  };

  closeModal = function () {
    this.modal.classList.add("hidden");
  };

  addHandlerOpenWindow() {
    this.btnsOpenModal.forEach((btn) => {
      btn.addEventListener("click", this.openModal.bind(this));
    });
  }

  addHandlerCloseWindow() {
    this.btnCloseModal.addEventListener("click", this.closeModal.bind(this));
    this.overlay.addEventListener("click", this.closeModal.bind(this));
    // document.addEventListener("keydown", (e) => {
    //   if (e.key === "Enter") this.closeModal();
    // });
  }

  addHandlerSubmitForm(handler) {
    this.parentEl.addEventListener("submit", (e) => {
      e.preventDefault();

      const dataArr = [...new FormData(this.parentEl)];
      const data = Object.fromEntries(dataArr);

      console.log(data);
      this.closeModal();
      handler(data);
    });
  }
}

export default new ContactView();
