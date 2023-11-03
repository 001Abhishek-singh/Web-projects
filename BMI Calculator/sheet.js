// (03/11/2023) In this session we are going to create a BMI Calculator by using the html,css & javascript
const button = document.getElementById("btn");  // we are getting the ID from html element by using the getElementById  
const height_input = document.getElementById("height-input");  // we are getting the height-input id from html element by using the getElementById
const weight_input = document.getElementById("weight-input");  // // we are getting the weight-input id from html element by using the getElementById
const result_div = document.getElementById("result-div"); // getting the input div where we will show the result of the operation between height and weight
const resultlabel = document.getElementById("fordisplaypurpose"); // to get the id for labelling the value on the screen
// creating an arrow function for click event
const bmiCalculator = () =>{
    const height = height_input.value / 100 ;  // here we are getting the value of height in meter after converting from cm
    const weight = weight_input.value; // getting the value of height and weight by using the dot notation
    const BMI = weight / (height * height);  // performing the operation on the weight/ square of height
    
    result_div.value = BMI;  // assigning the value into the resut input div
    if(BMI < 17.87){
        resultlabel.innerText = " " + 'You are Under Weight';
    }
    else if(17.87<BMI && BMI <= 25.87){
        resultlabel.innerText = " " + 'You are Normal';
    }
    else if(25.87 <BMI  && BMI <= 34.23){
        resultlabel.innerText = " " + 'You are Over Weight';
    }
    else{
        resultlabel.innerText = " " + 'Obesity';
    }
}
button.addEventListener('click',bmiCalculator); // by using the addEventListener event we are connecting the button to the function

