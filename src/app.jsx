import React from "react";
import "./App.css";
import Game from "./components/game";
const app = () => {
  return (
    <div className="App">
      <h1>Tic Tac Toe Game</h1>
      <Game></Game>
      <br />
      <br />
      <h3>Rimi Vs Nadim</h3>
    </div>
  );
};

export default app;
