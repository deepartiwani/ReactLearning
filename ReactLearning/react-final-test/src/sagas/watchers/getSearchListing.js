import { call, put, takeLatest } from 'redux-saga/effects';
import { getSearchListing } from '../../api/getSearchListing';

function* workerGetSearchListingSaga() {
    try {
      const response = yield call(getSearchListing);
      const productsData = response.data.response;
        if (productsData) {
            yield put({ type: "PRODUCTS_SUCCESS", productsData });
        }
    } catch (err) {
        console.log(err);
    }
}
  
export default function* watchGetSearchListingSaga() {
    yield takeLatest("GET_SEARCH_RESULTS", workerGetSearchListingSaga);
}