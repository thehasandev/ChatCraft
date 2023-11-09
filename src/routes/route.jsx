import { createBrowserRouter } from 'react-router-dom';

import Home from "../pages/home/Home"
import Registration from "../pages/registration/Registration"
import Login from "../pages/login/Login"
import Error from "../pages/error/Error"

const route = createBrowserRouter([
    {
        path: "/sadf",
        element:<Home/>,
    }, 
    {
        path: "/",
        element:<Registration/>,
    }, 
    {
        path: "/asdf",
        element:<Login/>,
    }, 
    {
        path: "/*",
        element:<Error/>,
    }, 
  ]);

export default route