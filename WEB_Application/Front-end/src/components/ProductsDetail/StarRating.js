import React, { useState } from "react";

const StarRating = ({ initialRating }) => {
    const [rating, setRating] = useState(initialRating);

    const handleStarClick = (newRating) => {
        setRating(newRating);
    };

    const stars = Array(5)
        .fill(false)
        .map((_, index) => (
            <span
                key={index}
                className={`star ${index < rating ? 'filled' : ''}`}
                onClick={() => handleStarClick(index + 1)} 
            >
                ★
            </span>
        ));

    return <div className="star_rating">{stars}</div>;
};

export default StarRating;
