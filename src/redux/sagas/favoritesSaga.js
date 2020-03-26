import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchFavorites(action){
    const id = action.payload
    console.log('in payload', id)
    try{
    const response = yield axios.get(`/favorites/${id}`);
    yield put({type: 'SET_FAVORITE', payload: response.data});
    }catch(error){
        console.log('error getting favorites', error)
    }
}



function* addToFavorites(action) {
    try {
      yield axios.post("/favorites", action.payload);
        console.log('from addToFavorites', action.payload);
        yield put({type:'FETCH_FAVORITES'})
    } catch (error) {
      console.log(error);
    }
}
  
function* favoritesSaga() {
    yield takeEvery('FETCH_FAVORITES', fetchFavorites);
    yield takeEvery('ADD_TO_FAVORITES', addToFavorites);

}

export default favoritesSaga;