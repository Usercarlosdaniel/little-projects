const menu = document.getElementById("display")
const links = document.getElementById("links");

menu.addEventListener("click", function () {
  links.classList.toggle("show-link")
});
