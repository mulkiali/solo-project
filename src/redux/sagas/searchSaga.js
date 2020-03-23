import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchList(action) {
    const searchResults = yield axios.get('/search');
    console.log("in fetchList", searchResults);
    console.log("payload", searchResults.data);
  
    yield put({ type: "GET_LIST", payload: searchResults.data });
}
  
function* searchSaga() {
    yield takeLatest('FETCH_LIST', fetchList);
}

export default searchSaga;