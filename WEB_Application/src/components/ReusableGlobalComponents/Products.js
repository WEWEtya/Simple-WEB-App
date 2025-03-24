import React from "react";
import { Link } from "react-router-dom";
import '../../styles/HomePage/products.css'

import PlaceHolder from '../../assets/images/HomePage/Products/Placeholder.png'

const products = [
    {id: 1, name: 'Product 1', image: PlaceHolder, price: '$100' },
    {id: 2, name: 'Product 2', image: PlaceHolder, price: '$200' },
    {id: 3, name: 'Product 3', image: PlaceHolder, price: '$300' },
    {id: 4, name: 'Product 4', image: PlaceHolder, price: '$400' },
    {id: 5, name: 'Product 5', image: PlaceHolder, price: '$500' },
    {id: 6, name: 'Product 6', image: PlaceHolder, price: '$600' },
    {id: 7, name: 'Product 7', image: PlaceHolder, price: '$700' },
    {id: 8, name: 'Product 8', image: PlaceHolder, price: '$800' },
]

const Products = () => {
    return (
        <div className="products_container">
            <h1>Products</h1>
            <h2>Explore our diverse range of quality products</h2>
            <div className="product_grid">
                {products.map((product) => (
                    <div key={product.id} className="product_item">
                        <div className="product_image_wrapper">
                            <Link to={`/product/${product.id}`}>
                                <img src={product.image} alt={product.name} className="products_image" />
                            </Link>
                        </div>
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products;
