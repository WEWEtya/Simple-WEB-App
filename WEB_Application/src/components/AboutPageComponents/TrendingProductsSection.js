import React from "react";
import image1 from '../../assets/images/AboutUs/image1.png';
import image2 from '../../assets/images/AboutUs/image2.png';
import image3 from '../../assets/images/AboutUs/image3.png';

import "../../styles/AboutUs/aboutUs.css";

// Data for trending items
const trendingItems = [
  {
    id: 1,
    image: image1,
    title: "Cutting-Edge Electronics to Enhance Your Life Style",
    description: "From stylish apparel to essential gadgets, we have it all.",
    link: "/",
  },
  {
    id: 2,
    image: image2,
    title: "Quality Home Essentials for Comfort and Style",
    description: "Transform your living space with our curated home products.",
    link: "/",
  },
  {
    id: 3,
    image: image3,
    title: "Seamless Shopping with Personalized Recommendations",
    description: "Our platform tailors suggestions based on your preferences.",
    link: "/",
  },
];

// Reusable Trending Item Component
const TrendingItem = ({ image, title, description, link }) => (
  <div className="trending-item">
    <img src={image} alt={title} />
    <h2>{title}</h2>
    <p>{description}</p>
    <a href={link} className="learnMoreLink">Learn More &gt;</a>
  </div>
);

// Main Section
const TrendingProductsSection = () => (
  <div className="trending-container">
    <h1 className="trending-header">Explore the Latest Trends in Fashion</h1>
    <div className="trending-content">
      {trendingItems.map((item) => (
        <TrendingItem 
          key={item.id} 
          image={item.image} 
          title={item.title} 
          description={item.description} 
          link={item.link} 
        />
      ))}
    </div>
  </div>
);

export default TrendingProductsSection;
