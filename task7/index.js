const apiKey = 'eedf59fc4d5048a4fdcc9f0f5125887c';
async function getWeather() {
    const cityName = document.getElementById('input').value.trim();
    if (cityName === '') {
        alert('Please enter a city name.');
        return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    try{
        const res=await fetch(url)
        const data=await res.json()
        if (data.cod !== 200) {
            document.getElementById('weather-result').innerHTML = `<p>City not found. Please try again.</p>`;
            return;
        }
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        document.getElementById('weather-result').innerHTML = `
            <h3>Weather in ${cityName}</h3>
            <p>Temperature: ${temperature}°C</p>
            <p>Description: ${description}</p>
            <p>Humidity: ${humidity}%</p>
            <p>Wind Speed: ${windSpeed} m/s</p>
        `;
    } catch (error) {
        document.getElementById('weather-result').innerHTML = `<p>Error fetching weather data. Please try again later.</p>`;
        console.error('Error fetching data:', error);
    }
}
document.addEventListener('keypress',(e)=>{
    if(e.code==='Enter'){
        getWeather();
    }
});
