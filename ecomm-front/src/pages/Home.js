import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import Footer from '../components/Footer/Footer';
import Newsletter from '../components/Newsletter/Newsletter';
import Promises from '../components/Promises/Promises';

const Home = () => {
    return (
        <>
            <Carousel />
            <Promises />
            <Newsletter />
            <Footer />
        </>
    )
};

export default Home
