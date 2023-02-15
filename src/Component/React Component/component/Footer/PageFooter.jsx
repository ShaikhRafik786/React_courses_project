import React from 'react';
import "./Footer.css"

// import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return (
        <div className='main'>
<img className='ig' src="photo.png" alt="" />
            <h1>
                <input type="text" placeholder='Your E-mail' className="input"/>
                <button className="bt">Subscribe Now!</button>
            </h1>
            <br />
            <br />
            <div className='c1'>
                <h2>Partnership</h2>
                <br />
                <h4>Websites</h4>
                <h4>Social Media</h4>
                <h4>Branding</h4>
            </div>
            <div className='c2'>
            <h2>About</h2>
            <br />
            <h4>Our Projects</h4>
            <h4>Careers</h4>
            <h4>Objectives</h4>
            </div>
            <div className='c3'>
            <h2>Support</h2>
            <br />
            <h4>Support Request</h4>
            <h4>Contacts</h4>
            <h4>Info</h4>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <hr />
            <div>
                <h3 className='c4'>All Rights Reserved 2022</h3>
                
            </div>
        </div>
    );
};

export default Footer;