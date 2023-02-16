import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../../components/Header/Header";
import LandingButton from "../../components/LandingButton/LandingButton";



export default function DetailsPage() {

    const { id } = useParams()
    const [asteroid, setAsteroid] = useState({})

   
    useEffect(() => {
        fetch(`https://nasa-api-us5g.onrender.com/api/landings/id/${id}`).then(res => res.json()).then(res => setAsteroid(res.landings[0]))
    }, [])

    return (<>
        <Header />
        <div className="detail flex justify-center bg-background-purple p-10 w-full">
            <div className="text-gray-200 flex flex-col gap-3 text-center">
                <p className="text-fuchsia-500 text-6xl">{asteroid.name}</p>
                <p className="text-2xl">Id: {asteroid.id}</p>
                <p className="text-2xl">Class: {asteroid.recclass}</p>
                <p className="text-2xl">Mass: {asteroid.mass}</p>
                <p className="text-2xl">Year: {asteroid.year}</p>
                <p className="text-2xl">Latitude: {asteroid.reclat}</p>
                <p className="text-2xl">Longitude: {asteroid.reclong}</p>
                <div className="flex justify-center gap-10 mt-3">
                    <LandingButton fromDetail={true} url={`/landings/update/${asteroid.id}`} asteroid={asteroid}/>
                    <LandingButton fromDetail={true} isDeleteBtn={true} asteroid={asteroid} />
                </div>
            </div>
        </div>
    </>)
}