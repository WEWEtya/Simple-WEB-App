import React from "react";
import '../../styles/HomePage/productsBenefit.css';

import PS5Image from '../../assets/images/HomePage/ProductsBenefits/ProductBenefitsPS5.png';
import Woman from '../../assets/images/HomePage/ProductsBenefits/ProductBenefitsWoman.png';
import Speakers from '../../assets/images/HomePage/ProductsBenefits/ProductBenefitsSpeakers.png';
import Perfume from '../../assets/images/HomePage/ProductsBenefits/ProductBenefitsParfume.png';

const ProductsBenefit = () => {
    return (
        <div>
            <div className="custom_grid">  
                <div className="grid_item large">
                    <div className="overlay">
                        <h2>PlayStation 5</h2>
                        <p>Black and White version of the PS5 coming out on sale.</p>
                        <a href="/" className="shop_now">Shop Now</a>
                    </div>
                    <img className="grid_image" src={PS5Image} alt="PS5" /> 
                </div>
                <div className="grid_item medium">
                    <div className="overlay">
                        <h2>Women's Collections</h2>
                        <p>Featured woman collections that give you another vibe.</p>
                        <a href="/" className="shop_now">Shop Now</a>
                    </div>
                    <img className="grid_image" src={Woman} alt="Woman" />
                </div>
                <div className="grid_item small">
                    <div className="overlay">
                        <h2>Speakers</h2>
                        <p>Amazon wireless speakers.</p>
                        <a href="/" className="shop_now">Shop Now</a>
                    </div>
                    <img className="grid_image" src={Speakers} alt="Speakers" />
                </div>
                <div className="grid_item small">
                    <div className="overlay">
                        <h2>Perfume</h2>
                        <p>GUCCI INTENSE OUD EDP.</p>
                        <a href="/" className="shop_now">Shop Now</a>
                    </div>
                    <img className="grid_image" src={Perfume} alt="Perfume" />
                </div>
            </div>

            <div className="bottom-text">
                <div className="left-section">
                    <h2>Discover the Unique Benefits of Choosing Round Table Products for Your Needs</h2>
                </div>
                <div className="right-section">
                    <p>At Round Table, we prioritize quality and innovation in every product we offer. Our carefully curated selection ensures that you receive the best value and performance.</p>
                    
                    <div className="features">
                        <div className="feature-item">
                            <h3>Quality Assurance</h3>
                            <p>Our products undergo rigorous testing to guarantee durability and reliability for our customers.</p>
                        </div>
                        
                        <div className="feature-item">
                            <h3>Customer Focus</h3>
                            <p>We listen to our customers and adapt our products to meet their evolving needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}                

export default ProductsBenefit;
