const colorArray = [
  "pink",
  "blue",
  "red",
  "aqua",
  "grey",
  "green",
  "cadetblue",
];
const colorFlipper = document.getElementById("flipper");
const colorDisplay = document.getElementById("color");
const Main = document.querySelector("main");
colorFlipper.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  const randomColor = colorArray[randomNumber];

  Main.style.backgroundColor = randomColor;
  colorDisplay.innerHTML = randomColor;
});
function getRandomNumber() {
  return Math.floor(Math.random() * colorArray.length);
}
