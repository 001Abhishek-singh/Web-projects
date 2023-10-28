// (28/10/2023) Today we are going to create a feedback ui for the website by using the html,css & javascript
const for_emojis = document.querySelectorAll(".for-emoji_text");
let selectedValue  = '';
const button = document.getElementById("btn");
const main_container = document.getElementById("main-container");

for_emojis.forEach((for_emoji) => {
    for_emoji.addEventListener('click',(event) =>{
        removeActive();
        selectedValue = event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active")
    });
})

button.addEventListener('click',()=>{
    if(selectedValue !== ""){
        main_container.innerHTML = `
        <strong> Thank you!<strong>
        <br>
        <br>
        <strong>Feedback: ${selectedValue}<strong>
        <p> We'll use your feedback to improve our customer support.</p>
        `;
    }
})
function removeActive(){
    for_emojis.forEach((for_emoji) => {
        for_emoji.classList.remove("active");
    }
)}