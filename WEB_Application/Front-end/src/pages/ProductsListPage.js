import React, { useState } from "react";

import ProductsList from '../components/ReusableGlobalComponents/Products.js';
import CategoryFilter from "../components/HomePageComponents/CategoryFilter.js";

const ProductsListPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    }

    return (
        <div>
            <CategoryFilter onSelectCategory={handleCategorySelect}/>
            <ProductsList selectedCategory={selectedCategory}/>
            <ProductsList selectedCategory={selectedCategory}/>
        </div>
    )
}

export default ProductsListPage;