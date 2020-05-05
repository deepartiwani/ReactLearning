import axios from 'axios';

export function getProductDetails(productid) {
    const baseurl = 'https://dev-bepsy-api.objectedge.com';

    const productDetailAPI = `${baseurl}/oe_commerce_api/occ/v1/products/${productid}`;

    const headers = {
        'Bepsy-SiteId': 'siteUS',
        'Bepsy-CatalogId': 'cloudCatalog',
        'Bepsy-PricelistId': 'defaultPriceGroup',
        'Content-Type': 'application/json'
    };    
    return axios.get(productDetailAPI, null, { headers });
}