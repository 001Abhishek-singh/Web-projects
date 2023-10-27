// (11/09/23) in this session we are going to create a drop & drag project by using the html,css & javascript

let mylist = document.getElementsByClassName("list");
let myrightbox = document.getElementById("right");
let myleftbox = document.getElementById("left");

for(list of mylist){
    list.addEventListener("dragstart",function(e){
        let selected = e.target;

        myrightbox.addEventListener("dragover",function(e){
            e.preventDefault();
        })
        myrightbox.addEventListener("drop",function(e){
            myrightbox.appendChild(selected);
            selected = null;
        })

        myleftbox.addEventListener("dragover",function(e){
            e.preventDefault();
        })
        myleftbox.addEventListener("drop",function(e){
            myleftbox.appendChild(selected);
            selected = null;
        })
    })
}