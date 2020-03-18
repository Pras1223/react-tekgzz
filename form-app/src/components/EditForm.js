import React,{Component} from 'react';
import {connect} from 'react-redux';
import {updatePosts} from '../routines';
import {Input,Button,StyledDiv,Textarea} from './styledComponents';

class EditForm extends Component {
    
    handleEdit = (e) => {
      e.preventDefault();
      const newTitle = this.inputVal.value;
      const newMessage = this.inputText.value;
      const data = {
        newTitle,
        newMessage
      }
    
      this.props.updatePosts({id: this.props.post.id, data: data})
    }
    
    render() {
    return (
    <StyledDiv>
      <form onSubmit={this.handleEdit}>
        <Input type="text" placeholder="Enter text here" ref={(input)=>this.inputVal = input}
        defaultValue={this.props.post.title} />
        <Textarea placeholder="Enter description here" ref={(input)=>this.inputText = input}
        defaultValue={this.props.post.message}/>
        <Button>Update</Button>
      </form>
    </StyledDiv>
    );
    }
    }

    const mapDispatchToProps = {
        updatePosts,
      }
    export default connect(null,mapDispatchToProps)(EditForm);