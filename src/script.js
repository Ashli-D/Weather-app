function formateDate(timestamp) {
  let date = new date(timestamp);
  let hours = date.getHours();
  let mintues = date.getMintues();
  let day = day.getDay();
  return `${day} ${hours}${mintues} `;
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#Temperature");
  let cityElement = document.querySelector("#city");
  let forecastElement = document.querySelector("#forecast");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  forecastElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formateDate(response.data.dt * 1000);
}

let apiKey = " 5111253c3d0f7014a0af1846fb83d6a7";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=5111253c3d0f7014a0af1846fb83d6a7&units=metric`;

axios.get(apiUrl).then(displayTemperature);
