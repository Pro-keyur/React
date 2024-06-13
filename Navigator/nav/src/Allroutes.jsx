import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import { Project } from './pages/Project';
import Login from './pages/Login';
import Notfound from './pages/Notfound';
import PrivateRoutes from './pages/PrivateRoutes';



function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/products' element={
          <PrivateRoutes>
          <Products/>
          </PrivateRoutes>
          }></Route>
        <Route path='/project/:id' element={<Project/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/logout' element={<h1>you are logout</h1>}></Route>
        <Route path='/*' element={<Notfound/>}></Route>
      </Routes>
    </div>
  )
}

export default Allroutes
