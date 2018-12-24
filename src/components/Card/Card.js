import React, {Component} from 'react';

import './Card.css';

class Card extends Component {

    render() {
        const mapSuitToSymb = {
            'spades': '♠',
            'diams' : '♦',
            'hearts': '♥',
            'clubs': '♣'
        };
        return(
            this.props.rank && this.props.suit && <div className={`Card Card-rank-${this.props.rank} Card-${this.props.suit}`}>
                <span className="Card-rank">{this.props.rank.toUpperCase()}</span>
                <span className="Card-suit">{mapSuitToSymb[this.props.suit]}</span>
            </div>
        )
    }
}

export default Card;
