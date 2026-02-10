import SearchBox from './SearchBox.jsx';
import InfoBox from "./InfoBox.jsx";
import { useState } from "react";

export default function WeatherApp(){
    let[weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        temp: 23.05,
        tempmin: 22.03,
        tempmax: 25.07,
        humidity: 46,
        feelsLike: 22.61,
        weather: "haze"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(
        <div>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}