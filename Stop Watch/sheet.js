// (05/09/2023) in this session we are going to create a stop watch by using the html,css & javascript 
let[seconds,minutes,hours] = [0,0,0];
let displaymytime = document.getElementById("displaytime");
let timer = null;
function run(){
    seconds++;
    if(seconds === 60){
        seconds = 0;
        minutes ++;
        if(minutes === 60){
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    displaymytime.innerHTML = h +":"+ m + ":"+s;
}

function watchStart(){
    if(timer!==null){
        clearInterval(timer);
    }
    timer = setInterval(run,1000);
}
function watchStop(){
    clearInterval(timer);
}
function watchReset(){
    clearInterval(timer);
    [seconds,minutes,hours] = [0,0,0];
    displaymytime.innerHTML = "00:00:00";
}