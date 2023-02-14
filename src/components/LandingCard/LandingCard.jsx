
import './LandingCard.css'

const LandingsCard = ({ asteroid }) => {

    console.log(asteroid)

    return (
        <div className="card group text-white bg-violin-dark rounded-lg
        flex flex-col justify-center items-center
        w-60 h-60 p-4 
        font-semibold text-2xl text-center
        ">
            <p>{Object.hasOwn(asteroid, 'name') ? asteroid.name : ''}</p>
            <div className='hover hidden group-hover:flex  '>
                <p>{asteroid.mass}</p>
                <p>Latitud: { Object.hasOwn(asteroid, 'geolocation') ? asteroid.geolocation.latitude : '' }</p>
                <p>Longitud: {Object.hasOwn(asteroid, 'geolocation') ? asteroid.geolocation.longitude : ''}</p>

            </div>
        </div>
    )
}

export default LandingsCard


    // < p > Masa: { Object.hasOwn(asteroid, 'mass') ? asteroid.mass : '' }</p > * /
    //     < p > Latitud: { Object.hasOwn(asteroid, 'geolocation') ? asteroid.geolocation.latitude : '' }</p >
    //         <p>Longitud: {Object.hasOwn(asteroid, 'geolocation') ? asteroid.geolocation.longitude : ''}</p>