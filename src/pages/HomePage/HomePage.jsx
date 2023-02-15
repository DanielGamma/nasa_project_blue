import AstroPicDay from "../../components/Astro/AstroPicDay"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"

export default function HomePage({astro}) {
    return (
        <>
            <Header />
            <AstroPicDay astro={astro}/>
            <Footer />
        </>
    )

}