
import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";



export default function App() {
  

  return (
    <Routes>
      {/* Main layout routes */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
      
      {/* Standalone checkout (no layout) */}
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}
