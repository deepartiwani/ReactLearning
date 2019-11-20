import React from 'react';
import './carouselProducts.css';

const carouselProducts = ({imageUrl, skuname, partnumber, price}) => {
    return(
        <div className="cardwrapper">
            <div className="imagediv"><img src={imageUrl} className="productimage" alt={skuname} /></div>
            <div className="skuname imagecontent">{skuname}</div>
            <div className="partnumber imagecontent">PART #: {partnumber}</div>
            <div className="price imagecontent">${price}</div>
            <button className="addtoquote">Add to Quote</button>
        </div>
    );
};

export default carouselProducts;