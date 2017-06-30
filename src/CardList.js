import React, { Component } from 'react';  // eslint-disable-line no-unused-vars
import './CardList.css';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDOFue3JEpieeIH36CsNNiNmrEE0XcWlnI",
  authDomain: "react-firebase-b2631.firebaseapp.com",
  databaseURL: "https://react-firebase-b2631.firebaseio.com",
  projectId: "react-firebase-b2631",
  storageBucket: "react-firebase-b2631.appspot.com",
  messagingSenderId: "67795087718"
};

firebase.initializeApp(config);

class CardList extends Component {


  componentDidMount() {

    const firebaseRef = firebase.database().ref()
      .child('flashcards')
      .child('users')
      .child('martin')
      .child('flashcards')
    firebaseRef.on("value", function(dataSnapshot) {
      console.log("child_added: ", dataSnapshot.val() );

      this.setState({
        words: dataSnapshot.val()
      });
    }.bind(this));
  }


  constructor() {
    super();
    this.state = {
      selected_from_word_id: null,
      selected_to_word_id: null,
      words: [],
    }
  };


  increaseCorrectCount(word_id) {
      this.setState({
        selected_from_word_id: word_id
      })
  }

  resetSelectedWords() {
    console.log('reset');
    this.setState({
      selected_from_word_id: null,
      selected_to_word_id: null
    })
  }

  compareSelections() {
    if (this.state.selected_from_word_id === this.state.selected_to_word_id) {
      console.log('correct word')
      this.increaseCorrectCount()
    } else {
      console.log('NOT correct word')
    }
    this.resetSelectedWords()
  };

  wordSelected(word, side) {
    if (side  === 'from') {
      this.setState({
        selected_from_word_id: word.id
      });
    }

    if (side  === 'to') {
      this.setState(
        { selected_to_word_id: word.id },
        this.compareSelections
      );
    }

    console.log("State is: ", this.state);


  }

  render() {


    var from_list = this.state.words.map((word, index) => (
      <li
        data-index={index}
        key={index}
        onClick={ this.wordSelected.bind(this, word, 'from') }
      >
        {word.from}
      </li>
    )).shuffle()



    var to_list = this.state.words.map((word, index) => (
      <li
        data-index={index}
        key={index}
        onClick={ this.wordSelected.bind(this, word, 'to') }
      >
        {word.to}
      </li>
    )).shuffle()


    return (
      <div className="CardList">
        <h1> Flash Cards </h1>

        <h3> From </h3>
        <ul> {from_list} </ul>

        <h3> To </h3>
        <ul> {to_list} </ul>

      </div>
    )
  }
}

export default CardList;

