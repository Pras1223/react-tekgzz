import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addPosts,togglePosts} from '../routines';
import {Input,Button,StyledDiv,Textarea} from './styledComponents';

class Form extends Component{
   
    handleSubmit=(e)=>{
        e.preventDefault();
        const title = this.inputVal.value;
        const message =  this.inputText.value;
        // const enable = this.inputCheck.checked;
        
        if(message && title)
        {
            const data = {
                id: new Date(),
                edit : false,
                title,
                message,
               // enable
            }

            this.props.addPosts(data);
        }
        this.inputVal.value = '';
        this.inputText.value = '';
       // this.inputCheck.checked = false;
           
    }

   
  

    render(){
        const style ={
            margin : 'auto',
        }
        return(
            <StyledDiv style={style}>
                <form onSubmit={this.handleSubmit} >
                    <Input type="text" placeholder="Enter text here" ref={(input)=>this.inputVal = input}/>
                    <Textarea placeholder="Enter description here" ref={(input)=>this.inputText = input}/>
                    <Button>Submit</Button>
                </form>
                <Input type="checkbox" onClick = {(e)=>this.props.togglePosts({enable : e.target.checked})}/><br/><br/>   
            </StyledDiv>
        );
    }
}

const mapDispatchToProps = {
    addPosts,togglePosts
};
export default connect(null,mapDispatchToProps)(Form);