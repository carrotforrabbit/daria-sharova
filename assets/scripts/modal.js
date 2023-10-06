//modals
const modalBtn = document.getElementById("privacyBtn");
const modalPrivacy = document.querySelector(".modal");
const closeModal = document.querySelector(".closeModal");

const showModal = () => {
  event.preventDefault;
  modalPrivacy.style.display = "block";
  document.body.classList.add("stop-scrolling");
};

modalBtn.addEventListener("click", showModal);

closeModal.addEventListener("click", (e) => {
  modalPrivacy.style.display = "none";
  document.body.classList.remove("stop-scrolling");
});
