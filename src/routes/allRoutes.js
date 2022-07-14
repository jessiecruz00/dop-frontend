import React from "react"
import { Redirect } from "react-router-dom"

//Dashboard
import Dashboard from "../pages/Dashboard/index";
import Projects from '../pages/Projects/index'
import ProjectsMachines from '../pages/Projects/machines'
import AddMachine from '../pages/Projects/addMachine'
import MachineEdit from '../pages/Projects/editMachine'
import ProjectsEdit from '../pages/Projects/edit'
import Invoices from '../pages/Invoices/index'
import Reports from '../pages/Reports/index'
import NewProject from '../pages/NewProject/index'
import Settings from '../pages/Settings/index'
import NewCoustomer from '../pages/NewCoustomer/index'
import Customers from '../pages/Customers/index'
import CustomerDetail from '../pages/Customers/detail.js'
import CustomerEdit from '../pages/Customers/edit.js'

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
  { path: "/projects/machines/:id", component: ProjectsMachines },
  { path: "/projects/addMachine", component: AddMachine },
  { path: "/projects/machines/edit/:id", component: MachineEdit },
  { path: "/projects/edit/:id", component: ProjectsEdit },
  { path: "/Invoices", component: Invoices },
  { path: "/reports", component: Reports },
  { path: "/newProject", component: NewProject },
  { path: "/settings", component: Settings },
  { path: "/newCustomer", component: NewCoustomer },
  { path: "/customers", component: Customers },
  { path: "/customers/detail/:id", component: CustomerDetail },
  { path: "/customers/edit/:id", component: CustomerEdit },

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
