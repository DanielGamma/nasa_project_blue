


const LandingsCard = ({ asteroid }) => {
    console.log(asteroid)


    return (
        <div className="text-white bg-purple-900 flex justify-center items-center w-60 h-60 font-semibold text-2xl text-center rounded-lg">
            <p>{Object.hasOwn(asteroid, 'name') ? asteroid.name : ''}</p>
        </div>
    )
}

export default LandingsCard


    // < p > Masa: { Object.hasOwn(asteroid, 'mass') ? asteroid.mass : '' }</p > * /
    //     < p > Latitud: { Object.hasOwn(asteroid, 'geolocation') ? asteroid.geolocation.latitude : '' }</p >
    //         <p>Longitud: {Object.hasOwn(asteroid, 'geolocation') ? asteroid.geolocation.longitude : ''}</p>