// (21/09/23) in this session we are going to create a notification bar by using the html,css & javascript.
let notifiToast = document.getElementById('notification-toast');
let successMsg = `<i class="fa-solid fa-circle-check"></i> Successfully submitted`;
let errorMsg = `<i class="fa-solid fa-circle-xmark"></i> Please fix the error`; // creating the msg for notification bar
let invalidMsg = `<i class="fa-solid fa-circle-exclamation"></i> Invalid input,check again`;

function showToast(msg){
    let toast = document.createElement('div');// creating a div element
    toast.classList.add('toast');// creating a toast class name 
    toast.innerHTML = msg; // expressing the content inside the div
    notifiToast.appendChild(toast); // adding the div inside the notification-toast id

    if(msg.includes('error')){
        toast.classList.add(`error`); // creating a error class
    }
    if(msg.includes('Invalid')){
        toast.classList.add('invalid'); // creating a invalid class
    }

    setTimeout(() =>{
        toast.remove();
    },6000); // 6000 miliseconds indicate 6 seconds
}
