
import { useEffect, useState, createContext, useContext } from "react"
import LandingsList from "../../components/LandingsList/LandingsList"
import Header from '../../components/Header/Header'
import { AsteroidContext } from "../../App"
import Loading from "../../components/Loading/Loading"



export default function LandingsPage() {


    const {setAsteroids, asteroids, favAstro,setFavAstro} = useContext(AsteroidContext)
    


    useEffect(() => {
        fetch(`https://nasa-api-us5g.onrender.com/api/landings`).then(res => res.json()).then(res => setAsteroids(res.landings))
    }, [] )


    return (
        <>
            <Header />
            <div className="bg-background-purple flex justify-center items-center p-10">
                
                    <LandingsList asteroids={asteroids} />
                
            </div>
        </>
    )
}