import React from "react";

import Header from '../components/HomePageComponents/HeroBanner.js';
import CategoryFilter from '../components/HomePageComponents/CategoryFilter.js';


export default function HomePage () {
    return (
        <div>
            <Header />
            <CategoryFilter />
        </div>
    )
}