import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getSearchListing } from '../../actions';
import ProductCard from './productCard';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export function Search(props) {
  const classes = useStyles();

  useEffect(() => {
      props.getProducts();
  },[]);

  return (
    <Container fluid>
      <div className={classes.root}>
        <Grid container>
        { props.productsData ? props.productsData.records.map(element => {
            return <ProductCard products={element}/>
          }):
          <div>Loading.....</div>
        }
        </Grid>
      </div>
    </Container>
  );
}

export function mapStateToProps(state) {
    return {
      productsData: state.productsData
    }
}

export function mapDispatchToProps(dispatch) {
    return {
      getProducts: () => {
        return dispatch(getSearchListing())
      }
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Search);