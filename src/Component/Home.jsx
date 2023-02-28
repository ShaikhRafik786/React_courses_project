import React from 'react';
import Courses from './Courses';
import Navigation from './Navigation';
import Marque from './Marque';
import Footer from './Footer/PageFooter';
const Home = () => {
    return (
        <div>
           <Navigation/>
           <Marque/>
            <Courses/>
           <Footer/> 
        </div>
    );
};

export default Home;