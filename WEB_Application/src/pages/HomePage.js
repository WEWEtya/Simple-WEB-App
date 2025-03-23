import React from "react";

import Header from '../components/HomePageComponents/HeroBanner.js';
import CategoryFilter from '../components/HomePageComponents/CategoryFilter.js';
import Products from '../components/HomePageComponents/Products.js';


export default function HomePage () {
    return (
        <div>
            <Header />
            <CategoryFilter />
            <Products />
        </div>
    )
}