import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';

export default class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyCnU2YsXSJgBwb0BLRnfFEHIikvY1zopu4",
      authDomain: "crudfirebase-fbd7c.firebaseapp.com",
      databaseURL: "https://crudfirebase-fbd7c.firebaseio.com",
      projectId: "crudfirebase-fbd7c",
      storageBucket: "crudfirebase-fbd7c.appspot.com",
      messagingSenderId: "318563265945"
    };
    firebase.initializeApp(config);
  }

  render() { 
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}
