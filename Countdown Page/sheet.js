// (10/09/23) In this session we are going to create a countdown page by using the html,css & javascript.
let countDownDate = new Date("September 11,2023 00:00:00").getTime();
let timer = setInterval(() => {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let Days = Math.floor(distance/(1000 * 60 * 60 * 24));
    let Hours = Math.floor((distance % (1000 * 60 * 60 * 60))/(1000 * 60 * 60));
    let Minutes = Math.floor((distance % (1000 * 60 * 60))/(1000 * 60));
    let Seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = Days;
    document.getElementById("hours").innerHTML = Hours;
    document.getElementById("minutes").innerHTML = Minutes;
    document.getElementById("seconds").innerHTML = Seconds;

    if(distance < 0){
        clearInterval(now);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

    }
}, 1000);