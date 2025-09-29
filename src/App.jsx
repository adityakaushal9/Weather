import { useState } from 'react'
import VantaBackground from "./VantaBG.jsx";
import './App.css'
import SearchBox from './searchBox.jsx'
// import "./infoBox.css";
import WeatherApp from './WeatherApp.jsx'


function App() {
  // const [count, setCount] = useState(0)

  return (
      <>
      <VantaBackground />
       <WeatherApp/>
      
  </> 
     
       
  )
}

export default App
