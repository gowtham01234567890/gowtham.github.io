/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: `Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma
             – which is living with the results of other people’s thinking.`,
    source: 'Steve Jobs',
    citation: 'https://parade.com/937586/parade/life-quotes/',
    year: 2020
  },

  {
    quote: 'Never let the fear of striking out keep you from playing the game.',
    source: 'Babe Ruth',
    citation: 'https://parade.com/937586/parade/life-quotes/',
    year: 2020
  },

  {
    quote: 'The purpose of our lives is to be happy.',
    source: 'Dalai Lama',
    citation: 'https://parade.com/937586/parade/life-quotes/',
    year: 2020
  },

  {
    quote: 'Get busy living or get busy dying.',
    source: 'Stephen King',
    citation: 'https://parade.com/937586/parade/life-quotes/',
    year: 2020
  },

  {
    quote: 'You only live once, but if you do it right, once is enough.',
    source: 'Mae West',
    citation: 'https://parade.com/937586/parade/life-quotes/',
    year: 2020
  }

];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  const randomQuotes =  Math.floor(Math.random() * quotes.length);
  return quotes[randomQuotes];
}

/***
 * `randomColor` function
***/

function randomColor() {
  return Math.floor(Math.random() * 256);
}

/***
 * `randomRGB` function
***/

function randomRGB(value) {
  return `rgb(${value()}, ${value()}, ${value()})`;
}

/***
 * `printQuote` function
***/
function printQuote() {
  let quote = getRandomQuote();
  let backgroundColor = randomRGB(randomColor);
  let message = `<p class="quote">${quote.quote}</p>`;
  message += `<p class="source">${quote.source}`;
  if(quote.citation) {
    message += `<span class="citation">${quote.citation}</span>`;
  }
  if(quote.year) {
    message += `<span class="year">${quote.year}</span></p>`;
  }
  document.querySelector('.quote-box').innerHTML = message;
  document.body.style.backgroundColor = backgroundColor;
}
setInterval(printQuote, 3000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);