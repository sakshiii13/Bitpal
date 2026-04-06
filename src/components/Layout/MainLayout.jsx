import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout