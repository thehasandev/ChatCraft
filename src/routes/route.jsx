import { createBrowserRouter } from 'react-router-dom';

import Home from "../pages/home/Home"
import Registration from "../pages/registration/Registration"
import Login from "../pages/login/Login"
import Error from "../pages/error/Error"
import Forgot from '../pages/forgot/Forgot';

const route = createBrowserRouter([
    {
        path: "/home",
        element:<Home/>,
    }, 
    {
        path: "/sing-up",
        element:<Registration/>,
    }, 
    {
        path: "/",
        element:<Login/>,
    }, 
    {
        path: "/forgot",
        element:<Forgot/>,
    }, 
    {
        path: "/*",
        element:<Error/>,
    }, 
  ]);

export default route