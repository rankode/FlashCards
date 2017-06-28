import React, { Component } from 'react';
import './CardList.css';

class CardList extends Component {

  constructor() {
    super();
    this.state = {
      words: [
        { id: 1,
          from: 'en',
          to: 'on'
        },
        { id: 2,
          from: 'to',
          to: 'two'
        },
        { id: 3,
          from: 'tre',
          to: 'three'
        },
        { id: 4,
          from: 'fire',
          to: 'four'
        }
      ]
    }
  };

  render() {

      debugger;
    var list = this.state.words.map((word, index) => (
      <li data-index={index} key={index}> {word.from} </li>
    ))


    return (
      <div className="CardList">
        <h1> Flash Cards </h1>
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}

export default CardList;

