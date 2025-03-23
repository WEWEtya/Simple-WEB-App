import React, { useState } from "react";
import '../../styles/HomePage/categoryFilter.css';

import phone_image from "../../assets/images/HomePage/Category-CellPhone.png"

const categories = [
    {name: "Phones", image: phone_image, icon: "📱"},
    {name: "Computers", icon: "💻"},
    {name: "SmartWatch", icon: "⌚"},
    {name: "Camera", icon: "📷"},
    {name: "HeadPhones", icon: "🎧"},
    {name: "Gaming", icon: "🎮"}
];

const CategoryFilter = ({ onSelectCategory }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        onSelectCategory(category);
    }

    return (
        <div className="category_filter" >
            <h2 className="category_title">Browse By Category</h2>

            <div className="category_buttons">
                {categories.map((category) => (
                    <div
                    key={category.name}
                        className={`category_item ${selectedCategory === category.name ? "active" : ""}`}
                        onClick={() => handleCategoryClick(category.name)}
                    >
                        <span className="category_icon">
                            {category.image ? (
                                <img src={category.image} alt={category.name} />
                            ) : (
                                category.icon
                            )}
                        </span>
                        {category.name}
                </div>
                ))}
            </div>
        </div>
    );
}

export default CategoryFilter;