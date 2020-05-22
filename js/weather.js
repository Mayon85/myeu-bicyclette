// SELECT ELEMENTS 

const showDate = document.querySelector(".display-date p");
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");

// DISPLAY DATE AND TIME

let today = new Date();
let months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
months = months[today.getMonth()];
let year = today.getFullYear();
let date = today.getDate();

let current_date =`${date} ${months} ${year}`;

showDate.innerHTML = current_date;


// APP DATA
const weather = {}; 

weather.temperature = {
    unit : "celcius"
}

// APP CONSTS AND VARS
const KELVIN = 273;

// GET WEATHER
// ILE D'YEU COORDS : latitude = 46.7252; longitude = -2.3494;

const key = "cb32c7b51eb9bb812fbb0e2c4b498c5a";

function getWeather(latitude, longitude) {
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=46.7252&lon=-2.3494&appid=${key}&lang=fr`;

    fetch(api)
    .then(function(response){
        let data = response.json();
        return data;
    })
    .then(function(data) {
        weather.temperature.value = Math.floor(data.main.temp - KELVIN);
        // weather.iconId = data.weather[0].icon;
    })
    .then(function() {
        displayWeather();
    });
}

getWeather(46.7252,-2.3494)

// DISPLAY WEATHER 
function displayWeather () {
    iconElement.innerHTML = `<img src="./ressources/weather-icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;

}
