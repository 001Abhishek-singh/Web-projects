// (05/09/23) in this session we will learn about password toggle where we use html,css & javascript.
let myinput = document.getElementById("password-input");
let myimg = document.getElementById("eyeicon");

function showpassword(){
    if(myinput.type == "password"){
        myinput.type = "text";
        myimg.src = "viewmypass.png" // open-eye
    }
    else{
        myinput.type = "password";
        myimg.src = "viewicon.jpeg"; // close-eye
    }
} 