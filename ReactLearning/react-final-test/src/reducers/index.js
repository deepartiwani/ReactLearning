const initialState = {
    credentails: null,
    productsData: null,
    accessToken: null,
    productDetails: null
}

const reducer = (state = {initialState}, action) => {
    switch (action.type) {
       case 'SEND_LOGIN_REQUEST':
          return { ...state, credentials: action.payload };
       case 'LOGIN_SUCCESS':
            return { ...state, accessToken: action.access_token };
       case 'GET_SEARCH_RESULTS':
            return { ...state };
       case 'PRODUCTS_SUCCESS':
            return { ...state, productsData: action.productsData };
       case 'PRODUCTS_DETAILS_SUCCESS':
            return { ...state, productDetails: action.productDetails };
       default:
          return state;
     }
};

export default reducer;