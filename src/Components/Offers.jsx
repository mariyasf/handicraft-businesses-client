import React from 'react';
import { Link } from 'react-router-dom';

const Offers = () => {
    return (
        <div className='mt-10 max-w-[1240px] mx-auto px-5 lg:px-0 flex flex-col lg:flex-row justify-between'>
            <div className='flex-1'>
                <video
                    className='h-full w-full'
                    autoPlay
                    loop
                    muted
                    src="/Images/offer.mp4"></video>

            </div>
            <div className="flex-1 bg-base-200 flex  flex-col items-center justify-center
                      p-10 space-y-5 text-center">
                <h2 className="font-Rancho text-[#421b01] text-3xl 
                    lg:text-3xl font-bold">Special Offer!</h2>
                <h2 className="font-Cormorrant text-3xl 
                    lg:text-5xl font-bold">
                    Get <span className="font-Poppins text-[#fac056]"> 40%</span> Discount during our Summer Craft Festival!

                </h2>
                <Link>
                    <button className="btn font-Poppins bg-transparent border-2 border-[#fac056]
                        hover:border-none hover:bg-[#fac056] hover:text-white">Shop Now</button>
                </Link>
            </div>
        </div>
    );
};

export default Offers;