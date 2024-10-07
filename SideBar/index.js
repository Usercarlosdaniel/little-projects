const displaySideBar = document.getElementById("display-sidebar");
const sideBar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");

displaySideBar.addEventListener("click", function () {
  sideBar.classList.toggle("sidebar");
});

closeBtn.addEventListener("click", function () {
  sideBar.classList.remove("sidebar");
});
