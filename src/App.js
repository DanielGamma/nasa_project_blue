import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";


import HomePage from "./pages/HomePage/HomePage";
import MapPage from "./pages/MapPage/MapPage";
import LandingsPage from "./pages/LandingsPage/LandingsPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import FormPage from "./pages/FormPage/FormPage";
import FavouritesPage from "./pages/FavouritesPage/FavouritesPage";

export const AsteroidContext = createContext()

function App() {

  const [asteroids, setAsteroids] = useState([])

  return (
    <>

      <BrowserRouter>
        <AsteroidContext.Provider value={{setAsteroids, asteroids}}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="landings" element={<MapPage />} />
            <Route path="landings/list" element={<LandingsPage />} />
            <Route path="landings/details/:id" element={<DetailsPage />} />
            <Route path="landings/create" element={<FormPage />} />
            <Route path="landings/update/:id" element={<FormPage />} />
            <Route path="favourites" element={<FavouritesPage />} />
          </Routes>
        </AsteroidContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
