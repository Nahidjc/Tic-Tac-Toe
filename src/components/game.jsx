import React, { Component } from "react";
import Board from "./board";

class game extends Component {
  onClick = (i) => {
    console.log(i);
  };

  state = {
    history: [{ squares: Array(9).fill(null) }],
  };
  render() {
    return (
      <div>
        <h1>Game Component</h1>
        <Board onClick={this.onClick} squares={this.state.history[0]} />
      </div>
    );
  }
}

export default game;
