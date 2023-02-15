import AstroPicDay from "../../components/Astro/AstroPicDay"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import { useState, useEffect } from "react"


export default function HomePage() {

    const [astro, setAstro] = useState(false)
    // const pedirAstro = async () => {
    //     const dayAstro = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`).then(res => res.json())
    //     setAstro(dayAstro)
    // }
    useEffect(() => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`).then(res => res.json()).then(res => setAstro(res))
    }, []);

    return (
        <>
            <Header />
            <AstroPicDay astro={astro} />
            <Footer />
        </>
    )

}