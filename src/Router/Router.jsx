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

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <App />,
            },
            {
                path: "/profile",
                element:
                    <PrivateRoute><UserProfile /></PrivateRoute>
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