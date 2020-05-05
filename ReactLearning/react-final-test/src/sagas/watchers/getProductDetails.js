import { call, put, takeLatest } from 'redux-saga/effects';
import { getProductDetails } from '../../api/getProductDetails';

function* workerGetProductDetailsSaga({payload : {productid}}) {
    try {
      const response = yield call(getProductDetails, productid);
      const productDetails = response.data.productList[0];
        if (productDetails) {
            yield put({ type: "PRODUCTS_DETAILS_SUCCESS", productDetails });
        }
    } catch (err) {
        console.log(err);
    }
}
  
export default function* watchGetProductDetailsSaga() {
    yield takeLatest("GET_PRODUCT_DETAILS", workerGetProductDetailsSaga);
}