import React from "react"
import { Redirect } from "react-router-dom"

//Dashboard
import Dashboard from "../pages/Dashboard/index";
import Projects from '../pages/Projects/index'
import Invoices from '../pages/Invoices/index'

// Authentication related pages
import userProfile from "../pages/Authentication/user-profile"
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"

//Utility page
import Homepage from "../pages/Homepage"


const userRoutes = [

  //dashboard
  { path: "/dashboard", component: Dashboard },

  //profile
  { path: "/profile", component: userProfile },
  
  { path: "/projects", component: Projects },
  { path: "/Invoices", component: Invoices },
  // { path: "/projects", component: Projects },
  // { path: "/projects", component: Projects },
  // { path: "/projects", component: Projects },
  // { path: "/projects", component: Projects },

  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> }
]

const authRoutes = [
  //authencation page
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },

  //Utility page
  { path: "/homepage", component: Homepage },
  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/homepage" /> }
]

export { userRoutes, authRoutes }
