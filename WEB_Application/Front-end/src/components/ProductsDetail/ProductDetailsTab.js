import React from "react";

// Format attribute name to more user friendly
const formatAttributeName = (name) => {
    return name
        .replaceAll("_", " ")  // Replace underscores with spaces
        .replace(/\b\w/g, (char) => char.toUpperCase());  // Capitalize the first letter of each word
};

const ProductDetailsTab = ({ attributes }) => (
    <div className="product_options">
        <div className="product_attributes"> 
            <h2>Attributes</h2>
            {attributes && attributes.length > 0 ? (
                <ul> 
                    {attributes.map((attribute, index) => (
                        <li key={index}>
                            <strong>{formatAttributeName(attribute.name)}:</strong> {attribute.value}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No attributes available.</p>
            )}
        </div>

        <div className="product_shipping">
            <h2>Shipping</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
            </p>
        </div>

        <div className="product_returns">
            <h2>Returns</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
            </p>
        </div>
    </div>
);

export default ProductDetailsTab;
