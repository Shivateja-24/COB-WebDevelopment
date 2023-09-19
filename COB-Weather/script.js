
const searchButton = document.getElementById('searchButton');
const cityInput = document.getElementById('cityInput');
const weatherInfo = document.getElementById('weatherInfo');

searchButton.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        getWeatherData(city);
    } else {
        alert('Please enter a city name');
    }
});

function getWeatherData(city) {
    const apiKey = "49b4e4bc6e5e091b42a6fdd2271ec591";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            weatherInfo.innerHTML = `Weather in ${city}: ${description}, Temperature: ${temperature}°C`;
        })
        .catch(error => {
            console.error(error);
            alert('An error occurred while fetching weather data');
        });
}
