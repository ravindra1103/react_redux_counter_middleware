import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../actions/counter';

export class App extends Component {
  constructor(props) {
    super (props);
    this._increment = this._increment.bind(this);
    this._decrement = this._decrement.bind(this);
  }
  _increment() {
    incrementCounter();
  }
  _decrement() {
    decrementCounter();
  }
  render () {
    let { counter } = this.props;
    return (
      <div>
        <h1>Counter</h1>
        <p>{counter}</p>
        <button onClick={this._increment}>Increment</button>
        <button onClick={this._decrement}>Decrement</button>
      </div>
    );
  }
}

App.propTypes = {
  counter: PropTypes.number
};
let select = (state) => ({
  counter: state.counterApp.counter
});
export default connect(select) (App);
