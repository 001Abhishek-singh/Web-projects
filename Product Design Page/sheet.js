// (29/09/23) In this session we will design a product sample by using the html,css & javascript
const productImg = document.getElementById("productImg");
const btn = document.getElementsByClassName("btn"); // getting the class from the html file

btn[0].onclick = function(){
    productImg.src = "img1.jpeg";

    for(item of btn){  // this will remove the current button item 
        item.classList.remove("active");
    } 
    this.classList.add("active"); // this will add the current button item
}

btn[1].onclick = function(){
    productImg.src = "img2.jpeg";

    for(item of btn){
        item.classList.remove("active");
    }
    this.classList.add("active");
}

btn[2].onclick = function(){
    productImg.src = "img3.jpeg";
    
    for(item of btn){
        item.classList.remove("active");
    }
    this.classList.add("active");
}