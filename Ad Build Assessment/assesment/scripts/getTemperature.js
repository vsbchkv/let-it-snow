import { useFetch } from "./useFetch.js";

const FORECAST_ENDPOINT = 'https://api.weather.gov/gridpoints/BOU/62,61/forecast'

useFetch(FORECAST_ENDPOINT)
    .then((response) => {
        const temp = document.querySelector('.info-temp');
        temp.textContent = `${response.properties.periods[0].temperature}° F`;
    })

    .catch(() => {
        console.warn('Cannot fetch temperature');
    });
