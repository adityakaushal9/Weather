import { useState } from 'react'
import SearchBox from './searchBox.jsx'
import InfoBox from './InfoBox.jsx'
export default function WeatherApp(){
  let [WeatherInfo,setWeatherInfo] = useState({
   
    city: "Bhopal",
    feelsLike: 25.21,
  humidity: 100,
temp: 24.13,
tempMax: 30.11,
tempMin: 20.34,
weather: "haze",
  });

  let updateInfo = (result)=>{
    setWeatherInfo(result);
  }

    return (
        <div>
            <h2>Weather App </h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={WeatherInfo}/>
        </div>
    );

}