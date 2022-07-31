import { useEffect, useState } from 'react'
import './App.css'
import Card__Weather from './components/Card__Weather'
import background from './imgweather/niebla.jpg'

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
  console.log(coords)

  return (
<<<<<<< HEAD
    <div  className="App" style={{backgroundImage:`url("./imgweather/niebla.jpg")`}}> 
=======
    <div  className="App" style={{backgroundImage:`url(${background})`}}> 
>>>>>>> 65d6e4b8f2ce2467af68b47a9fd2b8b9318da886
      <Card__Weather coords={coords}/>
      
    </div>
    
  )
}

export default App
