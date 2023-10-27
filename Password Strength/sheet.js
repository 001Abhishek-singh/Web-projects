// (6/09/23) in this session we are going to make a project on checking the password strength by using the html,css & javascript.
let password = document.getElementById("mypassword");
let message = document.getElementById("mypara");
let spanvalue = document.getElementById("myspanvalue");

password.addEventListener('input',() => {
    if(password.value.length > 0){
        message.style.display = "block";
    }else{
        message.style.display = "none";
    }
    if(password.value.length < 5){
        spanvalue.innerHTML = "weak";
        password.style.borderColor = "red";
        message.style.color = "red";
    }
    else if(password.value.length >=5 && password.value.length < 9){
        spanvalue.innerHTML = "medium";
        password.style.borderColor = "yellow";
        message.style.color = "yellow";
    }
    else{
        spanvalue.innerHTML = "strong";
        password.style.borderColor = "green";
        message.style.color = "green";
    }
})