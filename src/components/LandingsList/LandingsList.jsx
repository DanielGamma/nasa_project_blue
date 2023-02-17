import LandingCard from "../LandingCard/LandingCard"
import { useEffect, useState } from "react"

const LandingsList = ({asteroids,favAstro,setFavAstro,printFav}) => {

    // const {setAsteroids, asteroids, favAstro,setFavAstro} = useContext(AsteroidContext)
    
   

    return (
        <div className="flex gap-4 flex-wrap justify-center relative">
            
            {
                 printFav ? printFav.map((asteroid, i) => <LandingCard key={i} asteroid={asteroid} favAstro={favAstro} />) : asteroids.map((asteroid, i) => <LandingCard favAstro={favAstro} setFavAstro={setFavAstro}  key={i} asteroid={asteroid} />)
            }
        </div>
    )
}

export default LandingsList

// favAstro ? printFav.map((asteroid, i) => <LandingCard key={i} asteroid={asteroid} favAstro={favAstro} />) : 