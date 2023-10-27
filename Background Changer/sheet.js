// (11/09/23) in this session we are going to create a Website Dark Mode by using html,css & javascript.
let mysun = document.getElementById("sun-picture");
mysun.onclick = function(){
    document.body.classList.toggle("my-theme");
    if(document.body.classList.contains("my-theme")){
        mysun.src = "moon.png";
    }else{
        mysun.src = "sun.png";
    }
}
