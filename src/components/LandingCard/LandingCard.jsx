
import './LandingCard.css'

const LandingsCard = ({ asteroid }) => {

    console.log(asteroid)

    return (
        <div className="group text-white bg-violin-dark rounded-lg
        flex flex-col justify-center items-center relative overflow-hidden
        w-60 h-60 
        font-semibold text-2xl text-center
        "><div className='font-normal relative
                            translate-y-10 flex-col justify-center items-center
                        group-hover:-translate-y-10
                         transition-all duration-700'>
                <p className='card inset-0 group-hover:text-xl transition-all duration-700 font-semibold text-3xl text-center'>{Object.hasOwn(asteroid, 'name') ? asteroid.name : ''}</p>
                <div className='hover mt-5 relative opacity-0
                                
                                 group-hover:opacity-100 transition-all duration-700 delay-300'>
                    <p className='text-lg text-left'>Mass: {asteroid.mass}</p>
                    <p className='text-lg text-left'>Latitud: {Object.hasOwn(asteroid, 'geolocation') ? asteroid.geolocation.latitude : ''}</p>
                    <p className='text-lg text-left'>Longitud: {Object.hasOwn(asteroid, 'geolocation') ? asteroid.geolocation.longitude : ''}</p>

                </div>
            </div>
        </div>
    )
}

export default LandingsCard


    // < p > Masa: { Object.hasOwn(asteroid, 'mass') ? asteroid.mass : '' }</p > * /
    //     < p > Latitud: { Object.hasOwn(asteroid, 'geolocation') ? asteroid.geolocation.latitude : '' }</p >
    //         <p>Longitud: {Object.hasOwn(asteroid, 'geolocation') ? asteroid.geolocation.longitude : ''}</p>