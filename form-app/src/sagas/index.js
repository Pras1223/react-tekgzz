import {takeEvery,put}from 'redux-saga/effects'
import {addPosts, editPosts,updatePosts,deletePosts,togglePosts} from '../routines'
//
function* addPostsSaga(action){ 
    console.log(action);      
    yield put(addPosts.success(action.payload));
}

function* editPostsSaga(action){
    yield put(editPosts.success(action.payload));
}

function* updatePostsSaga(action){
    yield put(updatePosts.success(action.payload));
}
function* deletePostsSaga(action){
    yield put(deletePosts.success(action.payload));
}
function* togglePostsSaga(action){
    yield put(togglePosts.success(action.payload));
}


export default function* rootSaga(){
    yield takeEvery(addPosts.TRIGGER , addPostsSaga);
    yield takeEvery(editPosts.TRIGGER , editPostsSaga);
    yield takeEvery(updatePosts.TRIGGER , updatePostsSaga);
    yield takeEvery(deletePosts.TRIGGER, deletePostsSaga)
    yield takeEvery(togglePosts.TRIGGER, togglePostsSaga)
}