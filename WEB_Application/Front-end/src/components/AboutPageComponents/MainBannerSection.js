import React from "react";
import Button from "./Button";
import "../../styles/AboutUs/aboutUs.css";

import bannerImage from "../../assets/images/AboutUs/hehehe2.jpg";

const bannerContent = {
  title: "Shop Smart, Live Better with RoundTable",
  description:
    "Discover a world of convenience with our curated selection of top-quality products. Experience reliable shopping that fits your lifestyle and needs.",
  buttons: [
    { to: "/", text: "Shop Now", className: "primary" },
    { to: "/", text: "Learn More", className: "secondary" },
  ],
};

const MainBannerSection = () => (
  <section className="mainSection">
    <div className="sectionLeft">
      <h1>{bannerContent.title}</h1>
      <p>{bannerContent.description}</p>
      <div className="button-group">
        {bannerContent.buttons.map((btn, index) => (
          <Button key={index} to={btn.to} text={btn.text} className={`button ${btn.className}`} />
        ))}
      </div>
    </div>
    <div className="sectionRight">
      <img src={bannerImage} alt="RoundTable team showcasing products" />
    </div>
  </section>
);

export default MainBannerSection;
