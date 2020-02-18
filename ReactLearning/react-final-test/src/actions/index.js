export const getAccessToken = (username,password) => ({
    type: 'SEND_LOGIN_REQUEST',
    payload: {username, password}
});

export const getSearchListing = () => ({
    type: 'GET_SEARCH_RESULTS',
    // payload: {username, password}
});