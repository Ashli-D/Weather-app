function displayWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}
function search(event) {
  event.preventDefault();
  let apiKey = "ff1d9ea9376b5c27a82e04fc2b2abdbb";
  let city = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeather);
}

let now = new Date();
let h3 = document.querySelector("h3");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

let days = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Sat"];
let day = days[now.getDay()];

let searchform = document.querySelector("#search-form");
searchform.addEventListener("submit", search);

h3.innerHTML = `${date}  ${day} , ${hours}:${minutes}`;
