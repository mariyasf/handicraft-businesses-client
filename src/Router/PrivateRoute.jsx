import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import { useLocation } from 'react-router-dom';

const PrivateRoute = () => {
    const { user, loding } = UseAuth();
    const location = useLocation();
    // console.log(location.pathname);


    if (user)
        return children;

    return (
        <Navigate state={location.pathname} to={'/login'}></Navigate>
    );
};

export default PrivateRoute;