// (17/09/2023) in this session we will create a project of Image Background Changer by using the html,css & javascript.
var ImgBox = document.querySelector(".img-box");
var ImagWrap = document.querySelector(".img-wrap");
var originalImg = document.getElementById("originalImg");
var line = document.getElementById("line");

originalImg.style.width = ImgBox.offsetWidth + "px";

var leftSpace = ImgBox.offsetLeft;

ImgBox.onmousemove = function(e){
    // e.pageX; // it will give the x position of the cursor and it will give the X position with respect of the body.
    var boxWidth = (e.pageX - leftSpace) + "px";
    ImagWrap.style.width = boxWidth;
    line.style.left = boxWidth;
}
