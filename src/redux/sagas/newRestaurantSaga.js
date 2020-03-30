import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* newRestaurant(action) {
    try {
      yield axios.post("/form", action.payload);
        console.log('from addrestaurant', action.payload);
        yield put({type:'FETCH_RESTAURANT'})
    } catch (error) {
      console.log(error);
    }
}

// function* newRestaurantAddress(action) {
//     try {
//       yield axios.post("/form", action.payload);
//         console.log('from addrestaurant', action.payload);
//         yield put({type:'FETCH_ADDRESS'})
//     } catch (error) {
//       console.log(error);
//     }
// }


  
function* newRestaurantSaga() {
    yield takeEvery('ADD_TO_LIST', newRestaurant);
    // yield takeEvery('ADD_TO_LIST', newRestaurantAddress);
  }

export default newRestaurantSaga;