const apiKey = "c8e3656cdbf44577c6d4f0603ef799b1";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector("#search");
const searchBtn = document.querySelector(".btn-search");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();

  console.log(data);

  if (response.status === 404) {
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".error").style.display = "block";
  } else {
    if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "images/clouds.png";
      weatherIcon.alt = "Cloud weather";
    } else if (data.weather[0].main === "Mist") {
      weatherIcon.src = "images/mist.png";
      weatherIcon.alt = "Mist weather";
    } else if (data.weather[0].main === "Clear") {
      weatherIcon.src = "images/clear.png";
      weatherIcon.alt = "Clear weather";
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "images/rain.png";
      weatherIcon.alt = "Rain weather";
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
      weatherIcon.alt = "Drizzle weather";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
