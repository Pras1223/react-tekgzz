import styled from 'styled-components';

const Input = styled.input`
     width : 100%;
     display : block;
     padding : 0.5em;
     margin: 1em 0;   
     border-radius: 3px;      
`;

const Textarea = styled.textarea`
    width : 100%;
    display : block;
    padding : 0.5em;
    margin: 1em 0;   
    border-radius: 3px; 
`;

const StyledDiv = styled.div`
    width : 25%;
    border-radius: 5px;
    background-color: #f5e2f2;
    padding: 1.5em;
    margin : auto
`;

const PostDiv = styled.div`
    background-color : lightgray;
    width : 25%;
    margin : 1em;
    padding : 0.5em;
    border : 1px solid black;
    word-wrap : break-word; 
`;


const Button = styled.button`
  
  color: white;
  background-color: blue;
  font-size: 1em;
  margin: auto;
  padding:  0.5em;
  border-radius: 5px;
  display : block;   
  width : 25%;
`;

export {
    Input,Button,StyledDiv,Textarea,PostDiv
}