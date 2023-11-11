// (10/11/2023) In this session we are going to create a contact form by using the html,css & javascript
const sender = document.getElementById("email").value;
const myname = document.getElementById("name").value;
const number = document.getElementById("numberd").value;
const message = doucment.getElementById("textarea").value;

function sendEmail(){
    Email.send({
        secureToken: "106e2a4c-9b67-4991-a1a2-2bf34ebbf255",
        To : '001abhishek287@gmail.com',  // it indicate that where we want to receive(send) our enquiry
        From : sender,  // it indicate that who is sending the enquiry.
        Subject : "Your Contact details",
        Body : "Name: " + myname + "<br> Email: " + sender + "<br> Number: " + number + "<br> Message: " + message
    }).then(
      _message => alert("Message sent successfully")
    );
}