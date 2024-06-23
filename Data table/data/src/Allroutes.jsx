import React from "react";
import { Route, Routes } from "react-router-dom";
import Editproduct from "./Components/EditProduct";
import ProductList from "./Components/ProductList";
import Addproduct from "./Components/AddProduct";
import ProductDetails from "./Components/ProductDetails";


function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductList />}></Route>
        <Route path="/addproduct" element={<Addproduct />}></Route>
        <Route path="/edit/:id" element={<Editproduct/>} ></Route>
        <Route path="/productdetails/:id" element={<ProductDetails/>}></Route>
      </Routes>
    </div>
  );
}

export default Allroutes;
