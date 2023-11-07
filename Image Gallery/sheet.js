// (07/11/23) In this session we are going to create a Image Gallery by using the html,css & javascript
const ImageBox = document.getElementById("ImageBox");
const Imagesite = document.getElementById("Imagesite");

function openImg(pic){
    ImageBox.style.display = "flex";
    Imagesite.src = pic; 
}

function closeImg(){
    ImageBox.style.display = "none";
}
