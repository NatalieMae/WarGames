// function card(value, name, suit) {
//     this.value = value;
//     this.name = name;
//     this.suit = suit;
// }

// function deck() {
//         this.names = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
//         this.suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
//         let cards = []; 
    
//     for(let n = 0; n <this.names.length; n++) {
//         for(let s = 0; s <this.suits.length; s++){
//             cards.push( new card( n+1, this.names[n], this.suits[s]));
//     }
// }
// return cards;
// }





// let myDeck = new deck();


// window.onload = function() {

//     for(let i=0; i < myDeck.length; i++) {
//         div = document.createElement('div');
//         div.className = 'cards';
        
//         if(myDeck[i].suit === 'Diamonds') {
//             let suits = '&diams;';
//         } else {
//             let value = '&' + myDeck[i].suit.toLowerCase() + ';';
//         }
//         div.innerHTML = '.number' + myDeck[i].name + '.suit' + deck + '';
//         document.body.appendChild(div);
//         }
//     }

