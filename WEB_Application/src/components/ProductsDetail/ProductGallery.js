import React, {useState} from "react";
import "../../styles/ProductDetailPage/productDetail.css"

const ProductGallery = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className="gallery_container">
            <div className="big_image">
                <img src={selectedImage} alt="Selected Product" />
            </div>

            <div className="thumbnail_row">
                {images.map((img, index) => (
                    <img 
                        key={index}
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        className={`thumbnail ${selectedImage === img ? "active" : "" }`}
                        onMouseEnter={() => setSelectedImage(img)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductGallery;