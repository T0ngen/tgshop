import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ModalImage from "react-modal-image";


const ProductSlider = ({ product }) => {
  return (
    <div className="product-grid-container">
      {product.images.map((image, index) => (
        <div key={index} className="image-container">
          <ModalImage
            small={image}
            medium={image}
            hideDownload={true}
            className="product-image-img"
          />
        </div>
      ))}
    </div>
  );

}

export default ProductSlider;
