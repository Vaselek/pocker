export default class PokerHand {
    constructor(cards) {
        this.cards = cards;
    };
    getOutcome() {
        const ranks = this.cards.map(function(card) { return card.rank });
        let counts = {};
        let msgs = [];
        ranks.forEach(function(x) {
            counts[x] = (counts[x] || 0) + 1;
        });
        Object.keys(counts).forEach(function(key) {
            if (counts[key] === 5) {
                msgs.push({msg: 'Flash!', rank: key});
            } else if (counts[key] === 3 ) {
                msgs.push({msg: 'Triple!', rank: key});
            } else if (counts[key] === 2) {
                msgs.push({msg: 'Couple!', rank: key});
            }
        });
        return msgs;
    }
}