require('./index.css');

// Imports Weather, UI and Store 
const { Weather } = require('./weather');
const { UI } = require('./ui');
const { Store } = require('./store');

// Instance store, ui and weather
const store = new Store();
const { city, countryCode } = store.getLocationData();
const ui = new UI();
const weather = new Weather(city, countryCode);

async function fetchWeather(){
    const data = await weather.getWeather();
    console.log(data);
    ui.render(data);
}

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('countryCode').value;
    weather.changeLocation(city, countryCode);
    store.setLocationData(city, countryCode);
    fetchWeather();

    e.preventDefault();
    
});

document.addEventListener('DOMContentLoaded', fetchWeather);