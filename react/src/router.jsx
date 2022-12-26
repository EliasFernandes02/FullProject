import {createBrowserRouter, Navigate} from "react-router-dom";
import Login from "./views/Login";
import SingUp from "./views/SingUp";
import Users from "./views/Users";
import Notfound from "./views/Notfound";
import DefaultLayout from "./Components/DefaultLayout";
import GuestLayout from "./Components/GuestLayout";
import Dashboard from "./views/Dashboard";

 const router = createBrowserRouter([
     {
         path:'/',
         element:<DefaultLayout/>,
         children:[
             {
                 path:'/',
                 element:<Navigate to="/users"/>
             },
             {
                 path:'/users',
                 element:<Users/>
             },
             {
                 path:'/dashboard',
                 element:<Dashboard/>
             },

         ]
     },
     {
         path:'/',
         element:<GuestLayout/>,
         children:
         [
             {
                 path:'/login',
                 element:<Login/>
             },
             {
                 path:'/singup',
                 element:<SingUp/>
             },

         ]
     },
     {
         path:'*',
         element:<Notfound/>
     }

 ])

export default router;
