// (27/08/2023) today we will create a password generator app by using the html,css & javascript.
const passwordbox = document.getElementById("fortextpassword");
const length = 14;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbol = "!@#$%^&*()_+=<>?/\|{}[]";

const allcharacter = upperCase + lowerCase + numbers + symbol;

const Passwordfunction = () => {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random()* lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += allcharacter[Math.floor(Math.random() * allcharacter.length)];          
    }
    passwordbox.value = password;
}

function copyPassword(){
    passwordbox.select();
    document.execCommand("copy");
}