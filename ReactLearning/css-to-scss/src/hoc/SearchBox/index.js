import React, { Component } from 'react';
import './SearchBox.scss';

const HOC = (SearchResult, productsdata) => {
  class HOC extends Component {
    constructor() {
      super();
      this.state = {
        searchText: '',
      };
    }

    inputChangeHandler = (event) => {
      this.setState({
        [event.target.name]: event.target.value, // updating state variables where [event.target.name] is name attribute of <input> tag
      });
    }

    filterSearchValue = (productsdata) => {
      const result = productsdata.filter((productsdata) => productsdata.sfdcName.indexOf(this.state.searchText.trim()) !== -1);
      return result;
    }

    render() {
      return (
        <>
          <div className="searchbox">
            <input className="inputbox" type="text" name="searchText" required onChange={this.inputChangeHandler} placeholder="Search..." />
          </div>
          <div className="productContainer">
            <SearchResult products={this.filterSearchValue(productsdata)} />
          </div>
        </>
      );
    }
  }
  return <HOC />;
};

export default HOC;
