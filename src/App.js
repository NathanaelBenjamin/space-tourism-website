import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/HOME/Home";
import Destination from "./Pages/DESTINATIONS/Destination";
import Crew from "./Pages/CREW/Crew";
import Technology from "./Pages/TECHNOLOGY/Technology";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path='/destination' element ={<Destination />}>Destination</Route>
        <Route path='/crew' element={<Crew />}></Route>
        <Route path='/technology' element={<Technology />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App