import React from 'react';
import { deleteItemFromLocalStorage, getFromLocalStorage } from '../../Utili/LocalStorage';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

const FavList = () => {
    const favListData = getFromLocalStorage('FavList');

    const handleDeleteFavList = (data) => {
        deleteItemFromLocalStorage(data);
    }

    return (
        <div className='pt-10 max-w-[1240px] mx-auto px-5 lg:px-0'>

            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 pt-20 pb-10'>
                {
                    favListData.map(data =>
                        <div
                            key={data._id}
                            className='bg-base-200 p-2 rounded-xl shadow-sm border font-Poppins'>

                            <div className='relative'>

                                <img src={data.image} alt={data.productName}
                                    className='w-full h-[280px] object-cover object-top' />

                                <div className='flex flex-col gap-2 justify-end right-0 px-2  absolute bottom-60'>
                                    <button
                                        onClick={() => handleDeleteFavList(data)}
                                        className=' text-xl cursor-pointer p-2 rounded-btn bg-base-200 hover:bg-[#fac056] hover:text-white'>
                                        <ImCross className='shadow-2xl' />
                                    </button>


                                </div>

                            </div>

                            <div className='px-2 space-y-2 pt-2'>
                                <h3 className='text-xl font-bold'>{data.productName}</h3>
                                <div className='flex flex-row md:flex-row justify-between'>
                                    <p className='text-lg text-gray-600'>
                                        $ <span>{data.price}</span>
                                    </p>
                                    <p className='flex items-center gap-2'>
                                        <FaStar className='text-[#fac056]' />
                                        {data.rating}
                                    </p>
                                </div>

                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default FavList;