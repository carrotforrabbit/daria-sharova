// window.onload = function () {
//   let preloader = document.getElementById("preloader");
//   preloader.classList.add("hide-preloader");
//   setInterval(function () {
//     preloader.classList.add("preloader-hidden");
//   }, 990);
// };

window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  preloader.classList.add("preloader_hidden");
});
