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
import Register from './auth/Register'
import UserProfile from './pages/user/UserProfile'
import UserSetting from './pages/user/UserSetting'
import IncomeHistory from './pages/user/IncomeHistory'

const RouterPage = () => {
  return (
    <div>
      <Routes>
        <Route path={Routers.LOGIN} element={<Login/>} />
        <Route path={Routers.REGISTER} element={<Register/>} />
        <Route element={<MainLayout />}>
          <Route path={Routers.HOME} element={<Home />} />
          
        </Route>
        <Route path="*" element={<PageNotFound/>} />

        <Route element={<DashboardLayout />}>
          <Route path={UserRouters.DASHBOARD} element={<UserDashboard />} />
          <Route path={UserRouters.INCOME_HISTORY} element={<IncomeHistory />} />

          <Route path={UserRouters.PROFILE} element={<UserProfile />} />
          <Route path={UserRouters.SETTINGS} element={<UserSetting />} />
          <Route path={AdminRouters.DASHBOARD} element={<AdminDashboard />} />
        </Route>


      </Routes>
    </div>
  )
}

export default RouterPage