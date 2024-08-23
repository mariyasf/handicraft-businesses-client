import React from 'react';
import { Helmet } from 'react-helmet';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <Helmet>
                <title>Page Not Found</title>
            </Helmet>

            <button className='bg-[#fac056] hover:bg-[#f2b749]
             text-xl font-Poppins text-white w-2/6
             p-4 rounded-xl '>
                <Link
                    to={"/"}
                    className='flex gap-4 text-center justify-center items-center'>
                    <span><FaArrowLeft /></span>
                    Back To The Home
                </Link>
            </button>
            <img src="/public/Images/error.gif" alt="" />
        </div>
    );
};

export default ErrorPage;