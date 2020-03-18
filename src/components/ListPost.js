import React , { Component } from 'react';

import {connect} from 'react-redux';

import EditForm from './EditForm';
import Post from './Post';
class ListPost extends Component{
    render(){
        const style = {
            margin : '0.5em'
        }
        return(
          <div>
                      
                {
                    this.props.newState.posts.map((post)=>(
                      <div key = {post.id} style={style}>
                          {post.edit?<EditForm key ={post.id} post = {post}/>:<Post key={post.id} post={post}/>}
                       </div>  
                    ))
                }
            
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        newState : state
    }
}

export default connect(mapStateToProps)(ListPost);