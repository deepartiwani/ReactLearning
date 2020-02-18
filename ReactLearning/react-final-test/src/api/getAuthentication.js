import axios from 'axios';

export function getAuthentication(username,password) {
    const baseurl = 'https://dev-bepsy-api.objectedge.com';

    const loginAPI = `${baseurl}/oe_commerce_api/occ/v1/oauth/login`;

    const headers = {
        Authorization: 'Bearer YWRtaW46YWRtaW4=',
        'Content-Type': 'application/json'
    };

    const data = {
        username: username,
        password: password
      };
    
    return axios.post(loginAPI, data, { headers });
}