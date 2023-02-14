import LandingCard from "../LandingCard/LandingCard"




const LandingsList = ({ asteroids }) => {

   

    return (
        <div className="flex gap-4 flex-wrap">
            
            {
                asteroids.map((asteroid, i) => <LandingCard key={i} asteroid={asteroid} />)
            }
        </div>
    )
}

export default LandingsList