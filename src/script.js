function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function showTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");

  celsiusTemperature = response.data.main.temp;

  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
}

function userCityInput(event) {
  event.preventDefault();
  let inputCity = document.querySelector("#input-city");
  let userCity = document.querySelector("#user-city");
  userCity.innerHTML = inputCity.value;

  let apiKey = "0efb4fc16a9ed98dc0b3aafd8491d6ad";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&units=imperial&appid=${apiKey}`;

  axios.get(apiUrl).then(showTemperature);
}

let formInput = document.querySelector("#search-form");
formInput.addEventListener("submit", userCityInput);

function showPosition(position) {
  console.log(position);

  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  let apiKey = "0efb4fc16a9ed98dc0b3aafd8491d6ad";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

  axios.get(apiUrl).then(showCurrentTemperature);
}

function getCurrentCity() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let currentCityButton = document.querySelector("#current-city-button");
currentCityButton.addEventListener("click", getCurrentCity);

//cecliusChange
function celciusChange(event) {
  event.preventDefault();
  let celciusTemperature = document.querySelector("#temperature");
  celciusTemperature.innerHTML = "14";
}

let degreeCelcius = document.querySelector("#celcius-link");
degreeCelcius.addEventListener("click", celciusChange);

function fahrenheitChange(event) {
  event.preventDefault();
  let fahrenheitTemperature = document.querySelector("#temperature");
  fahrenheitTemperature.innerHTML = "54";
}

let degreeFahrenheit = document.querySelector("#fahrenheit-link");
degreeFahrenheit.addEventListener("click", fahrenheitChange);

