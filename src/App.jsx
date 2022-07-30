import { useEffect, useState } from 'react'
import './App.css'
import Card__Weather from './components/Card__Weather'

function App() {

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
