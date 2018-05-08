import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="pokedex">
        <div className="top-bar"></div>
        <div className="visor">
          <button class="visor__action-button"></button>
        </div>
        <div className="bottom-bar"></div>
      </div>
    );
  }
}

export default App;
