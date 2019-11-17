import React, { Component } from 'react';
import Jumbotron from './components/Jumbotron';
import Wrapper from './components/Wrapper';
import GameTile from './components/GameTile';
import game from './game.json';
import './App.css';

class App extends Component {
  // Setting this.state.game to the game json array
  state = {
    game: game,
    arrayClicked: [],
    score: 0,
    highScore: 0,
  };


  render() {
    return (
      <Wrapper>
        <Jumbotron>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-3">
                <h1>Clicky Game: Simpsons Edition</h1>
                <h5>Click on an image to earn points, but don't click on any more than once!</h5>
                <h3>Score: {this.state.score}</h3>
                <h3>High Score: {this.state.highScore}</h3>
              </div>
            </div>
          </div>
        </Jumbotron>

        <div className="container">
          <div className="row d-flex justify-content-around">
            {this.state.game.map(game => (
              <GameTile
                recordMemory={this.recordMemory}
                id={game.id}
                key={game.id}
                name={game.name}
                image={game.image}
              />
            ))
            }
          </div>
        </div>
      </Wrapper>

    )
      ;
  }
  
};


export default App;
