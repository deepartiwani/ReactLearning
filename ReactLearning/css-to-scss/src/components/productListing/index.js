import React from 'react';
import CarouselProducts from '../carouselProducts';

const productListing = (props) => props.products.map((element) => {
  const imageUrl = element.compositeProducts[0].EProductMedia.smallURI;
  const skuname = element.sfdcName;
  const partnumber = element.SKU;
  const price = element.compositeProducts[0].priceEntry.listPrice;
  const { sfid } = element;
  return (
    <CarouselProducts imageUrl={imageUrl} skuname={skuname} partnumber={partnumber} price={price} key={sfid} />
  );
});

export default productListing;
