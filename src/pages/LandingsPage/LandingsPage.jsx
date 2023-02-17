
import { useEffect, useState, createContext, useContext } from "react"
import LandingsList from "../../components/LandingsList/LandingsList"
import Header from '../../components/Header/Header'
import { AsteroidContext } from "../../App"



export default function LandingsPage() {


    const {setAsteroids, asteroids, favAstro,setFavAstro} = useContext(AsteroidContext)
    


    useEffect(() => {
        fetch(`https://nasa-api-us5g.onrender.com/api/landings`).then(res => res.json()).then(res => setAsteroids(res.landings))
    }, [] )


    return (
        <>
            <Header />
            <div className="bg-background-purple flex p-10">
                
                    <LandingsList favAstro={favAstro} setFavAstro={setFavAstro} asteroids={asteroids} />
                
            </div>
        </>
    )
}