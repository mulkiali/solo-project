import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchDetails(action){
    const id = action.payload
    console.log('in payload', id)
    try{
    const response = yield axios.get(`/select/${id}`);
    yield put({type: 'SET_DETAILS', payload: response.data});
    }catch(error){
        console.log('error getting details', error)
    }
}

function* RestaurantItemSaga() {
    yield takeLatest('FETCH_DETAILS', fetchDetails);
}

export default RestaurantItemSaga