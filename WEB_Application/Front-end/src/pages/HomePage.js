import React, { useState } from "react";
import Header from '../components/HomePageComponents/HeroBanner.js';
import CategoryFilter from "../components/FilterComponents/CategoryFilter.js";
import ProductsList from '../components/ReusableGlobalComponents/Products.js';
import ProductsBenefit from '../components/HomePageComponents/ProductsBenefit.js';

import "../styles/HomePage/homePage.css";

const HomePage = () => {
    const [selectedCategory, setSelectedCategory] = useState("");

    // Handle category change logic
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
            <ProductsList selectedCategory={selectedCategory} />
            <ProductsBenefit />
        </div>
    );
};

export default HomePage;
