function card(value, name, suit) {
    this.value = value;
    this.name = name;
    this.suit = suit;


function deck() {
        this.names = ['A', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        this.suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        let cards = []; 
    
    for(let v = 0; v <this.names.length; v++) {
        for(let s = 0; s <this.suits.length; s++)
            card.push( new card( n+1, this.name[n], this.suits[s]));
    }
}

return cards;



let myDeck = new deck();
console.log(myDeck);

window.onload = function() {

    for(let i=0; i < myDeck.length; i++) {
        div = document.createElement('div');
        div.className = 'card';
        
        if(myDeck[i].suit === 'Diamonds') {
            let ascii_char = '';
        } else {
            let ascii_char = '&' + myDeck[i].suit.toLowerCase() + ';';
        }
        div.innerHTML = '' + myDeck[i].name + '' + ascii_char + '';
        document.body.appendChild(div);
        }
    }
}
console.log();