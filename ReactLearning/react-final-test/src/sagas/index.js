import { all, fork } from 'redux-saga/effects';

import watchGetAuthenticationSaga from './watchers/getAuthentication';
import watchGetSearchListingSaga from './watchers/getSearchListing';
import watchGetProductDetailsSaga from './watchers/getProductDetails';

function* rootSaga() {
    yield all([
      fork(watchGetAuthenticationSaga),
      fork(watchGetSearchListingSaga),
      fork(watchGetProductDetailsSaga)
    ]);
  }
  
  export default rootSaga;