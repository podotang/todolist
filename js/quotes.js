const quotes =[
{
    quoto: "The only way to do great work is to love what you do." ,
    author :  " - Steve Jobs",
},
{
    quoto: "Don't watch the clock; do what it does. Keep going." ,
    author :  " - Sam Levenson",
},
{
    quoto: "Life is 10% what happens to us and 90% how we react to it." ,
    author :  " - Charles R. Swindoll",
},
{
    quoto: "It is our choices, Harry, that show what we truly are, far more than our abilities." ,
    author :  " - J.K. Rowling",
},
{
    quoto: "Life is what happens when you're busy making other plans." ,
    author :  " - John Lennon",
},
{   
    quoto: "You don't have to be great to start, but you have to start to be great." ,
    author :  " - Zig Ziglar",
},
{
    quoto: "The best way to predict your future is to create it." ,
    author :  " - Abraham Lincoln",
},
{
    quoto: "It always seems impossible until it's done." ,
    author :  " - Nelson Mandela",
},
{
    quoto: "I find that the harder I work, the more luck I seem to have." ,
    author :  " - Thomas Jefferson",
},
{
    quoto: "The expert in anything was once a beginner." ,
    author :  " - Helen Hayes",
}
];

const quoteContainer = document.querySelector("#quote");
const quoteTitle = document.createElement("h2");
quoteTitle.innerText = "TODAY'S QUOTE";
quoteContainer.appendChild(quoteTitle);

const quoteText = document.createElement("span");
const quoteAuthor = document.createElement("span");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quoteText.innerText = todayQuote.quoto;
quoteAuthor.innerText = todayQuote.author;

quoteContainer.appendChild(quoteText);
quoteContainer.appendChild(document.createElement("br"));
quoteContainer.appendChild(quoteAuthor);