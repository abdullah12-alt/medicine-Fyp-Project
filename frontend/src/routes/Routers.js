import { Routes, Route, Navigate } from 'react-router-dom'
import React from 'react'
import Home from '../pages/Home'
import AllMedicine from '../pages/AllMedicine'
import MedDetails from '../pages/MedicineDetails'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Register from '../pages/Register'

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/meds" element={<AllMedicine/>} />
      <Route path="/meds/:id" element={<MedDetails />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}

export default Routers
