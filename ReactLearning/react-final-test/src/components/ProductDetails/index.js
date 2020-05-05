import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProductDetails } from '../../actions';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import ProductDetailInfo from './ProductDetailInfo';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
  }));

const ProductDetails = (props) => {
    const classes = useStyles();

    useEffect(() => {
        props.productDetailsAPICall(props.match.params.id);
    },[]);

    if (props.productDetails) {
        const {productDetails: {sfdcName , SKU, compositeProducts}} = props;
        const skuDetails = compositeProducts.find(sku => sku.componentSku === SKU);

        return (
            <Container>
                <div className={classes.root}>
                    <Grid container>
                        <ProductDetailInfo 
                            name={sfdcName}
                            SKU={SKU}
                            SkuDetails={skuDetails} />
                    </Grid>
                </div>
            </Container>
        )
    }
    else return <div>Loading ...</div>
}

export function mapStateToProps(state) {
    return {
        productDetails: state.productDetails
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        productDetailsAPICall: (productid) => {
            return dispatch(getProductDetails(productid))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
