import React from "react";

import Header from '../components/HomePageComponents/HeroBanner.js';
import CategoryFilter from '../components/HomePageComponents/CategoryFilter.js';
import Products from '../components/ReusableGlobalComponents/Products.js';
import ProductsBenefit from '../components/HomePageComponents/ProductsBenefit.js';

const HomePage = () => {
    return (
        <div>
            <Header />
            <CategoryFilter />
            <Products />
            <ProductsBenefit />
        </div>
    )
}

export default HomePage;