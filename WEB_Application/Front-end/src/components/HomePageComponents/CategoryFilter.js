import React, { useState } from "react";
import '../../styles/HomePage/categoryFilter.css';

import PhoneImage from "../../assets/images/HomePage/CategoryFilter/Category-CellPhone.png";
import ComputerImage from "../../assets/images/HomePage/CategoryFilter/Category-Computer.png";
import SmartWatchImage from "../../assets/images/HomePage/CategoryFilter/Category-SmartWatch.png"
import CameraImage from "../../assets/images/HomePage/CategoryFilter/Category-Camera.png"
import HeadphonesImage from "../../assets/images/HomePage/CategoryFilter/Category-Headphone.png"
import GamePadImage from "../../assets/images/HomePage/CategoryFilter/Category-Gamepad.png"



const categories = [
    { name: "Phone", image: PhoneImage, icon: "📱" },
    { name: "Computer", image: ComputerImage, icon: "💻" },
    { name: "Smartwatch", image: SmartWatchImage, icon: "⌚" },
    { name: "Camera", image: CameraImage, icon: "📷" },
    { name: "Headphones", image: HeadphonesImage, icon: "🎧" },
    { name: "Mouse", image: GamePadImage, icon: "🎮" }
];

const CategoryFilter = ({ onSelectCategory }) => {
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleCategoryClick = (category) => {
        if (selectedCategory === category) {
            setSelectedCategory(""); // Reset filter
            onSelectCategory(""); // Show all products
        } else {
            setSelectedCategory(category);
            onSelectCategory(category);
        }
    };

    return (
        <div className="category_filter">
            <h2 className="category_title">Browse By Category</h2>

            <div className="category_buttons">
                {categories.map((category) => (
                    <button
                        key={category.name}
                        className={`category_item ${selectedCategory === category.name ? "active" : ""}`}
                        onClick={() => handleCategoryClick(category.name)}
                    >
                        <span className="category_icon">
                            <img src={category.image} alt={category.name} />
                        </span>
                        {category.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryFilter;