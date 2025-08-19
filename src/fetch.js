export async function getWeatherData(city) {
  const api = `https:weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=6XZ6WDG22SSXTVB4LTMZTKEFH&contentType=json`;
    try {
        const response = await fetch(api);
        if (!response.ok) {
            throw new Error(`Error fetching weather data: ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data);
        console.log(data.description);
        console.log(data.currentConditions.temp);
        console.log(data.currentConditions.humidity);
        console.log(data.currentConditions.windspeed);
        console.log(data.currentConditions.icon);
        console.log(data.latitude);
        console.log(data.longitude);
      
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}   