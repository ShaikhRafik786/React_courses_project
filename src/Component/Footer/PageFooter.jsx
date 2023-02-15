import React from "react";
import "./PageFooter.css";

// import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <div className="main">
      <h1>
        <input type="text" placeholder="Your E-mail" className="input" />
        <button className="bt">Subscribe Now!</button>
      </h1>
      <br />
      <h1>THE SIDE OF EXALTECHS SOFTWARE COMPANYS</h1>
      <br />
      <div className="c1">
        <h2>SERVICES</h2>
        <br />
        <h4>Websites</h4>
        <h4>Social Media</h4>
        <h4>Branding</h4>
        <h4>Offline</h4>
      </div>
      <div className="c2">
        <h2>ABOUT US</h2>
        <br />
        <h4>Our Projects</h4>
        <h4>Careers</h4>
        <h4>Team</h4>
        <h4>Benefits</h4>
      </div>
      <div className="c3">
        <h2>LEGAL</h2>
        <br />
        <h4>Term & Conditions</h4>
        <h4>Privacy Policy</h4>
        <h4>Terms of use</h4>
        <h4>Details user</h4>
      </div>
      <div className="c4">
        <h2>CONTACTS</h2>
        <br />
        <h4>ExalTechs Support </h4>
        <h4>Course Contact</h4>
        <h4>software info</h4>
        <h4>Suport Request</h4>
      </div>
      <br />
      <div>
        <h3 className="c4">All Rights @Reserved Exaltechs 2022</h3>
      </div>
      <img
        className="ig"
        src="https://media.nngroup.com/media/editor/2019/01/16/clarity.png "
        alt=""
      />
    </div>
  );
};

export default Footer;
