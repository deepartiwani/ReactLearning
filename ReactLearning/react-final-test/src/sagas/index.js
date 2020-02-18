import { all, fork } from 'redux-saga/effects';

import watchGetAuthenticationSaga from './watchers/getAuthentication';
import watchGetSearchListingSaga from './watchers/getSearchListing';

function* rootSaga() {
    yield all([
      fork(watchGetAuthenticationSaga),
      fork(watchGetSearchListingSaga)
    ]);
  }
  
  export default rootSaga;