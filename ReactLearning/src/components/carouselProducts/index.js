import React from 'react';
import './carouselProducts.css';

const carouselProducts = ({imageUrl, skuname, partnumber, price}) => {
    return(
        <div class="cardwrapper">
            <div class="imagediv"><img src={imageUrl} class="productimage" /></div>
            <div class="skuname imagecontent">{skuname}</div>
            <div class="partnumber imagecontent">PART #: {partnumber}</div>
            <div class="price imagecontent">${price}</div>
            <button class="addtoquote">Add to Quote</button>
        </div>
    )
}

export default carouselProducts;