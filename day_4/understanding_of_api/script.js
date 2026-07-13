const cityInput = document.getElementById('city');
const searchBtn = document.getElementById('search-btn');
const resultDiv = document.getElementById('result');

async function getWeather(){
    const city = cityInput.value.trim();
    if(city === ""){
        resultDiv.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }
     
    const geoResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
    const geoData = await geoResponse.json();
    if (!geoData.results || geoData.results.length === 0) {
    resultDiv.innerHTML = `<p>City not found. Please try again.</p>`;
    return;
}

    const latitude = geoData.results[0].latitude;
    const longitude = geoData.results[0].longitude;

    const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
    const weatherData = await weatherResponse.json();

    console.log(geoData);
    console.log(weatherData);

    const temperature = weatherData.current_weather.temperature;
    const windspeed = weatherData.current_weather.windspeed;
    const weatherCode = weatherData.current_weather.weathercode;

    resultDiv.innerHTML = `<h2>Weather in ${city}</h2>
    <p>Temperature: ${temperature}°C</p>
    <p>Windspeed: ${windspeed} km/h</p>
    <p>Weather: ${getWeatherDescription(weatherCode)}</p>`;
}

function getWeatherDescription(code) {
    if (code === 0) return "Clear sky";
    if (code === 1 || code === 2 || code === 3) return "Cloudy";
    if (code >= 51 && code <= 67) return "Rainy";
    if (code >= 71 && code <= 77) return "Snowy";
    return "Unknown";
}

searchBtn.addEventListener('click', getWeather);