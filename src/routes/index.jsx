import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../page/Login";
import Register from "../page/Register";
import Home from "../page/Home";
import Rooms from "../page/Rooms/Rooms";
import Details from "../components/Details";
import ErrorPage from "../page/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import MyBookings from "../page/MyBookings/MyBookings";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <Home/>,  
            },
            {
                path: 'services',
                element: <Rooms/>,  
            },
            {
                path: 'services/:id',
                element: <PrivateRoute><Details/></PrivateRoute>,  
            },
            {
                path: 'bookings',
                element: <MyBookings/>,  
            },

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