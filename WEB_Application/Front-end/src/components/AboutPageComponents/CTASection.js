import React from "react";

import Button from './Button';
import "../../styles/AboutUs/aboutUs.css";


const CTASection = () => (
  <div className="mainSection">
    <div className="sectionLeft">
      <h1 className="heading">Shop the Best Deals Today</h1>
      <p className="description">Discover a world of quality products at great prices.</p>
      
    </div>
    <div className="sectionRight">
        <div className="CTASection buttonContainer">
            <Button to="/" text="Shop" className="button primary" />
            <Button to="/" text="Browse" className="button secondary" />
        </div>
    </div>
  </div>
);

export default CTASection;