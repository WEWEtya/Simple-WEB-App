import React, { useState, useEffect } from "react";
import Header from '../components/HomePageComponents/HeroBanner.js';
import CategoryFilter from "../components/HomePageComponents/CategoryFilter.js";
import Products from '../components/ReusableGlobalComponents/Products.js';
import ProductsBenefit from '../components/HomePageComponents/ProductsBenefit.js';

import "../styles/HomePage/homePage.css"

const HomePage = () => {
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleCategoryChange = (category) => {
        const newCategory = selectedCategory === category.toLowerCase() ? "" : category.toLowerCase();
        setSelectedCategory(newCategory);
    };

    return (
        <div className="HomePage">
            <Header />
            <h1>Products</h1>
            <h2>Explore our diverse range of quality products</h2>
            <CategoryFilter onSelectCategory={handleCategoryChange} />
            <Products selectedCategory={selectedCategory} />
            <ProductsBenefit />
        </div>
    );
};

export default HomePage;