
// class card {
//     constructor(suit, value) {
//         this.suit = suit;
//         this.value = value;
//     }
// }

function deckBuilder() {
    const suits = ['spades', 'hearts', 'clubs', 'diamonds'];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    
    const cards = [];
    for(let s = 0; s < suits.length; s++){
        for(let v = 0; v < values.length; v++) {
            const value = values(v);
            const suit = suits(s);
            cards.push({ value, suit });
            console.log(deckBuilder());
        }
    }
}
// create a loop of some sort to match up the values and suits. They created
//a for loop to make the cards cycle through the whole deck. I believe
//I should be doing a do...while loop for the game of War.

// return cards;
