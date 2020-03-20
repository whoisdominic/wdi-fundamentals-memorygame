const cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
];

let cardsInPlay = []

function checkForMatch() {
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert('You found a match!');
        } else {
            alert('Sorry, Try Again');
        }
    } 
}

function flipCard(cardId) {
    console.log("User flipped " + cards[cardId].rank);
    cardsInPlay.push(cards[cardId].rank);
    console.log(cards[cardId].suit);
    console.log(cards[cardId].cardImage);
    checkForMatch();
}


flipCard(0);
flipCard(2);







//OLD CODE ---------------------------------------------------------
//----------------------------------------------------------------//

// console.log("Up and running!");

// let cardOne = "King";
// let cardTwo = "King";
// let cardThree = "Queen";
// let cardFour = "Queen";

// console.log('Player flipped ' + cardOne + ' and ' + cardThree);


