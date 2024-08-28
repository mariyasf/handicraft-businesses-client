import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import ProductsShopCart from '../../Components/ProductsShopCart';

const Shop = () => {
    const { loding } = UseAuth();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/shop`,)
            setProducts(data)
        }
        getData();
    }, []);

    return (
        <div className='max-w-[1240px] mx-auto  px-5 lg:p-0'>
            <h1 className="text-3xl pt-40 pb-10">List Products</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
                {
                    products.map(prod => (
                        <ProductsShopCart key={prod._id} data={prod} />
                    ))
                }
            </div>
        </div>
    );
};

export default Shop;