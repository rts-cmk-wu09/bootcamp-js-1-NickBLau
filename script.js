let blockQuote = document.querySelector("#myQuotes")
console.log(blockQuote);
const quotesArray = [
    ["If it isn't on Google, it doesn't exist.", " Jimmy Wales"],
    ["It's so fine and yet so terrible to stand in front of a blank canvas", " Paul Cezanne"],
    ["Good Artists Copy, Great Artists Steal", " Pablo Picasso"],
    ["Argue with idiots, and you become an idiot", " Paul Graham"],
    ["Be yourself; everyone else is already taken", " Oscar Wilde"],
    ["Simplicity is the ultimate sophistication", " Leonardo Da Vinci"],
    ["What do you hang on the walls of your mind?", " Eve Arnold"],
    ["The price of greatness is responsibility", " Winston Churchill"],
    ["The happiest people seem to be those who have no particular cause for being happy except that they are so", " William Inge"],
    ["If the Sun and Moon should ever doubt, they'd immediately go out", " William Blake"]
  ]
console.log(quotesArray);

let random = Math.floor(Math.random() * quotesArray.length);
console.log(random);


blockQuote.innerText = quotesArray[random]
// Math.random

// Math.floor

// Array.length Math.random

// innertext.html

// blockQuote.innerText = quotes.mathrandom



// blockQuote.innerText = quotesArray

// function randomQuote(event) {
// let quotesArray = Math.random(1)
// }