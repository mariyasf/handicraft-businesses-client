import {
    createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "../Pages/Error/ErrorPage";
import Root from "../Layouts/Root";
import App from "../App";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import UserProfile from "../Pages/UserProfile/UserProfile";
import PrivateRoute from "./PrivateRoute";
import Home from "../Pages/Home/Home";
import Shoplayout from '../Components/shoplayout';
import Detail from "../Pages/Shop/Detail";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/profile",
                element:
                    <PrivateRoute><UserProfile /></PrivateRoute>
                ,
            },
            {
                path: "/Shop",
                element:
                   <Shoplayout />
                ,
            },
            {
                path: `/:slug`,
                element:
                   <Detail />
                ,
            },
        ]
    },
    {
        path: "/login",
        element: <Login />,
    },
    
    {
        path: "/register",
        element: <Register />,
    },
]);

export default router;