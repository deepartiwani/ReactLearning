import React from 'react';
import './carouselProducts.scss';

const carouselProducts = ({
  imageUrl, skuname, partnumber, price,
}) => (
  <div className="cardwrapper">
    <div className="imagediv"><img src={imageUrl} className="productimage" alt={skuname} /></div>
    <div className="skuname imagecontent">{skuname}</div>
    <div className="partnumber imagecontent">PART #: {partnumber}</div>
    <div className="price imagecontent">${price}</div>
    <button className="addtoquote" type="button">Add to Quote</button>
  </div>
);

export default carouselProducts;
