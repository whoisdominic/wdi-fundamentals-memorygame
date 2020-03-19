const cards = ['queen','king','queen','king'];

let cardsInPlay = []

let cardOne = cards[0];
let cardTwo = cards[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log(`User flipped ${cardOne}!`);
console.log(`User flipped ${cardTwo}!`);

if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert('You found a match!');
    } else {
        alert('Sorry, Try Again');
    }
}
























//OLD CODE ---------------------------------------------------------
//----------------------------------------------------------------//

// console.log("Up and running!");

// let cardOne = "King";
// let cardTwo = "King";
// let cardThree = "Queen";
// let cardFour = "Queen";

// console.log('Player flipped ' + cardOne + ' and ' + cardThree);


