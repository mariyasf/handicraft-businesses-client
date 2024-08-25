import React from 'react';
import { Helmet } from 'react-helmet';
import HomeBanner from '../../Components/HomeBanner';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <HomeBanner />

        </div>
    );
};

export default Home;