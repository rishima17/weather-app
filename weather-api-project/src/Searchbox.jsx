import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function Searchbox({ search }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_API_KEY;

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        MinTemp: jsonResponse.main.temp_min,
        MaxTemp: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };
  let handleChange = (event) => {
    setCity(event.target.value);
  };
  let handleSubmit = async (event) => {
    event.preventDefault(); // Stop page reload

    try {
      let newInfo = await getWeatherInfo(); // Try to get weather info
      search(newInfo); // Pass data to parent
      setError(false); //  Clear any old error
      setCity(""); // Clear input field
    } catch (err) {
      setError(true); // If fetch fails, show error
    }
  };

  return (
    <div>
      <form>
        <TextField
          id="city"
          label="Enter city"
          variant="filled"
          value={city}
          required
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <Button
          variant="contained"
          type="submit"
          onClick={handleSubmit}
          style={{ marginBottom: "25px" }}
        >
          Search
        </Button>
        {error && (
          <p style={{ color: "red", fontSize: "40px" }}>
            No Such Place Exists!
          </p>
        )}
      </form>
    </div>
  );
}
