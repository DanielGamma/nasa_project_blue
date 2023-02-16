
import { useEffect, useState, createContext, useContext } from "react"
import LandingsList from "../../components/LandingsList/LandingsList"
import Header from '../../components/Header/Header'
import { asteroidContext } from "../../App"



export default function LandingsPage() {


    const {setAsteroids, asteroids} = useContext(asteroidContext)
    


    useEffect(() => {
        fetch(`https://nasa-api-us5g.onrender.com/api/landings`).then(res => res.json()).then(res => setAsteroids(res.landings))
    }, [] )


    return (
        <>
            <Header />
            <div className="bg-background-purple flex p-10">
                
                    <LandingsList asteroids={asteroids} />
                
            </div>
        </>
    )
}