import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import { useState } from 'react';


export default function searchBox ({updateInfo}) {
  let [city,setCity] = useState("");

  const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;


  let getWeatherInfo = async () => {
    let responce = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonresponce = await responce.json();
    let result = {
      city: jsonresponce.name,
      temp: jsonresponce.main.temp,
      tempMin: jsonresponce.main.temp_min,
      tempMax: jsonresponce.main.temp_max,
      humidity: jsonresponce.main.humidity,
      feelsLike: jsonresponce.main.feels_like,
      weather: jsonresponce.weather[0].description,
    };
    return result;
    }
  let handleChange= (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async(evt) => {
    evt.preventDefault();
    console.log(city);
    setCity("");
    let newInfo= await getWeatherInfo();
    updateInfo(newInfo);
  };
    return (
      <div className='searchBox'><h2>Search Wheather</h2>
      <form onSubmit = {handleSubmit}>
        <TextField id="city" label="Enter Place" variant="outlined" required value={city} onChange={handleChange}/>
      <br />
      <br />
      <Button type="submit" variant="contained">Search</Button>
      </form>
      </div>
          
    );
}