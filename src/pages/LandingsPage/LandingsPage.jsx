
import { useEffect, useState } from "react"
import LandingsList from "../../components/LandingsList/LandingsList"
import Header from '../../components/Header/Header'

export default function LandingsPage() {


    const [asteroids, setAsteroids] = useState([])

    useEffect(() => {
        fetch(`https://nasa-api-us5g.onrender.com/api/landings`).then(res => res.json()).then(res => setAsteroids(res.landings))
    }, [])


    return (
        <>
            <Header />
            <div className="bg-background-purple flex p-10">
                <LandingsList asteroids={asteroids} />
            </div>
        </>
    )
}