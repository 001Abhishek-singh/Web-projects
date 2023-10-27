// (1/sep/2023) in this session we will try to generate the QR code by using the html,css,javascript

let imgBoxval = document.getElementById("ImgBox");
let qrImageval = document.getElementById("qrImage");
let qrTextval = document.getElementById("qrText");

function generateQR(){
    if(qrTextval.value.length>0){
        qrImageval.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrTextval.value;
        imgBoxval.classList.add("show-img");
    }
    else{
        qrTextval.classList.add('error');
        setTimeout(() => {
            qrTextval.classList.remove('error');
        }, 1000);
    }
}