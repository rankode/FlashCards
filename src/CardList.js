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
      let words = dataSnapshot.val().clean() // clean removes undefined

      // Add id to words
      //  words = words.map(function(x, i) {
      //   x.id = 1;
      //   return x
      // });

      this.setState({
        words: words
      });

      console.log("Update from Firebase", words );

    }.bind(this));
  }


  constructor() {
    super();
    this.state = {
      selected_from_word: null,
      selected_to_word: null,
      words: [],
    }
  };


  increaseCorrectCount() {
    // Get a key for a new Post.
    //var newPostKey = firebase.database().ref().child('posts').push().key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    //updates['/posts/' + newPostKey] = postData;
    //updates['/user-posts/' + uid + '/' + newPostKey] = postData;

    let word = this.state.selected_from_word
    console.log("Word id is: ", word.id)
    word.correct_guesses++
    updates['/flashcards/users/martin/flashcards/' + word.id ] = word;

    return firebase.database().ref().update(updates);
    //return firebase.database().ref().update(updates);
  }

  resetSelectedWords() {
    console.log('reset');
    this.setState({
      selected_from_word: null,
      selected_to_word: null
    })
  }

  compareSelections() {
    console.log(this.state.selected_from_word +'==='+ this.state.selected_to_word)
    if (! (this.state.selected_from_word && this.state.selected_to_word))  {
      console.log('from or two is null, will not compare yet.')
      // I just clicked to_word. Why is that not stored in state when this is a callback
      // for the setState function?
      return
    }
    if (this.state.selected_from_word === this.state.selected_to_word) {
      console.log('CORRECT WORD')
      this.increaseCorrectCount()
    } else {
      console.log('NOT correct word')
    }
    this.resetSelectedWords()
    console.log("State is: ", this.state);
  };

  wordSelected(word, side) {
    if (side  === 'from') {
      this.setState({
        selected_from_word: word },
        this.compareSelections
      );
    }

    if (side  === 'to') {
      this.setState(
        { selected_to_word: word },
        this.compareSelections
      );
    }



  }

  render() {

    var from_list = this.state.words.map((word, index) => (
      <li
        data-index={index}
        key={index}
        onClick={ this.wordSelected.bind(this, word, 'from') }
      >
        {word.from}
        <em>({word.correct_guesses}) </em>
      </li>
    )) //.shuffle()



    var to_list = this.state.words.map((word, index) => (
      <li
        data-index={index}
        key={index}
        onClick={ this.wordSelected.bind(this, word, 'to') }
      >
        {word.to}
        <em>({word.correct_guesses}) </em>
      </li>
    )) //.shuffle()


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

