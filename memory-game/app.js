const cards = ['queen','king','queen','king'];

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
    console.log("User flipped " + cards[cardId]);
    cardsInPlay.push(cards[cardId]);
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


