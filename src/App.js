import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisorActive: false
    }
  }

  toggleVisor = () => {
    this.setState({
      isVisorActive: !this.state.isVisorActive
    })
  }

  render() {
    return (
      <div className="pokedex">
        <div className="top-bar"></div>
        <div 
          className="visor"
          style={{ height: this.state.isVisorActive ? '420px' : '' }}>
          <button 
            className="visor__action-button" 
            onClick={ this.toggleVisor }>
          </button>
        </div>
        <div className="bottom-bar"></div>
      </div>
    );
  }
}

export default App;
