const modalOverlay = document.querySelector(".modal-overlay");
const displayBtn = document.querySelector(".display-btn");
const closeBtn = document.querySelector(".close-btn");

displayBtn.addEventListener("click", function () {
  modalOverlay.classList.add("show");
});

closeBtn.addEventListener("click", function () {
  modalOverlay.classList.remove("show");
});
