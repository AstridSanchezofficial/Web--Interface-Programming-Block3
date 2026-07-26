const API_URL = "https://api.open-meteo.com/v1/forecast";

const CURRENT_WEATHER_PARAMETERS = [
    "temperature_2m",
    "weather_code"
];

/**
 * Retrieves current weather data from Open-Meteo.
 *
 * @param {number} latitude
 * @param {number} longitude
 * @returns {Promise<Object>}
 */
export async function fetchCurrentWeather(latitude, longitude) {

    const queryParameters = new URLSearchParams({
        latitude,
        longitude,
        current: CURRENT_WEATHER_PARAMETERS.join(","),
        temperature_unit: "celsius"
    });

    const requestUrl = `${API_URL}?${queryParameters}`;

    const response = await fetch(requestUrl);

    if (!response.ok) {
        throw new Error("Unable to retrieve weather data.");
    }

    return response.json();
}