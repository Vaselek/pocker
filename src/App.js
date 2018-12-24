import React, { Component } from 'react';
import Card from './components/Card/Card';
import CardDeck from './components/CardDeck/CardDeck';
import PokerHand from './components/PokerHand/PokerHand';
import './App.css';

class App extends Component {

  state = {
    deck: [],
    cards: [],
    outcome: []
  };

  startGame() {
    const deck = new CardDeck();
    const cards = deck.getCards(5);
    const pokerHand = new PokerHand(cards);
    const outcome = pokerHand.getOutcome();
    this.setState({deck});
    this.setState({cards});
    this.setState({outcome})
  }

  render() {
      const cards = this.state.cards.map((card, index) => {
        return <Card key={index}
                     rank={card.rank}
                     suit={card.suit} />
      });
      const outcome = this.state.outcome.map((msg) => {
          return <div>
            <div>Combo: {msg.msg}</div>
            <div>Rank {msg.rank}</div>
          </div>
      })

      return (
        <div className="App">
            <button type='submit' onClick={()=>this.startGame()}>Shuffle cards</button>
            <div className="cards">
                {cards}
            </div>
            {this.state.outcome.length > 0 && outcome}
        </div>
      );
    }
}

export default App;
