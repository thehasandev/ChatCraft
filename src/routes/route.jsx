import { createBrowserRouter } from 'react-router-dom';

import Home from "../pages/home/Home"
import Registration from "../pages/registration/Registration"
import Login from "../pages/login/Login"
import Error from "../pages/error/Error"
import Forgot from '../pages/forgot/Forgot';
import RootLayouts from '../components/RootLayouts';
import Message from '../pages/messege/Message';
import Notification from '../pages/notification/Notification';

const route = createBrowserRouter([
    {
        path: "/home",
        element:<RootLayouts/>,
        children: [
            {
              path: "/home/home",
              element: <Home/>,
            },
            {
              path: "/home/message",
              element: <Message/>,
            },
            {
              path: "/home/notification",
              element: <Notification/>,
            },
          ],
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