import { useContext, useState } from "react"
import { useEffect } from "react"
import { AsteroidContext } from "../../App"
import LandingsList from "../../components/LandingsList/LandingsList"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
export default function FavouritesPage() {


    const { favAstro, setFavAstro } = useContext(AsteroidContext)
    const [printFav, setPrintFav] = useState(false)
    useEffect(() => {
        if (favAstro) {
            Promise.all(favAstro.map(id => fetch(`https://nasa-api-us5g.onrender.com/api/landings/id/${id}`).then(res => res.json()).then(res => res.landings[0]))).then(res => {
                console.log(res)
                return setPrintFav(res)
            })
        }
    }, [])


    return (<>
        <Header />
        <div className="bg-background-purple flex flex-col justify-center items-center min-h-[80vh] p-10">
            <h1 className="text-center text-white font-black text-xl mb-10">Favoritos</h1>
            {
                !printFav ? <p>No tienes Favoritos</p> : <LandingsList printFav={printFav} />
            }
        </div>
        <Footer />
    </>)
}