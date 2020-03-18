import React, { Component } from 'react';
import {Input,Button,StyledDiv,Textarea, PostDiv} from './styledComponents';
import {connect} from 'react-redux';
import {editPosts,deletePosts} from '../routines';
class Post extends Component {
   
  render() {
    
    
  return (
    <PostDiv>
      <h2>{this.props.post.title}</h2>
      <p>{this.props.post.message}</p>
      <Button onClick={()=>this.props.editPosts({id : this.props.post.id})}>Edit</Button>
      <Button onClick = {()=>this.props.deletePosts({id : this.props.post.id})}>Delete</Button>
    </PostDiv>
  );
 }
}

const mapDispatchToProps = {
  editPosts,deletePosts
}
export default connect(null,mapDispatchToProps)(Post);