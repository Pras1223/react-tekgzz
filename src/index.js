import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createStore,applyMiddleware,compose} from 'redux' ;
import { Provider } from 'react-redux';
import postReducer from './reducers/postReducers';
import createSagaMiddleWare from 'redux-saga'
import rootSaga from './sagas'

const sagaMiddleWare = createSagaMiddleWare();
const store = createStore(postReducer,compose(applyMiddleware(sagaMiddleWare),
        window.__REDUX_DEVTOOLS_EXTENSION__&&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
));

sagaMiddleWare.run(rootSaga);

ReactDOM.render(
  <Provider store={store}><App/></Provider>,
  document.getElementById('root')  
);
