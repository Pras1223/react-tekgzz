import {addPosts,editPosts,deletePosts,updatePosts,togglePosts} from '../routines'

const initialState = {
  posts : [],
  togglePosts : false
}
const postReducer = (state = initialState,action)=>{
      const newState = {...state}
      switch(action.type){
          case addPosts.SUCCESS:
          return {
            ...state, 
            posts: [
              ...state.posts,
              action.payload
            ]
          }

          case deletePosts.SUCCESS:
            return {
              ...state,
              posts:[...state.posts.filter((post)=>post.id !== action.payload.id)]
              
            }  
          case editPosts.SUCCESS:
            return {
              ...state,
              posts :[...state.posts.map((post)=>post.id === action.payload.id?{...post,edit : !post.edit} : post)]
            } 
          case updatePosts.SUCCESS:
            return {
              ...state,
              posts:[...state.posts.map((post)=>{
              if(post.id === action.payload.id){
               return{ 
                ...post,
                title:  action.payload.data.newTitle,
                message:  action.payload.data.newMessage,
                edit: !post.edit
              }

              }
            else return {...post}
          })]}
          
          case togglePosts.SUCCESS:
              return {
                ...state,
                enable : action.payload.enable
              }
         default :
           return newState;    
      }  
}

export default postReducer;