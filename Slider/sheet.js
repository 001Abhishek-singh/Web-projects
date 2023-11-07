// (07/11/23) In this session we are going to create slider of some user feedback by using the html,css & javascript
const slide = document.getElementById("slide");
const uparrow = document.getElementById("upArrow");
const downarrow = document.getElementById("downArrow");

let x = 0;
uparrow.onclick = function(){
    if(x> "-1500"){
        x = x-300; // it will use to update the height of the div
        slide.style.top = x + "px";
    }
}

downarrow.onclick = function(){
    if(x < "0"){
        x = x+300; // it will use to update the height of the div
        slide.style.top = x + "px";
    }
}
