import React from 'react';
import { Helmet } from 'react-helmet';
import HomeBanner from '../../Components/HomeBanner';
import Service from '../../Components/Service';
import MostProducts from '../../Components/MostProducts';
import Offers from '../../Components/Offers';
import ClientQuestion from '../../Components/ClientQuestion';
import Testimonial from '../../Components/Testimonial';
import TodayDeals from '../../Components/TodayDeals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <HomeBanner />
            <Service />
            <TodayDeals />

            <Offers />

            <MostProducts />
            <Testimonial />
            <ClientQuestion />


        </div>
    );
};

export default Home;