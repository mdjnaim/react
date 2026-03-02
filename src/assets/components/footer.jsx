import React from 'react'
import './footer.css';
import Logo from '../Logo.svg';
import { BsTwitter } from 'react-icons/bs';
import {SiLinkedin} from 'react-icons/si';
import {FaFacebookF} from 'react-icons/fa';
import { BsYoutube } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="footer-wrapper">
        <div className="footer-section-one">
            <div className="footer-logo-container">
                <img src={Logo} alt="" />
            </div>
            <div className="footer-icons">
                <BsTwitter />
                <SiLinkedin />
                <FaFacebookF />
                <BsYoutube />
            </div>
            <div className="footer-section-two">
                <div className="footer-section-columns">
                    <span>Quality</span>
                    <span>Help</span>
                    <span>Contact</span>
                    <span>Work</span>
                    <span>Review</span>
                </div>
                <div className="footer-section-columns">
                    <span>555-666-7777</span>
                    <span>hello@company.com</span>
                    <span>press@food.com</span>
                    <span>contact@food.com</span>
                </div>
                <div className="footer-section-columns">
                    <span>Terms & Conditions</span>
                    <span>Privacy Policy</span>
                    <span>Contact Us</span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer