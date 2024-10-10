const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

btn.addEventListener("click", () => {
  const isSlide = btn.classList.contains("slide");
  btn.classList.toggle("slide");
  isSlide ? video.play() : video.pause();
});

const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  preloader.classList.add("hide-preloader");
});
