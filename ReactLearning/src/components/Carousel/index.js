import React from 'react';
import './Carousel.css';

const Carousel = (props) => {
    console.log(props);

    let iterate = props.productsdata.map(element =>{
        let imageUrl = element.compositeProducts[0].EProductMedia.smallURI,
            skuname = element.sfdcName, 
            partnumber = element.SKU,
            price = element.compositeProducts[0].priceEntry.listPrice;
        return(
            <div class="imagewrapper">
                <div><img src={imageUrl} /></div>
                <div>{skuname}</div>
                <div>PART #: {partnumber}</div>
                <div>${price}</div>
                <button>Add to Quote</button>
            </div>
        )
    }) 

    return(
         <div class="containerwrapper">
            {iterate}
         </div>
    )
}

export default Carousel;