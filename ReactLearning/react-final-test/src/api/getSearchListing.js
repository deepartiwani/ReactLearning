import axios from 'axios';

export function getSearchListing() {
    const baseurl = 'https://dev-bepsy-api.objectedge.com';

    const searchAPI = `${baseurl}/oe_commerce_api/solr/v1/search`;

    const headers = {
        'Bepsy-SiteId': 'siteUS',
        'Bepsy-CatalogId': 'cloudCatalog',
        'Bepsy-PricelistId': 'defaultPriceGroup',
        'Content-Type': 'application/json'
    };

    const data = {
        term: '*',
        sortBy: 'new asc',
        page: 0,
        recordsPerPage: 20,
        heirarchical: [],
        multiselect: [],
        singleselect: [],
        range: []
      };
    
    return axios.post(searchAPI, data, { headers });
}