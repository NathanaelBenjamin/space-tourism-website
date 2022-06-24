import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Destination from "./Pages/Destination";
import Crew from "./Pages/Crew";
import Technology from "./Pages/Technology";

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