import {
    MapContainer,
    TileLayer,
    Marker,
    Popup
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'

const iconUbi = new L.icon({
    iconUrl: icon,
    iconSize: [35, 55],
    iconAnchor: [30, 94],
    shadowAnchor: [22, 94],
    popupAnchor: [-3, -76]
});


export default function MapPage() {


    const [asteroids, setAsteroids] = useState([])

    useEffect(() => {
        fetch(`https://nasa-api-us5g.onrender.com/api/landings`).then(res => res.json()).then(res => setAsteroids(res.landings))
    }, [])



    return (

        <>
            <div className="overflow-hidden w-screen h-screen bg-background-purple">
                <Header />
                <div className='flex justify-center mt-10'>
                    <MapContainer center={{ lat: 40.6714400, lon: -2.5607400 }} zoom={5} className="w-[80%] h-[500px]">
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        {
                            asteroids.map((asteroidPosition, i) => {
                                if (Object.hasOwn(asteroidPosition, 'geolocation')) {
                                    const latLon = {
                                        lat: asteroidPosition.geolocation.latitude,
                                        lon: asteroidPosition.geolocation.longitude
                                    }
                                    return <Marker key={i} position={{ lat: latLon['lat'], lon: latLon['lon'] }} icon={iconUbi}>
                                        
                                    </Marker>
                                }

                            })
                        }
                        

                    </MapContainer>
                </div>
                </div>
           
        </>

    )
}