import React, { Component } from 'react';
import Form from './components/Form';
import ListPost from './components/ListPost';
import {connect} from 'react-redux';
import {togglePosts} from './sagas'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form/>
        {(this.props.newState.enable)?
         <ListPost/>:''
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

export default connect(mapStateToProps)(App);
