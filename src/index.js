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

Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};

ReactDOM.render(<CardList />, document.getElementById('root'));
registerServiceWorker();
