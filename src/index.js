import { getWeatherData } from "./fetch";
import "./styles.css"; 

const searchButton = document.getElementById("search"); 
searchButton.addEventListener("click", () => {
    const city = document.getElementById("location").value;
    getWeatherData(city)
        .then(data => {
           
            const oldCard = document.querySelector(".weather-card");
            if (oldCard) oldCard.remove();

           
            let container = document.createElement("div");
            container.classList.add("weather-card");
            container.innerHTML = `
                <h2>Weather in ${data.address}</h2>
                <p><strong>Description:</strong> ${data.description}</p>
                <p><strong>Condition:</strong> ${data.currentConditions.icon}</p>
                <p><strong>Temperature:</strong> ${data.currentConditions.temp}°C</p>
                <p><strong>Humidity:</strong> ${data.currentConditions.humidity}%</p>
                <p><strong>Wind Speed:</strong> ${data.currentConditions.windspeed} km/h</p>
            `;
            document.body.appendChild(container);
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
});
