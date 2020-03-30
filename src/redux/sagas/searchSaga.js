import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchList(action) {
    const searchResults = yield axios.get('/search');
    console.log("in fetchList", searchResults);
    console.log("payload", searchResults.data);
  
    yield put({ type: "GET_LIST", payload: searchResults.data });
}

function* deleteRestaurant(action){
    try{
        yield axios.delete( `/search/${action.payload}`)
        yield put({type:'FETCH_LIST'})
    }catch (error){
        console.log(error);
    }
}

function* editRestaurant(action){
    try{
        yield axios.put( `search/${action.payload.name}`, action.payload)
        yield put({type:'FETCH_LIST'})
    }catch (error){
        console.log('error editing', error);
    }
}

function* searchSaga() {
    yield takeLatest('FETCH_LIST', fetchList);
    yield takeLatest('DELETE_ITEM', deleteRestaurant);
    yield takeLatest('EDIT_ITEM', editRestaurant);
}

export default searchSaga;