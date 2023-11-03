// (01/11/2023) In this session we are going to create a Temperature Converter by using the html,css & javscript.
const celsiusVal = document.getElementById("celsius");
const fahrenheitVal = document.getElementById("fahrenheit");
const kelvinVal = document.getElementById("kelvin");  // actually we are getting the id from the html 

// creating a function where we will perform our major task
function computeTemp(event){ 
    const currentValue = +event.target.value; // getting the value from the input element from html file & converting into the number
    // event.target.name se naam mil raha hai input se
    // event.target.value se value mil rahi hai input se
    // fahrenheitVal.value me 'currentValue pe performed operation/calculation ki value assign ki gyi hai'
    // currentValue me event.target.value se only integer value li gyi hai 
    switch (event.target.name) { // event.target.name will tell us about the value on which case we want to work or on which method we are implementing the temperature conversion formula 
        case "celsius": // switch cases 
            fahrenheitVal.value = (currentValue * 1.8 + 32).toFixed(2); // assigning the value to fahrenheitVal by using the suitable formula and also we fixed the value upto 2 after decimal point
            kelvinVal.value = (currentValue + 273.32).toFixed(2);            
            break;
        case "fahrenheit":
            celsiusVal.value = ((currentValue - 32) / 1.8).toFixed(2);
            kelvinVal.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
            break;
        case "kelvin":
            celsiusVal.value = (currentValue - 273.32).toFixed(2);
            fahrenheitVal.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2); // converting the kelvin value into celsius and fahrenheit
            break;
        default:
            break;
    }
}
