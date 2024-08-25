import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import { Navigate, useLocation } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';

const PrivateRoute = ({ children }) => {
    const { user, loding } = UseAuth();
    const location = useLocation();

    if (loding) {
        return <div className="flex justify-center items-center h-screen">
            <ScaleLoader color="#c09d73" />
        </div>;
    }
    if (user)
        return children;

    return (
        <Navigate state={location.pathname} to={'/login'}></Navigate>
    );
};

export default PrivateRoute;