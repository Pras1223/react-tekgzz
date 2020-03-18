import { createRoutine } from 'redux-saga-routines';
 const addPosts = createRoutine('ADD_POSTS');
 const deletePosts = createRoutine('DELETE_POSTS');
 const editPosts = createRoutine('EDIT_POSTS');
 const updatePosts = createRoutine('UPDATE_POSTS');   
 const togglePosts = createRoutine('TOGGLE_POSTS');
 export{
     addPosts,
     deletePosts,
     editPosts,
     updatePosts,togglePosts
 }