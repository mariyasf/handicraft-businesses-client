import {
    createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "../Pages/Error/ErrorPage";
import Root from "../Layouts/Root";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import UserProfile from "../Pages/UserProfile/UserProfile";
import PrivateRoute from "./PrivateRoute";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import ProductsDetails from "../Pages/Shop/ProductsDetails";
import OrderList from "../Pages/OrderList/OrderList";

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
                path: "/shop",
                element:
                    <Shop />
                ,
            },
            {
                path: `/products-details/:slug/:id`,
                element: <ProductsDetails />,
                loader: ({ params }) =>
                    fetch(`${import.meta.env.VITE_API_URL}/shop/${params.id}`)
            },
            {
                path: '/myOrder',
                element: <PrivateRoute><OrderList /></PrivateRoute>
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