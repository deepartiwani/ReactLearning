export const getAccessToken = (username,password,history) => ({
    type: 'SEND_LOGIN_REQUEST',
    payload: {username, password, history}
});

export const getSearchListing = () => ({
    type: 'GET_SEARCH_RESULTS'
});

export const getProductDetails = (productid) => ({
    type: 'GET_PRODUCT_DETAILS',
    payload: {productid}
});