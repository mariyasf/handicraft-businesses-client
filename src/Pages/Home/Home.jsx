import React from 'react';
import { Helmet } from 'react-helmet';
import HomeBanner from '../../Components/HomeBanner';
import Service from '../../Components/Service';
import MostProducts from '../../Components/MostProducts';
import Offers from '../../Components/Offers';
import ClientQuestion from '../../Components/ClientQuestion';
import Testimonial from '../../Components/Testimonial';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <HomeBanner />
            <Service />
            <MostProducts />
            <Offers />

            <Testimonial />
            <ClientQuestion />


        </div>
    );
};

export default Home;