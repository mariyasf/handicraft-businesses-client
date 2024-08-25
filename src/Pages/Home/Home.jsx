import React from 'react';
import { Helmet } from 'react-helmet';
import HomeBanner from '../../Components/HomeBanner';
import Service from '../../Components/Service';
import MostProducts from '../../Components/MostProducts';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <HomeBanner />
            <Service />
            <MostProducts />


        </div>
    );
};

export default Home;