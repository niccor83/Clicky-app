import React, { Component } from 'react';
import Jumbotron from './components/Jumbotron';
import Wrapper from './components/Wrapper';
import GameTile from './components/GameTile';
import game from './game.json';
import './App.css';

class App extends Component {
  state = {
    game: game,
    arrayClicked: [],
    score: 0,
    highScore: 0,
  };

  clickCount = id => {
    
    const currentOrder = this.state.game
    const newOrder = shuffle(currentOrder)
    function shuffle(imgOrder) {
      var j, x, i;
      for (i = imgOrder.length -1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = imgOrder[i];
        imgOrder[i] = imgOrder[j];
        imgOrder[j] = x;
      }
      return imgOrder;
    }
    this.setState({game:newOrder});
  
    const ArrayClicked = this.state.arrayClicked
    let duplicateBoolean = false
    ArrayClicked.map(function(singleID) {
      if (singleID === id) {
        duplicateBoolean = true
      }
      return(duplicateBoolean);
    })


    let userScore = this.state.score
    let userTopScore = this.state.highScore
    if (duplicateBoolean === false) {
      userScore =userScore + 1
      this.setState({score: userScore})

      if(userScore > userTopScore) {
        this.setState({highScore: userScore})
      }
      
      ArrayClicked.push(id)
    } else {

      userScore = 0
      this.setState({score: userScore})

      this.setState({ arrayClicked: [] })
    }
  
  };


  render() {
    return (
      <Wrapper>
        <Jumbotron>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-3">
                <h1 className="display-4">Clicky Memory Game: Simpsons Edition</h1>
                <h3>Click on an image to earn points, but don't click on any more than once!</h3>
                <div className="row d-flex justify-content-around mt-5">
                <h2>Score: {this.state.score}</h2>
                <h2>High Score: {this.state.highScore}</h2>
                </div>
              </div>
            </div>
          </div>
        </Jumbotron>

        <div className="container">
          <div className="row d-flex justify-content-around">
            {this.state.game.map(game => (
              <GameTile
                clickCount={this.clickCount}
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
