import React, { useState } from "react";
import '../../styles/HomePage/categoryFilter.css';

import PhoneImage from "../../assets/images/HomePage/CategoryFilter/Category-CellPhone.png";
import ComputerImage from "../../assets/images/HomePage/CategoryFilter/Category-Computer.png";
import SmartWatchImage from "../../assets/images/HomePage/CategoryFilter/Category-SmartWatch.png"
import CameraImage from "../../assets/images/HomePage/CategoryFilter/Category-Camera.png"
import HeadphonesImage from "../../assets/images/HomePage/CategoryFilter/Category-Headphone.png"
import GamePadImage from "../../assets/images/HomePage/CategoryFilter/Category-Gamepad.png"



const categories = [
    {name: "Phones", image: PhoneImage, icon: "📱"},
    {name: "Computers", image: ComputerImage, icon: "💻"},
    {name: "SmartWatch", image: SmartWatchImage, icon: "⌚"},
    {name: "Camera", image: CameraImage, icon: "📷"},
    {name: "HeadPhones", image: HeadphonesImage, icon: "🎧"},
    {name: "Gaming", image: GamePadImage, icon: "🎮"}
];

const CategoryFilter = ({ onSelectCategory }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        onSelectCategory(category);
    }

    return (
        <div className="category_filter">
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
