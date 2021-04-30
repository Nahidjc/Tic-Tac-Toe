import React from "react";
import "./App.css";
import Game from "./components/game";
const app = () => {
  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <Game></Game>
    </div>
  );
};

export default app;
