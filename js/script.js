/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

//declaring a variable to shorten syntax when manipulating the DOM
const html = document.querySelector(".quote-box");

//Below is the array of nested objects that are the quotes
const quotes = [
    {
        quote: 'My biggest motivation? Just to keep challenging myself. I see life almost like one long University education that I never had — every day I’m learning something new.',
        source:"Richard Branson, founder Virgin Group",

    },
    {
        quote:'Every time you state what you want or believe, you’re the first to hear it. It’s a message to both you and others about what you think is possible. Don’t put a ceiling on yourself.',
        source:"Oprah Winfrey, media proprietor",
    },
    {
        quote:'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.',
        source:"Steve Jobs, Co-founder, CEO, Chairman Apple Inc.",
    },
    {
        quote:'I knew that if I failed I wouldn’t regret that, but I knew the one thing I might regret is not trying."',
        source:"Jeff Bezos, founder and CEO Amazon",
    },
    {
        quote:"Whether you think you can, or think you can’t — you’re right.”",
        source:"Henry Ford, Founder Ford Motor Company",
    },
    {
        quote:'Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve."',
        source:"Mary Kay Ash, Founder Mary Kay Cosmetics",
    },
    {
        quote:'You don’t learn to walk by following rules. You learn by doing and falling over.',
        source:"Richard Branson, founder Virgin Group",
    },
    {
        quote:'When you find an idea that you just can’t stop thinking about, that’s probably a good one to pursue.',
        source:"Josh James, co-founder and CEO Omniture, founder and CEO Domo",
    },
    {
        quote:'It’s not about ideas. It’s about making ideas happen.',
        source:"Scott Belsky, co-founder Behance",
    },
    {
        quote:'Entrepreneur is someone who has a vision for something and a want to create.',
        source:"David Karp, founder and CEO Tumblr",
    },
    {
        quote: 'Live simply, love generously, care deeply, speak kindly, leave the rest to God.',
        source: "Ronald Reagan",
        year: 1982,
        citation: "https://www.lifehack.org/articles/productivity/55-inspiring-quotes-from-presidents-that-will-change-your-life.html"
    },
    {
        quote: 'Never question another man’s motive. His wisdom, yes, but not his motives.',
        source: "Dwight D. Eisenhower",
        year: 1954,
        citation: "https://www.lifehack.org/articles/productivity/55-inspiring-quotes-from-presidents-that-will-change-your-life.html"
    },
];

/***
 * `getRandomQuote` function
***/
//Function to choose a random quote from the quotes array
const getRandomQuote = (arr) => {
    const quoteIdx = Math.floor(Math.random() * arr.length);
    const selected = arr[quoteIdx];
    return selected;
}

/***
 * `printQuote` function
***/

//Function to generate a random rgb value, this gets called by the button in the html document to change the background color
const randomBgColor = () => {
    //Function to get a random number between 0 and 256 for RGB 
    function random256(){
        return Math.floor(Math.random() * 256);
    };
    const bgRGB = `rgb(${random256()},${random256()},${random256()})`;
    console.log(bgRGB);
    document.body.style.backgroundColor = bgRGB;
}

//Function to display a random quote to the browser. The button in the html document calls this function.
const printQuote = () =>{
    randomBgColor();
    let quotePick = getRandomQuote(quotes);
        if(quotePick.hasOwnProperty('year') && quotePick.hasOwnProperty('citation') == true){
            html.innerHTML = `<p class="quote">${quotePick.quote}</p>
            <p class="source">${quotePick.source}<a href="${quotePick.citation}" target="_blank"><span class="citation">Source</span></a><span class="year">${quotePick.year}</span></p>`;
        } else {
            html.innerHTML = `<p class="quote">${quotePick.quote}</p>
            <p class="source">${quotePick.source}`;
        }
}

//function to automatically change background color and quote in DOM
const autoGen = () => {
    setInterval(function(){printQuote()}, 5000);
}

//Calling functions so that a quote generates when the page is loaded
printQuote();
autoGen();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
