import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react"


import HomePage from "./pages/HomePage/HomePage";
import MapPage from "./pages/MapPage/MapPage";
import LandingsPage from "./pages/LandingsPage/LandingsPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import FormPage from "./pages/FormPage/FormPage";
import FavouritesPage from "./pages/FavouritesPage/FavouritesPage";

function App() {
  

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage  />} />
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
