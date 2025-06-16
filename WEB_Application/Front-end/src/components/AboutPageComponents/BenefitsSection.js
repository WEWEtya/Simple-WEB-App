import React from "react";
import Button from "./Button";
import "../../styles/AboutUs/aboutUs.css";
import image from "../../assets/images/AboutUs/placeholder.jpg";

// Content data to enhance scalability and maintainability
const benefitsContent = {
  heading: "Experience Unmatched Benefits at RoundTable",
  description:
    "At RoundTable, we prioritize your shopping experience with unbeatable prices and a carefully curated selection. Enjoy a seamless journey from browsing to checkout, designed just for you.",
  features: [
    {
      title: "Competitive Prices",
      description: "Shop confidently with our low prices that fit your budget.",
    },
    {
      title: "Curated Selection",
      description: "Explore a handpicked range of quality products tailored to your needs.",
    },
  ],
  cta: {
    buttonText: "Shop",
    linkText: "Learn More",
    linkUrl: "/",
  },
};

const BenefitsSection = () => (
  <section className="mainSection">
    <div className="sectionLeft">
      <h1 className="heading">{benefitsContent.heading}</h1>
      <p className="description">{benefitsContent.description}</p>

      <div className="features">
        {benefitsContent.features.map((feature, index) => (
          <div key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="ctaContainer">
        <Button to={benefitsContent.cta.linkUrl} text={benefitsContent.cta.buttonText} className="button secondary" />
        <a href={benefitsContent.cta.linkUrl} className="learnMoreLink">{benefitsContent.cta.linkText} &gt;</a>
      </div>
    </div>

    <div className="sectionRight">
      <img src={image} alt="RoundTable team showcasing products" />
    </div>
  </section>
);

export default BenefitsSection;
