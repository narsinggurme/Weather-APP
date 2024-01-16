
async function searchWeather() {
    const apiKey = 'c5c60eabe27980f698e8c79e718d62c1';
    const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
    const cityInput = document.getElementById('cityInput').value;

    try {
        const response = await fetch(apiurl + cityInput + `&appid=${apiKey}`);
        const data = await response.json();

        document.getElementById('cityName').innerText = data.name;
        document.getElementById('temperature').innerText = `${data.main.temp}°C`;
        document.getElementById('humidity').innerText = `${data.main.humidity}%`;
        document.getElementById('windSpeed').innerText = `${data.wind.speed} KM/H`;

        const weatherIconCode = data.weather[0].icon;
        const weatherIconUrl = `https://openweathermap.org/img/w/${weatherIconCode}.png`;
        document.getElementById('weatherIcon').src = weatherIconUrl;

        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString();
        const formattedTime = currentDate.toLocaleTimeString();
        document.getElementById('currentDateTime').innerText = `Updated at ${formattedDate} ${formattedTime}`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}