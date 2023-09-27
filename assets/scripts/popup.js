const popup = document.querySelector(".popup__wrapper");
const overlay = document.querySelector(".popup");

document.addEventListener("click", (e) => {
  const withinBoundaries = e.composedPath().includes(popup);

  if (!withinBoundaries) {
    popup.style.display = "none";
    overlay.style.visibility = "hidden";
  }
});
