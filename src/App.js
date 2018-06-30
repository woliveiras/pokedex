import React, { Component } from 'react'
import Cover from './components/Cover'
import Visor from './components/Visor'

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
    const styles = {
      display: 'flex',
      flexDirection: 'column',
      fontFamily: "Arial",
      textAlign: "center",
      maxWidth: '420px'
    }

    return (
      <div style={ styles }>
        <h1>Pokédex | React</h1>
        <p>Clique no centro da Pokédex</p>
        <Cover position="top" />
        <Visor 
          isVisorActive={ this.state.isVisorActive }
          toggleVisor={ this.toggleVisor } />
        <Cover position="bottom" />
      </div>
    );
  }
}

export default App;
