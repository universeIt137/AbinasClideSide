import React from 'react';
import './home.css'; 
import OurServices from './OurServices';
import NewsAndArticles from './NewsAndArticles';
import QuickLinks from './QuickLinks';
import HeaderSlider from '../Shared/HeaderSlider';
import Header from '../Shared/Header';
import Footer from '../Shared/FooterSection';


const Home = () => {
    return (
        <div className='relative mx-auto'>
            <HeaderSlider></HeaderSlider>
            <OurServices></OurServices>
            <NewsAndArticles></NewsAndArticles>
            {/* <QuickLinks></QuickLinks> */}
            <div className='absolute top-0 left-0 right-0 mx-auto text-white '>
                    <Header ></Header>
                </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;