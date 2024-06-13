// src/routes.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
import Products from "../pages/Products";
import ShoppingCartPage from "../pages/ShoppingCartPage";


const AppRoutes: React.FC = () => (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
        <Route path="*" element={<h1>not found</h1>}/>
      </Routes>
    </Router>
  </>
);

export default AppRoutes;
