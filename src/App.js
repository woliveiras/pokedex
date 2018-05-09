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
      maxWidth: '420px'
    }

    return (
      <div style={ styles }>
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
