document.addEventListener("DOMContentLoaded", function () {
  let hamburgerBtn = document.querySelector(".hamburger-btn");
  let menu = document.querySelector(".hamburger");
  let links = document.querySelectorAll(".hamburger__link");
  let hamburger = document.querySelector("#hamburger");

  hamburger.addEventListener("click", function () {
    this.classList.toggle("open");
  });

  hamburgerBtn.addEventListener("click", function () {
    menu.classList.toggle("active");
    document.body.classList.toggle("stop-scroll");
  });

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      menu.classList.toggle("active");
      hamburger.classList.remove("open");
      document.body.classList.remove("stop-scroll");
    });
  });
});
