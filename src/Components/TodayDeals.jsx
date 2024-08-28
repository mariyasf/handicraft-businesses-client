import React from 'react';
import candel_holder from '/Images/candle_holder.jpg'
import pencil_case1 from '/Images/pencil_case1.jfif'
import phone_case1 from '/Images/phone_case1.jfif'
import basket1 from '/Images/basket1.jfif'
import { FaHeart, FaLongArrowAltRight, FaRegHeart, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TodayDeals = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-10 px-5 lg:px-0'>
            <div className='space-y-2 pb-5 flex flex-col md:flex-row justify-between gap-5'>
                <div className='flex-1'>
                    <p className='text-gray-600'>
                        Today Deals
                    </p>
                    <h2 className='text-3xl  theme_title font-bold font-Rancho'>
                        Deals of the day
                    </h2>
                </div>
                <div className='flex-1 text-gray-600'>
                    <p>
                        Don't miss out on today's exclusive offers! Enjoy unbeatable discounts on our best-selling jute products and handcrafted goods. Shop now before the deals are gone!
                    </p>
                </div>
            </div>

            <div className='grid grid-rows-1 md:grid-cols-2 gap-4'>
                <div className="card md:card-side bg-base-100 rounded-none border p-1 lg:h-[250px]">
                    <figure className='md:w-1/2'>
                        <img
                            className='h-full w-full '
                            src={candel_holder}
                            alt="Album" />

                    </figure>
                    <div className='flex justify-between w-full md:w-1/2 p-4 absolute'>
                        <p className='p-1 px-[10px] rounded-[5px] font-bold text-green-600 border bg-white'>5% off</p>
                        <button className='text-white text-xl'>
                            <FaRegHeart className='shadow-2xl' />
                        </button>
                    </div>

                    <div className="card-body w-full md:w-1/2 font-Poppins">
                        <h2 className="card-title">Jute Candle Holder</h2>
                        <div className='flex justify-between'>
                            <span className='font-bold'>$25.00</span>
                            <span className='flex items-center gap-2'><FaStar className='text-[#fac056]' /> 4.5 </span>

                        </div>
                        <p className='lg:pt-5 text-gray-500'>Decorative jute candle holder that adds a cozy ambiance to any room.</p>
                        <Link to={"/shop"}>
                            <button className=' gap-2 flex items-center  rounded-lg   hover:text-[#421b01] font-bold'>Shop Now <FaLongArrowAltRight /> </button>
                        </Link>
                    </div>
                </div>
                <div className="card md:card-side bg-base-100 rounded-none border p-1 lg:h-[250px]">
                    <figure className='md:w-1/2'>
                        <img
                            className='h-full w-full '
                            src={pencil_case1}
                            alt="Album" />

                    </figure>
                    <div className='flex justify-between w-full md:w-1/2 p-4 absolute'>
                        <p className='p-1 px-[10px] rounded-[5px] font-bold text-green-600 border bg-white'>5% off</p>
                        <button className='text-white text-xl'>
                            <FaRegHeart className='shadow-2xl' />
                        </button>
                    </div>

                    <div className="card-body w-full md:w-1/2 font-Poppins">
                        <h2 className="card-title">Jute Pencil case</h2>
                        <div className='flex justify-between'>
                            <span className='font-bold'>$10.00</span>
                            <span className='flex items-center gap-2'><FaStar className='text-[#fac056]' /> 3.8 </span>

                        </div>
                        <p className='lg:pt-5 text-gray-500'>Compact and stylish jute pencil case for students and professionals.</p>
                        <Link to={"/shop"}>
                            <button className=' gap-2 flex items-center  rounded-lg   hover:text-[#421b01] font-bold'>Shop Now <FaLongArrowAltRight /> </button>
                        </Link>
                    </div>
                </div>

                <div className="card md:card-side bg-base-100 rounded-none border p-1 lg:h-[250px]">
                    <figure className='md:w-1/2'>
                        <img
                            className='h-full w-full '
                            src={phone_case1}
                            alt="Album" />

                    </figure>
                    <div className='flex justify-between w-full md:w-1/2 p-4 absolute'>
                        <p className='p-1 px-[10px] rounded-[5px] font-bold text-green-600 border bg-white'>5% off</p>
                        <button className='text-white text-xl'>
                            <FaRegHeart className='shadow-2xl' />
                        </button>
                    </div>

                    <div className="card-body w-full md:w-1/2 font-Poppins">
                        <h2 className="card-title">Jute Phone Case</h2>
                        <div className='flex justify-between'>
                            <span className='font-bold'>$12.00</span>
                            <span className='flex items-center gap-2'><FaStar className='text-[#fac056]' /> 3.7 </span>

                        </div>
                        <p className='lg:pt-5 text-gray-500'>Eco-friendly jute phone case that provides protection and style.</p>
                        <Link to={"/shop"}>
                            <button className=' gap-2 flex items-center  rounded-lg   hover:text-[#421b01] font-bold'>Shop Now <FaLongArrowAltRight /> </button>
                        </Link>
                    </div>
                </div>
                
                <div className="card md:card-side bg-base-100 rounded-none border p-1 lg:h-[250px]">
                    <figure className='md:w-1/2'>
                        <img
                            className='h-full w-full '
                            src={basket1}
                            alt="Album" />

                    </figure>
                    <div className='flex justify-between w-full md:w-1/2 p-4 absolute'>
                        <p className='p-1 px-[10px] rounded-[5px] font-bold text-green-600 border bg-white'>5% off</p>
                        <button className='text-white text-xl'>
                            <FaRegHeart className='shadow-2xl' />
                        </button>
                    </div>

                    <div className="card-body w-full md:w-1/2 font-Poppins">
                        <h2 className="card-title">Jute Storage Basket</h2>
                        <div className='flex justify-between'>
                            <span className='font-bold'>$12.00</span>
                            <span className='flex items-center gap-2'><FaStar className='text-[#fac056]' /> 3.7 </span>

                        </div>
                        <p className='lg:pt-5 text-gray-500'>Versatile jute storage basket ideal for organizing your home.</p>
                        <Link to={"/shop"}>
                            <button className=' gap-2 flex items-center  rounded-lg   hover:text-[#421b01] font-bold'>Shop Now <FaLongArrowAltRight /> </button>
                        </Link>
                    </div>
                </div>
                
                

            </div>
        </div>
    );
};

export default TodayDeals;