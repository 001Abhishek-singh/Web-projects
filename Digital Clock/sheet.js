// (29/09/23) In this session we are going to create a digital clock by using the html,css & javascript
const hrs = document.getElementById("Hours");
const min = document.getElementById("Minutes");
const sec = document.getElementById("Seconds");

setInterval(()=>{
    let currentTime = new Date();

    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();

},1000)
