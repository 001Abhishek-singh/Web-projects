// (29/10/23) In this session we are going to create a english dictionay by using the html,css & javascript
const input = document.getElementById("input-tag");
const text = document.getElementById("para-tag");
const afterSearch = document.getElementById("after-search");
const title = document.getElementById("title-span");
const meaning = document.getElementById("meaning-span");
const audio = document.getElementById("audio");

async function fetchAPI(word){
   try {
    text.style.display = "block";
    afterSearch.style.display = "block";
    text.innerText = `Searching the meaning of "${word}`;
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result = await fetch(apiUrl).then((response) => response.json());

    if(result.title){
        meaning.style.display = "block";
        text.style.display = "none";
        title.innerText = word;
        meaning.innerText = "N/A";
        audio.src = "none";    
    }
    else{
        text.style.display = "none";
        afterSearch.style.display = "block";
        audio.style.display = "inline-flex";
        title.innerText = result[0].word;
        meaning.innerText = result[0].meanings[0].definitions[0].definition;
        audio.src = result[0].phonetics[0].audio;
    }
} catch (error) {
    text.innerText = "Oops! an error occured,please try again later..."
   } 
}
input.addEventListener("keyup",(event) =>{
    if(event.target.value && event.key === "Enter"){
        fetchAPI(event.target.value);
    }
})
