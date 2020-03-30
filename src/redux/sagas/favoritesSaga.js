import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchFavorites(action){
    const response = yield axios.get('/favorites');
    console.log("in fetchList", response);
    yield put({type: 'SET_FAVORITE', payload: response.data});
    console.log('favoriteList', response.data)
   
}



function* addToFavorites(action) {
    const id = action.payload
    console.log('testing add to favorites', id)
    try {
      yield axios.post(`/favorites/`, action.payload);
        console.log('from addToFavorites', action.payload);
        yield put({type:'FETCH_FAVORITES'})
    } catch (error) {
      console.log(error);
    }
}

function* updateStatus(action){
    try{
        yield axios.put( `favorites/${action.payload.restaurant}`, action.payload)
        yield put({type:'FETCH_FAVORITES'})
    }catch (error){
        console.log('error updating', error);
    }
}

function* deleteFavorite(action){
    try{
        yield axios.delete( `/favorites/${action.payload}`)
        yield put({type:'FETCH_FAVORITES'})
    }catch (error){
        console.log(error);
    }
}

function* favoritesSaga() {
    yield takeEvery('FETCH_FAVORITES', fetchFavorites);
    yield takeEvery('ADD_TO_FAVORITES', addToFavorites);
    yield takeEvery('UPDATE_STATUS', updateStatus);
    yield takeEvery('DELETE_FAVORITE', deleteFavorite);

}

export default favoritesSaga;