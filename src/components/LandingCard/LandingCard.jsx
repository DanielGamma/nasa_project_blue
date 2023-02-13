
const LandingsCard = ({asteroid}) => {



    return (
        <div className="text-white bg-purple-900 flex justify-center items-center w-60 h-60 font-semibold text-2xl text-center rounded-lg">
           
            <p>{asteroid.name}</p>
        </div>
    )
}

export default LandingsCard