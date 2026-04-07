import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import { AdminRouters, Routers, UserRouters } from '../constant/router'
import MainLayout from './Layout/MainLayout'
import Login from './auth/Login'
import PageNotFound from './UI/PageNotFound'
import DashboardLayout from './Layout/DashboardLayout'
import UserDashboard from './pages/user/UserDashboard'
import AdminDashboard from './pages/admin/AdminDashboard'

const RouterPage = () => {
  return (
    <div>
      <Routes>
        <Route path={Routers.LOGIN} element={<Login/>} />
        <Route element={<MainLayout />}>
          <Route path={Routers.HOME} element={<Home />} />
          {/* <Route path={Routers.ABOUT} element={<About />} /> */}
        </Route>
        <Route path="*" element={<PageNotFound/>} />

        <Route element={<DashboardLayout />}>
          <Route path={UserRouters.DASHBOARD} element={<UserDashboard />} />
          <Route path={AdminRouters.DASHBOARD} element={<AdminDashboard />} />
        </Route>


      </Routes>
    </div>
  )
}

export default RouterPage