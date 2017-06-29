import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import logo from './logo.svg';
import './App.css';
// import * as firebase from 'firebase';
//
// var config = {
//   apiKey: "AIzaSyDOFue3JEpieeIH36CsNNiNmrEE0XcWlnI",
//   authDomain: "react-firebase-b2631.firebaseapp.com",
//   databaseURL: "https://react-firebase-b2631.firebaseio.com",
//   projectId: "react-firebase-b2631",
//   storageBucket: "react-firebase-b2631.appspot.com",
//   messagingSenderId: "67795087718"
// };
//
// firebase.initializeApp(config);



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
