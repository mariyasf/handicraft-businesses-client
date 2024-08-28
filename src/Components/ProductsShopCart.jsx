import React from 'react';
import { BiSolidLike } from 'react-icons/bi';
import { BsCartCheck } from 'react-icons/bs';
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { saveToLocalStorage } from '../Utili/LocalStorage';
import { toast, ToastContainer } from 'react-toastify';
import UseAuth from '../Hooks/UseAuth';

const ProductsShopCart = ({ data }) => {
    const { user } = UseAuth();

    const {
        _id,
        productName,
        image,
        description,
        materialsUsed,
        craftingMethods,
        numberOfProducts,
        rating,
        price
    } = data

    const slug = productName.toLowerCase().replace(/\s+/g, '_');
   

    const handleFavList = (data) => {
        if (user?.email) {
            saveToLocalStorage(data);
        }
        else {
            toast.error('Login Please')
        }
    }

    return (
        <div>
            <ToastContainer />
            <div className='bg-base-200 p-2 rounded-xl shadow-sm border font-Poppins'>

                <div className='relative'>

                    <img src={image} alt={productName}
                        className='w-full h-[280px] object-cover object-top' />


                    <div className='flex flex-col gap-2 justify-end right-0 px-2  absolute bottom-44'>
                        <button
                            onClick={() => handleFavList(data)}
                            className=' text-xl cursor-pointer p-2 rounded-btn bg-base-200 hover:bg-[#fac056] hover:text-white'>
                            <FaHeart className='shadow-2xl' />
                        </button>

                        <button
                            className=' text-xl cursor-pointer p-2 rounded-btn bg-base-200 hover:bg-[#fac056] hover:text-white'>
                            <BiSolidLike className='shadow-2xl' />
                        </button>
                    </div>
                </div>

                <div className='px-2 space-y-2 pt-2'>
                    <h3 className='text-xl font-bold'>{productName}</h3>
                    <div className='flex flex-row md:flex-row justify-between'>
                        <p className='text-lg text-gray-600'>
                            $ <span>{price}</span>
                        </p>
                        <p className='flex items-center gap-2'>
                            <FaStar className='text-[#fac056]' />
                            {rating}
                        </p>


                    </div>
                    <Link to={`/products-details/${slug}/${_id}`}>
                        <button className='border bg-[#fac056]  p-2 rounded-md text-sm
                      hover:text-white flex gap-2 items-center'
                        >
                            
                            Details
                        </button>
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default ProductsShopCart;