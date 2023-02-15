import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState} from "react";
import { useEffect } from "react";


import HomePage from "./pages/HomePage/HomePage";
import MapPage from "./pages/MapPage/MapPage";
import LandingsPage from "./pages/LandingsPage/LandingsPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import FormPage from "./pages/FormPage/FormPage";
import FavouritesPage from "./pages/FavouritesPage/FavouritesPage";

 function App() {
  const[astro,setAstro] = useState(null)
  const pedirAstro = async () =>{
        const dayAstro = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`).then(res => res.json())
      
        setAstro(dayAstro)
       
  }
  useEffect(() => {
		pedirAstro()
		}, []);

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage astro={astro} />} />
          <Route path="landings" element={<MapPage />} />
          <Route path="landings/list" element={<LandingsPage />} />
          <Route path="landings/details/:id" element={<DetailsPage />} />
          <Route path="landings/create" element={<FormPage />} />
          <Route path="landings/update/:id" element={<FormPage />} />
          <Route path="favourites" element={<FavouritesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
