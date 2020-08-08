import React, { Component } from 'react';
import ReactDice from 'react-dice-complete';
import 'react-dice-complete/dist/react-dice-complete.css';

export default class Dice extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <ReactDice
          numDice={1}
          faceColor={this.props.faceColor}
          rollTime={this.props.rollTime}
          rollDone={this.rollDoneCallback}
          ref={(dice) => (this.reactDice = dice)}
        />
      </div>
    );
  }

  rollAll() {
    this.reactDice.rollAll();
  }

  rollDoneCallback(num) {
    alert(`You rolled a ${num}`);
  }
}
