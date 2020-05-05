import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './ProductDetailsInfo.scss';

const ProductDetailInfo = (props) => {
    const {
    name , SKU ,
    SkuDetails : {
        description,
        EProductMedia: { fullURI },
        priceEntry: { listPrice }
    }
    } = props;

    return (
        <>
            <Grid item xs={6} spacing={3}>
                <img 
                src={fullURI} 
                className="img-wrapper"
                alt={name}/>
            </Grid>
            <Grid item xs={6} spacing={3}>
            <Typography gutterBottom variant="h5" component="h2">
                {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                SKU: {SKU}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {description}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Price: {listPrice}
            </Typography>
            </Grid>
        </>
    )
}

export default ProductDetailInfo;