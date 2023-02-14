
import { useEffect, useState } from "react"
import LandingsList from "../../components/LandingsList/LandingsList"


export default function LandingsPage (){


    const [ asteroids, setAsteroids] = useState([])

    useEffect(() => {
        fetch(`https://nasa-api-us5g.onrender.com/api/landings`).then(res => res.json()).then( res => setAsteroids(res.landings))
    }, [])

   
    return (
        <LandingsList asteroids={asteroids}/>
    )
}