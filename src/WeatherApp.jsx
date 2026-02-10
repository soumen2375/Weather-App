import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        temp: 23.05,
        tempmin: 22.03,
        tempmax: 25.07,
        humidity: 46,
        feelsLike: 22.61,
        weather: "haze"
    });

    const updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div className="weather-container">
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}