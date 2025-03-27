import React from "react";

const ProductSelection = () => (
    <div className="product_selection">
        <p>Choose Variant:</p>
            <select>
                <option value="">Select</option>
                <option value="product1">Product 1</option>
                <option value="product2">Product 2</option>
                <option value="product3">Product 3</option>
            </select>
            <input className="input_field" type="number" min="1" defaultValue="1" />
    </div>
);

export default ProductSelection;
