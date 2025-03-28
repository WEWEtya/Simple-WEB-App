import React from "react";
import "../styles/ContactUs/contactUs.css";

import { FaRegEnvelope } from 'react-icons/fa'; 
import { FiPhone } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";

const ContactUs = () => {
    return (
        <div className="contact_us_container">
            <div className="contact_us_header">
                <h1>Contact Us</h1>
                <p>Lorem ipsum dolor sit amet, consecteutur adipiscing elit.</p>
            </div>

            <div className="contact_us_info">
                <div className="contact_us_item">
                    <FaRegEnvelope className="contact_icon" />
                    <h2>Email</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.</p>
                    <a href="mailto:viktorio.sokolov06@gmail.com">RoundTable@gmail.com</a>
                </div>

                <div className="contact_us_item">
                    <FiPhone className="contact_icon" />
                    <h2>Phone</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.</p>
                    <a href="tel:+48 576 512 786">+48 576 512 786</a>
                </div>

                <div className="contact_us_item">
                    <LuMapPin className="contact_icon" />
                    <h2>Office</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.</p>
                    <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">Round Table Shops</a>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
