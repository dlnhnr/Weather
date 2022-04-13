var input = document.getElementById("zipcode");
const show = document.getElementById("show-weather");

const city = document.getElementById("city-name");
const latitude = document.getElementById("lat");
const longitude = document.getElementById("lon");

const main = document.getElementById("weather-main");
const description = document.getElementById("weather-desc");

const speed = document.getElementById("wind-speed");
const degree = document.getElementById("wind-degree");

const current = document.getElementById("temp-current");
const minimum = document.getElementById("temp-min");
const maximum = document.getElementById("temp-max");
const humidity = document.getElementById("humidity");

const access = "a976a3a413808e9bce7acd3ce8f361bc"

show.addEventListener('click', () => getInfo());

async function getInfo() {
  const zipcode = input.value;
  const res = await fetch (`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${access}&units=imperial`);

  if(res.status === 404) {
    alert("Zipcode is invalid");
    input.value="";
  }
  else {
  const data = await res.json();
  console.log(data);

  city.innerText = data.name;
  latitude.innerText = data.coord.lat;
  longitude.innerText = data.coord.lon;
  main.innerText = data.weather[0].main;
  description.innerText = data.weather[0].description;
  speed.innerText = data.wind.speed;
  degree.innerText = data.wind.deg;
  current.innerText = data.main.temp;
  minimum.innerText = data.main.temp_min;
  maximum.innerText = data.main.temp_max;
  humidity.innerText = data.main.humidity;
}
}
