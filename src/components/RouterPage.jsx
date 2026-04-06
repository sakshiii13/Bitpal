import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import { Routers } from '../constant/router'
import MainLayout from './Layout/MainLayout'
import Login from './auth/Login'

const RouterPage = () => {
  return (
    <div>
      <Routes>
        <Route path={Routers.LOGIN} element={<Login/>} />
        <Route element={<MainLayout />}>
          <Route path={Routers.HOME} element={<Home />} />
          {/* <Route path={Routers.ABOUT} element={<About />} /> */}
        </Route>
        {/* <Route path="*" element={<PNF/>} /> */}
      </Routes>
    </div>
  )
}

export default RouterPage