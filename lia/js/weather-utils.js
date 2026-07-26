const WEATHER_DESCRIPTIONS = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",

    45: "Fog",
    48: "Depositing rime fog",

    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",

    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",

    71: "Slight snow",
    73: "Moderate snow",
    75: "Heavy snow",

    80: "Slight rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",

    95: "Thunderstorm",
    96: "Thunderstorm with hail",
    99: "Thunderstorm with heavy hail"
};


/**
 * Converts an Open-Meteo weather code into a readable description.
 *
 * @param {number} weatherCode
 * @returns {string}
 */
export function getWeatherDescription(weatherCode) {

    return WEATHER_DESCRIPTIONS[weatherCode] || "Unknown weather";

}


/**
 * Returns an emoji representing the weather condition.
 *
 * @param {number} weatherCode
 * @returns {string}
 */
export function getWeatherIcon(weatherCode) {

    if (weatherCode === 0) {
        return "☀️";
    }

    if ([1, 2, 3].includes(weatherCode)) {
        return "⛅";
    }

    if ([45, 48].includes(weatherCode)) {
        return "🌫️";
    }

    if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(weatherCode)) {
        return "🌧️";
    }

    if ([71, 73, 75].includes(weatherCode)) {
        return "❄️";
    }

    if ([95, 96, 99].includes(weatherCode)) {
        return "⛈️";
    }

    return "🌤️";
}