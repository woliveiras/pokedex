import React, { Component } from 'react';
import './App.css';
import Cover from './components/Cover'

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

  renderActionButton = () => {
    if (this.state.isVisorActive) {
      return (
        <input type="text" />
      )
    }
    return (
      <button
        className="visor__action-button"
        onClick={this.toggleVisor}>
      </button>
    )
  }

  render() {
    return (
      <div className="pokedex">
        <Cover position="top" />
        <div 
          className="visor"
          style={{ height: this.state.isVisorActive ? '420px' : '' }}>
          { this.renderActionButton() }
        </div>
        <Cover position="bottom" />
      </div>
    );
  }
}

export default App;
