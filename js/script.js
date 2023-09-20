/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/
const quotes = [
   {
        quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
        source: "Patrick McKenzie",
        citation: "Twitter",
        year: 2016,
    },
    {
        quote:"The greatest glory in living lies not in never falling, but in rising every time we fall. ",
        source:"Nelson Mandela",
        
    },
    {
        quote:"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        source:"Oprah Winfrey",
        
    },
    {
        quote:"The only thing we have to fear is fear itself. ",
        source:"Franklin D. Roosevelt",
        year: 1933,
    },
    {
        quote:"Well done is better than well said.",
        source:"Benjamin Franklin",
        
    },
    {
        quote:"It is during our darkest moments that we must focus to see the light.",
        source:"Aristotle",
        
    },
    {
        quote:"Be yourself; everyone else is already taken.",
        source:"Oscar Wilde",
       
    },
    {
        quote:"Never let the fear of striking out keep you from playing the game.",
        source:"Babe Ruth",
       
    },
    {
        quote:"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
        source:"Dr. Seuss",
        
    },
    {
        quote:"If life were predictable it would cease to be life and be without flavor.",
        source:"Eleanor Roosevelt",
        
    },
    {
        quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        source: "Martin Luther King Jr.",
        citation: "Letter from Birmingham Jail",
        year: 1963,
    },
    
];



/***
 * `getRandomQuote` function
***/
// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function printQuote() {
    const quoteContainer = document.getElementById("quote-box");
    const quoteText = document.querySelector(".quote");
    const sourceText = document.querySelector(".source");

    const randomQuote = getRandomQuote();

    // Build the HTML string to display the quote
    let html = `<p class="quote">${randomQuote.quote}</p>`;
    html += `<p class="source">${randomQuote.source}`;
    
    if (randomQuote.citation) {
        html += `<span class="citation">${randomQuote.citation}</span>`;
    }
    
    if (randomQuote.year) {
        html += `<span class="year">${randomQuote.year}</span>`;
    }

    html += `</p>`;

    // Update the HTML content
    quoteContainer.innerHTML = html;
}

// Event listener for the "Next Quote" button
document.getElementById("load-quote").addEventListener("click", printQuote);

// Initial quote display
printQuote();




/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

