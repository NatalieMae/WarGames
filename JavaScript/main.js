
// class card {
//     constructor(suit, value) {
//         this.suit = suit;
//         this.value = value;
//     }
// }
const suits = ['spades', 'hearts', 'clubs', 'diamonds'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

function deckBuilder() 
{
    let deck = new Array();
    
for(let s = 0; s < suits.length; s++) 
    {
    for(let v = 0; v < values.length; v++) 
        {
            let card = {Value: values[x], Suit: suits[i]};
            deck.push(card);
        }
    }
        return deck;
}
// create a loop of some sort to match up the values and suits. They created
//a for loop to make the cards cycle through the whole deck. I believe
//I should be doing a do...while loop for the game of War.


