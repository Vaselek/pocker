export default class CardDeck {

    constructor() {
        this.deck = this.buildDeck();
    }


    buildDeck() {
        let deck = [];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];
        const suits = ['spades', 'diams', 'hearts', 'cubes'];
        suits.forEach(function(suit) {
            ranks.forEach(function(rank) {
                deck.push({suit: suit, rank: rank})
            });
        });
        return deck;
    };

    getCard() {
        var cardIndex = Math.floor(Math.random()*this.deck.length);
        return this.deck.splice(cardIndex, 1)[0];
    }

    getCards(num) {
        var cards = [];
        for (let i=0; i < num; i++) {
            let card = this.getCard();
            cards.push(card);
        }
        return cards;
    }

}
