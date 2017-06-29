import React, { Component } from 'react';
import './CardList.css';

class CardList extends Component {

  constructor() {
    super();
    this.state = {
      selected_from_word_id: null,
      selected_to_word_id: null,
      words: [
        { id: 1,
          from: 'en',
          to: 'on',
          correct_guesses: 0,
        },
        { id: 2,
          from: 'to',
          to: 'two',
          correct_guesses: 0,
        },
        { id: 3,
          from: 'tre',
          to: 'three',
          correct_guesses: 0,
        },
        { id: 4,
          from: 'fire',
          to: 'four',
          correct_guesses: 0,
        }
      ]
    }
  };


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
        onClick={ this.wordSelected.bind(this, word, 'from') }>
        {word.from}
      </li>
    ))

    var to_list = this.state.words.map((word, index) => (
      <li
        data-index={index}
        key={index}
        onClick={ this.wordSelected.bind(this, word, 'to') }>
        {word.to}
      </li>
    ))


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

