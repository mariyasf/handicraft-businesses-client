import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import UseAuth from '../../Hooks/UseAuth';
import axios from 'axios';
import IteamCart from '../../Components/IteamCart';

const OrderList = () => {
    const { user } = UseAuth();
    const [iteams, setItems] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/order/${user?.email}`,)
            setItems(data)
        }
        getData();
    }, []);

    return (
        <div className='max-w-[1240px] mx-auto px-5 lg:px-0'>
            <Helmet>
                <title>My Cart</title>
            </Helmet>

            <div className="overflow-x-auto text-center pt-28 font-Poppins">
                <table className="table text-center">
                    <thead className="text-xl">
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Qantity</th>
                            <th>Price</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            iteams.map((prod, ind) =>
                                <IteamCart key={prod._id} data={prod} />
                            )
                        }
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default OrderList;