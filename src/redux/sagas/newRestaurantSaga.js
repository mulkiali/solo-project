import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* newRestaurant(action) {
    try {
      yield axios.post("/form", action.payload);
        console.log('from addrestaurant', action.payload);
        yield put({type:'FETCH_RESTAURANT'})
    } catch (error) {
      console.log(error);
    }
}
  
function* newRestaurantSaga() {
    yield takeLatest('FETCH_RESTAURANT', newRestaurant);
  }

export default newRestaurantSaga;