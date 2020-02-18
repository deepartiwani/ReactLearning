import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getSearchListing } from '../../actions';
import ProductCard from './productCard';

export function Search(props) {
    console.log("here..")
    useEffect(() => {
        props.getProducts();
    });
  
    return (
        <div>
            { props.productsData ? props.productsData.records.map(element => {
                return <ProductCard products={element}/>
            })
            : <div>Loading.....</div>}
        </div>
    );
  }

// const Search = (props) => {
    
    

//     return (
//         <div>
//             {props.productsData ?  
//             (<Card> hello </Card>) 
//             : (<h1>Loading</h1>) }
//         </div>
        
//     )
// }

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