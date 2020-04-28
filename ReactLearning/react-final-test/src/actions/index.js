export const getAccessToken = (username,password,history) => ({
    type: 'SEND_LOGIN_REQUEST',
    payload: {username, password, history}
});

export const getSearchListing = () => ({
    type: 'GET_SEARCH_RESULTS',
    // payload: {username, password}
});