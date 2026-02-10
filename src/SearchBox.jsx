import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Alert from '@mui/material/Alert'; // For better error display
import { useState, useEffect } from "react";

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);

    const API_KEY = "d0c000df13140b346c9fe639fc407404";
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";

    const getWeatherInfo = async (city) => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();

            if (jsonResponse.cod !== 200) throw new Error("City not found");

            return {
                city: city,
                temp: jsonResponse.main.temp,
                tempmin: jsonResponse.main.temp_min,
                tempmax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            };
        } catch (error) {
            throw error;
        }
    };

    useEffect(() => {
        async function getFirstWeatherInfo() {
            try {
                let initialInfo = await getWeatherInfo("Kolkata")
                updateInfo(initialInfo);
            } catch (error) {
                throw error;
            }
        }
        getFirstWeatherInfo();
    }, []
    );

    const handleChange = (event) => setCity(event.target.value);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(false);
        try {
            let newInfo = await getWeatherInfo(city);
            updateInfo(newInfo);
            setCity("");
        } catch (error) {
            setError(true);
        }
    };

    return (
        <div style={{ marginBottom: "2rem" }}>
            <h2 style={{ color: "#333", marginBottom: "1.5rem" }}>Weather App</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                <TextField
                    id="city"
                    label="Search City"
                    variant="outlined"
                    size="small"
                    value={city}
                    onChange={handleChange}
                    required
                    fullWidth
                    style={{ backgroundColor: 'white', borderRadius: '4px' }}
                />
                <Button
                    variant="contained"
                    type="submit"
                    startIcon={<SearchIcon />}
                    style={{ backgroundColor: '#5b548a' }}
                >
                    Search
                </Button>
            </form>
            {error && <Alert severity="error" style={{ marginTop: "10px" }}>City not found!</Alert>}
        </div>
    );
}