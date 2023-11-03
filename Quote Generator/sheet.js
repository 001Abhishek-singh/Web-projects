// (31/10/23) in this session we are going to create a quote generator by using the html, css & javascript
const button = document.getElementById('btn');
const apiURL = "https://api.quotable.io/random";
const quoteElement = document.getElementById('quote-box'); // we simply get the id by using the dom manipulation
const authorElement = document.getElementById('author');

async function getQuote(){

    // if the file faces any kind of error then we want to show that error and this can be only possible by try and catch method
    try {
        button.innerText = "Loading...";
        button.disabled = true;    // if something went wrong then button will be disable
        quoteContent = "Uploading...";
        quoteAuthor = "Uploading...";
        const response = await fetch(apiURL); // we are fetching the random quote api
        const data = await response.json();  // apiURl object created inside the data variable and this also act as object 
        const quoteContent = data.content; // getting the content property  from the data object
        const quoteAuthor = data.author;  // getting the author property from the data object
        quoteElement.innerText = quoteContent;
        authorElement.innerText = " ~ " + quoteAuthor;
        button.innerText = "Generate quote";
        button.disabled = false; // if data come on the screen then button will be enable
    } catch (error) {
        quoteElement.innerText = "An error occured, try again alter";
        authorElement.innerText = "Error, try again later";
        button.innerText = "Generate quote";
        button.disabled = false; // if something went wrong then button will be enable 
    }
}
getQuote(); // this function call because we want to display the quote initially when anyone visit our website then in starting they can see any type of quote
button.addEventListener('click',getQuote)
