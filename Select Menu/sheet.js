// (25/08/23) in this session we will try to create a menu dropdown box by using the html,css & javascript.

let selector = document.getElementById("selector");
let textvalue = document.getElementById("selectp");
let options = document.getElementsByClassName("option");
let list = document.getElementById("list");
let dropicon = document.getElementById("dropicon");

selector.onclick = function(){
    list.classList.toggle("hide");
    dropicon.classList.toggle("rotate");
}

for(value of options){
    value.onclick = function(){
        textvalue.innerHTML = this.textContent;
        list.classList.toggle("hide");
        dropicon.classList.toggle("rotate");
    }
}
   