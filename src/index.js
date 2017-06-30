import React from 'react';
import ReactDOM from 'react-dom';
import CardList from './CardList';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

Array.prototype.shuffle = function() {
  var i = this.length, j, temp;
  if ( i === 0 ) return this;
  while ( --i ) {
     j = Math.floor( Math.random() * ( i + 1 ) );
     temp = this[i];
     this[i] = this[j];
     this[j] = temp;
  }
  return this;
}

ReactDOM.render(<CardList />, document.getElementById('root'));
registerServiceWorker();
