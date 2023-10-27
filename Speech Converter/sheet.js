// (21/09/23) in this session we are going to create a speech converter project by using the html,css & javascript.
let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select")// here we are selecting the select element so that we can provide the various voices to the speech converter list.

window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice,i) =>(voiceSelect.options[i] = new Option(voice.name, i)));
};

voiceSelect.addEventListener("change",() =>{
    speech.voice = voices[voiceSelect.value];
})
document.querySelector("button").addEventListener("click",() =>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})