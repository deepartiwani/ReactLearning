import { call, put, takeLatest } from 'redux-saga/effects';

import { getAuthentication } from '../../api/getAuthentication';

function* workerGetAuthenticationSaga({ payload: { username, password, history } }) {

    try {
      const response = yield call(getAuthentication, username, password);
      const access_token = response.data.access_token;
        if (access_token) {
            yield put({ type: "LOGIN_SUCCESS", access_token });
            localStorage.setItem('access_token', access_token);
            history.push('/search');
        }
    } catch (err) {
        console.log(err);
    }
}
  
export default function* watchGetAuthenticationSaga() {
    yield takeLatest("SEND_LOGIN_REQUEST", workerGetAuthenticationSaga);
}