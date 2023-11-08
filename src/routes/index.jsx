import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../page/Login";
import Register from "../page/Register";
import Home from "../page/Home";
import Rooms from "../page/Rooms/Rooms";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <Home/>,  
            },
            {
                path: 'rooms',
                element: <Rooms/>,  
            }
        ],
    },

    {
        path: '/login',
        element: <Login/>,  
    },
    {
        path: '/register',
        element: <Register/>,  
    },
]);

export default routes;