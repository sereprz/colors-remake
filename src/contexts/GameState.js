import React, { createContext, Component } from 'react';

const maxSize = 10;

export const GameState = createContext();

class GameStateProvider extends Component {

  state = {
    level: 1,
    size: 6,
    color: [200, 100, 35]
  }

  updateGameState = () => {

    this.setState({ level: this.state.level + 1 });
    this.setState({ size: this.state.size < maxSize ? this.state.size + 1 : maxSize })
    this.setState({ color: [Math.floor(Math.random() * (360)), 100, Math.ceil(Math.random() * (90))] })
  }

  render() {
    return (
      <GameState.Provider value={{ ...this.state, updateGameState: this.updateGameState }}>
        {this.props.children}
      </GameState.Provider>
    );
  }
}

export default GameStateProvider;