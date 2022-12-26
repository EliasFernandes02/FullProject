import {createBrowserRouter} from "react-router-dom";
import Login from "./views/Login";
import SingUp from "./views/SingUp";
import Users from "./views/Users";
import Notfound from "./views/Notfound";

 const router = createBrowserRouter([
     {
         path:'/login',
         element:<Login/>
     },
     {
         path:'/singup',
         element:<SingUp/>
     },
     {
         path:'/users',
         element:<Users/>
     },
     {
         path:'*',
         element:<Notfound/>
     }

 ])

export default router;
