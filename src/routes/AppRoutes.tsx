// src/routes.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
import Products from "../pages/Products";
import ShoppingCart from "../pages/ShoppingCart";
import Navbar from "../features/navbar/Navbar";
import Footer from "../ui/Footer";

const AppRoutes: React.FC = () => (
  <>
    <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="*" element={<h1>not found</h1>}/>
      </Routes>
    </Router>
    <Footer/>
  </>
);

export default AppRoutes;
