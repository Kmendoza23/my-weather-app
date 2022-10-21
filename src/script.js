let now = new Date();
let days = ["Sun", "Mon", "Tue", "Wed", "Thrus", "Fri", "Sat"];
let day = days[now.getDay()];
let hour = now.getHours();
let minute = now.getMinutes();

let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = `${day}, ${hour}:${minute}`;

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let humidity = Math.round(response.data.main.humidity);
  let windSpeed = Math.round(response.data.wind.speed);
  let feelsLike = Math.round(response.data.main.feels_like);

  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `${temperature}`;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `Humidity : ${humidity}%`;

  let windSpeedElement = document.querySelector("#wind-speed");
  windSpeedElement.innerHTML = `Wind Speed : ${windSpeed} mph`;

  let feelsLikeElement = document.querySelector("#feels-like");
  feelsLikeElement.innerHTML = `Feels like ${feelsLike}°F`;
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

//Week 5 button challenge

function showCurrentTemperature(response) {
  console.log(response.data.name);

  let currentLocation = response.data.name;
  let currentTemperature = Math.round(response.data.main.temp);
  let currentHumidity = Math.round(response.data.main.humidity);
  let currentWindSpeed = Math.round(response.data.wind.speed);
  let currentFeelsLike = Math.round(response.data.main.feels_like);

  let currentLocationElement = document.querySelector("#user-city");
  currentLocationElement.innerHTML = `${currentLocation}`;

  let currentTemperatureElement = document.querySelector("#temperature");
  currentTemperatureElement.innerHTML = `${currentTemperature}`;

  let currentHumidityElement = document.querySelector("#humidity");
  currentHumidityElement.innerHTML = `Humidity : ${currentHumidity}%`;

  let currentWindSpeedElement = document.querySelector("#wind-speed");
  currentWindSpeedElement.innerHTML = `Wind Speed : ${currentWindSpeed} mph`;

  let currentFeelsLikeElement = document.querySelector("#feels-like");
  currentFeelsLikeElement.innerHTML = `Feels like ${currentFeelsLike}°F`;
}

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

o