import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import HomePage from "./components/HomePage/HomePage";
import MapPage from "./components/MapPage/MapPage";
import LandingsPage from "./components/LandingsPage/LandingsPage";
import DetailsPage from "./components/DetailsPage/DetailsPage";
import FormPage from "./components/FormPage/FormPage";
import FavouritesPage from "./components/FavouritesPage/FavouritesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/landings" element={<MapPage />} />
          <Route path="/landings/list" element={<LandingsPage />} />
          <Route path="/landings/details/:id" element={<DetailsPage />} />
          <Route path="/landings/create" element={<FormPage />} />
          <Route path="/landings/update/:id" element={<FormPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
