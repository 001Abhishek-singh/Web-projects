// (10/09/23) in this session we are going to create a Image scrolling page by using the html,css & javascript.

let scrollContainer = document.querySelector(".gallery");
let mybackbutton = document.getElementById("backbutton");
let myforwardbutton = document.getElementById("forwardbutton");

scrollContainer.addEventListener("wheel",(even)=>{
    even.preventDefault(); // it will prevent the default upward & downward scroll
    scrollContainer.scrollLeft += even.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
})
mybackbutton.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
})
myforwardbutton.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
})