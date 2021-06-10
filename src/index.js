import './styles/styles.css'
import './babel'
import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./component/app.component";
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers/rootReducer';
import initState from './redux/initState';
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, initState(), composeWithDevTools(applyMiddleware(thunk)))


ReactDOM.render(
<Provider store={store}>
    <App />
  </Provider>
, 
document.querySelector("#root"));

