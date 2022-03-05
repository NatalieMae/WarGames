const CARD_VALUE_MAP = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
}   

const deckOneDiv = document.querySelector(".deck-one")
const cardOne = document.querySelector(".card-one")
const divText = document.querySelector("div-text")
const deckTwoDiv = document.querySelector(".deck-two")
const cardTwo = document.querySelector(".card-two")

let deckOne = ""; 
let deckTwo = "";
let isRoundWinner = "";


function startGame() {
    const deck = new Deck()
    deck.shuffle()
    const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
    deckOne = new Deck(deck.cards.slice(0, deckMidpoint))
    deckTwo = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))
    isRoundWinner = false
    isGameOver = false

    clearHtmlTextContent()
}

function resetData() {
    deckOne = "";
    deckTwo = "";
    isRoundOver = false;
    isGameOver = false;
}

function clearHtmlTextContent() {
    isRoundWinner = false
    cardOne.innerHTML = ""
    cardTwo.innerHTML = ""
    divText.innerText = ""

    dealCards()
}

function flipCards() {
    isRoundWinner = true

    const playerOne = deckOne.pop()
    const playerTwo = deckTwo.pop()

        playerOne.appendChild(deckOne.getHTML())
        playerTwo.appendChild(deckTwo.getHTML())

        clearHtmlTextContent()

        if(isRoundWinner())
    





document.addEventListener("click", () => {
    if (isGameOver) {
        startGame()
        return 
    }
    if (isRoundOver) {
        clearHtmlTextContent();
        renderDeckCount();
    } else {
        flipCards();
    }
})
}