import { fetchCurrentWeather } from "./weather-api.js";

import {
    getWeatherDescription,
    getWeatherIcon
} from "./weather-utils.js";


class CurrentWeather extends HTMLElement {

    constructor() {

        super();

        this.renderLoadingState();

    }


    connectedCallback() {

        this.loadWeather();

    }


    async loadWeather() {

        try {

            const coordinates = await this.getCoordinates();

            const weatherData = await fetchCurrentWeather(
                coordinates.latitude,
                coordinates.longitude
            );

            this.renderWeather(weatherData);

        } catch (error) {

            this.renderError(error.message);

        }

    }


    getCoordinates() {

        const latitudeAttribute = this.getAttribute("latitude");

        const longitudeAttribute = this.getAttribute("longitude");


        /*
         * If both coordinates are provided manually,
         * the browser does not need to request the user's location.
         */
        if (latitudeAttribute && longitudeAttribute) {

            return Promise.resolve({

                latitude: Number(latitudeAttribute),

                longitude: Number(longitudeAttribute)

            });

        }


        return this.getUserLocation();

    }


    getUserLocation() {

        return new Promise((resolve, reject) => {

            if (!navigator.geolocation) {

                reject(
                    new Error(
                        "Geolocation is not supported by this browser."
                    )
                );

                return;

            }


            navigator.geolocation.getCurrentPosition(

                (position) => {

                    resolve({

                        latitude: position.coords.latitude,

                        longitude: position.coords.longitude

                    });

                },

                () => {

                    reject(

                        new Error(
                            "Unable to access your location."
                        )

                    );

                }

            );

        });

    }


    renderLoadingState() {

        this.innerHTML = `

            <div class="card weather-card weather-loading">

                <div class="text-center">

                    <div
                        class="spinner-border text-primary mb-3"
                        role="status">
                    </div>

                    <p class="mb-0">
                        Loading current weather...
                    </p>

                </div>

            </div>

        `;

    }


    renderWeather(weatherData) {

        const currentWeather = weatherData.current;

        const temperature = Math.round(
            currentWeather.temperature_2m
        );

        const weatherCode = currentWeather.weather_code;

        const description =
            getWeatherDescription(weatherCode);

        const icon =
            getWeatherIcon(weatherCode);


        this.innerHTML = `

            <div class="card weather-card">

                <div class="card-body text-center p-5">

                    <div class="weather-icon mb-3">

                        ${icon}

                    </div>


                    <h2 class="h4 mb-3">

                        Current Weather

                    </h2>


                    <div class="weather-temperature">

                        ${temperature}°C

                    </div>


                    <p class="lead mb-0">

                        ${description}

                    </p>


                    <p class="weather-location mt-3 mb-0">

                        Coordinates:

                        ${Number(
                            currentWeather.latitude ||
                            this.getAttribute("latitude")
                        ).toFixed(2)}

                        ,

                        ${Number(
                            currentWeather.longitude ||
                            this.getAttribute("longitude")
                        ).toFixed(2)}

                    </p>

                </div>

            </div>

        `;

    }


    renderError(errorMessage) {

        this.innerHTML = `

            <div class="card weather-card weather-error">

                <div class="card-body text-center">

                    <div class="alert alert-danger mb-0">

                        <strong>
                            Weather unavailable
                        </strong>

                        <p class="mb-0 mt-2">

                            ${errorMessage}

                        </p>

                    </div>

                </div>

            </div>

        `;

    }

}


customElements.define(
    "current-weather",
    CurrentWeather
);