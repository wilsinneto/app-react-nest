import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Products from "./pages/products";
import Reports from "./pages/reports";

export const RouteList = () => {
  return <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  </BrowserRouter>;
};
