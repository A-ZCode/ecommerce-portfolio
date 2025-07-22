import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import ItemView from "./pages/ItemView";
import ProductPage from "./pages/ProductPage";

export default function App() {
  return (
    <Routes>
      {/* Main layout routes */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<ItemView />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Route>
      
      {/* Standalone checkout (no layout) */}
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}