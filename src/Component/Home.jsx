import React from 'react';
import Courses from './Courses';
import MyCarousel from './MyCarousel';
import Navigation from './Navigation';
import Footer from './Footer/PageFooter';
const Home = () => {
    return (
        <div>
           <Navigation/>
           <MyCarousel/> 
           <Courses/>
           <Footer/>
        </div>
    );
};

export default Home;