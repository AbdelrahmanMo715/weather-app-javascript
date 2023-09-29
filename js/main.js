
let apiKey = "6d3251e22ebf1eec7ff28c1f9f1422b8";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric" + `&appid=${apiKey}`;
let weatherDiv = document.querySelector(".weather");
let errorDiv = document.querySelector(".error");
let tempDiv = document.querySelector(".temp");
let cityDiv = document.querySelector(".city");
let humidityDiv = document.querySelector(".humidity");
let windSpeedDiv = document.querySelector(".wind-speed");
let WeatherIcon = document.querySelector(".weather-icon");
let cityInput = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
async function checkWeater(city){
    let response = await fetch(apiUrl + `&q=${city}`);
    if(response.status == 404){
        errorDiv.style.display="block";
        weatherDiv.style.display="none";
    }
    let data = await response.json();
    console.log(data);
    cityDiv.innerHTML = data.name || "invalid City Name";
    tempDiv.innerHTML = `${Math.round(data.main.temp)}°C`;
    humidityDiv.innerHTML = `${data.main.humidity}%`;
    windSpeedDiv.innerHTML = `${data.wind.speed} Km/h`;
    WeatherIcon.src = `images/${data.weather[0].main.charAt(0).toLowerCase().concat(data.weather[0].main.slice("1"))}.png`;
    weatherDiv.style.display = "block";
    errorDiv.style.display = "none";
}
searchBtn.addEventListener("click",function(){
    if(cityInput != ""){
        checkWeater(cityInput.value);
    }
})




