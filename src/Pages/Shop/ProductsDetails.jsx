import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { SiSitepoint } from 'react-icons/si';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';

const ProductsDetails = () => {
    const { user } = UseAuth();
    const axiosSecure = UseAxiosSecure();

    const data = useLoaderData();
    const [quantity, setQuantity] = useState(1);
    // const dispatch = useDispatch();

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
    } = data || {};

    const handleMinusQuantity = () => {
        setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
    const handlePlusQuantity = () => {
        setQuantity(quantity + 1);
    }

    const handleAddToCart = async (e) => {
        e.preventDefault();

        const cartItem = {
            productId: _id,
            productName,
            image,
            price,
            quantity,
            userEmail: user.email

        };

        // console.log(cartItem);
        // console.log(typeof (_id), typeof (cartItem.productId));

        try {
            const { data } = await axiosSecure.post(
                `/order`, cartItem)

            console.log(data);

            if (data.insertedId) {
                Swal.fire({
                    title: "Do you want to confirm the order?",
                    showCancelButton: true,
                    confirmButtonText: "Confirm",
                })
                    .then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire("Confirm!", "", "success");
                        }
                    });
            }

        }
        catch (error) {
            console.log(error);
        }

    }

    return (
        <div className='max-w-[1240px] mx-auto px-5 lg:px-0'>
            <Helmet>
                <title>{productName}</title>
            </Helmet>

            <h2 className='text-3xl pt-40 font-Poppins'>PRODUCT DETAIL</h2>
            <div className='flex flex-col lg:flex-row gap-5 my-5'>
                <div className='flex-1'>
                    <img src={image} alt={productName} className='w-full h-[500px]' />
                </div>
                <div className='flex-1  space-y-3 font-Poppins'>
                    <p className='uppercase'>
                        <Link to={"/shop"}>
                            <span className='cursor-pointer'>shop</span > </Link> / {productName}</p>
                    <h1 className='text-3xl uppercase font-medium'>{productName}</h1>
                    <div className='flex gap-10 lg:gap-20'>
                        <p className='text-xl'>
                            ${price}
                        </p>
                        <p className='flex items-center gap-2'>
                            <FaStar className='text-[#fac056]' />
                            {rating}
                        </p>
                    </div>


                    <form onSubmit={handleAddToCart}
                        className='flex flex-col md:flex-row gap-5'>
                        <div className='flex items-center'>
                            <button type='button' className='bg-gray-100 h-full w-12 text-xl  flex justify-center items-center' onClick={handleMinusQuantity}>-</button>
                            <span className='bg-gray-200 h-full w-12  text-xl flex justify-center items-center'>{quantity}</span>
                            <button type='button' className='bg-gray-100 h-full w-12  text-xl flex justify-center items-center' onClick={handlePlusQuantity}>+</button>
                        </div>
                        <button
                            type='submit'
                            className='bg-slate-900 text-white px-7 py-3  shadow-2xl'
                        >
                            Add To Cart
                        </button>
                    </form>


                    <p className='text-gray-500 border-b-2 pb-2'>
                        {description}
                    </p>
                    <div>
                        <p className=' font-medium' >Available Products: {numberOfProducts > 0 ? 'In stock' : 'Out of stock'}</p>
                        <h2><span className='font-medium'>Materials Used</span>:
                            {
                                materialsUsed.map((prod, ind) =>
                                    <span key={ind} className='px-2 text-lg text-[#cd6f2e]'>{prod},</span>
                                )

                            }
                        </h2>
                        <h2 className='pb-2 pt-2 font-medium'>Crafting Methods:  <span className='text-gray-500 font-normal'>{craftingMethods}</span></h2>

                        <div className='border-t-2 pt-2'>
                            {
                                price > 50 ?
                                    <div>
                                        <p className='flex items-center gap-5'><SiSitepoint /> Free Shipping on Orders over $50</p>
                                        <p className='flex items-center gap-5'><SiSitepoint />No-Risk Money Back Guarantee!</p>
                                        <p className='flex items-center gap-5'><SiSitepoint />No Hassle Refunds</p>
                                    </div>
                                    :
                                    <div>
                                        <h2 className='flex items-center gap-5'><SiSitepoint />Shipping Cost 100tk</h2>
                                        <p className='flex items-center gap-5'><SiSitepoint />No-Risk Money Back Guarantee!</p>
                                        <p className='flex items-center gap-5'><SiSitepoint />No Hassle Refunds</p>
                                    </div>
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProductsDetails;