import { useEffect, useState } from 'react'
import './App.css'
import Card__Weather from './components/Card__Weather'

function App() {
  const [count, setCount] = useState(0)

  const URL = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`

  const APIkey= '33362d39e5912619c9553d5b0a209cab'

 const [coords, setCoords] = useState()

 useEffect(()=>{

  const success = pos =>{
    //console.log(pos.coords.latitude)
    //console.log(pos.coords.longitude)
    const latlon={
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    }
    setCoords(latlon)
  }
  navigator.geolocation.getCurrentPosition(success)

 },[])
 
console.log(coords)



  return (
    <div className="App">
    <Card__Weather coords={coords}/>
    </div>
  )
}

export default App
