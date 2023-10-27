// (11/10/23) In this session we are going to create a project which is based on html,css & javascript.
var rectContainer = document.querySelector("#container");
rectContainer.addEventListener("mousemove",function(details){
    var rectangleLocation = rectContainer.getBoundingClientRect(); // it will tell the location of the given object
    var mouseCursor = details.clientX;
    var rectInside = mouseCursor - rectangleLocation.left;

    if(rectInside < rectangleLocation.width / 2){
        var redColor = gsap.utils.mapRange(0,rectangleLocation.width/2,255,0,rectInside);
        gsap.to(rectContainer,{
            backgroundColor: `rgb(${redColor},0,0)`,
            ease: Power4,
        });
    }
    // else if(rectInside == rectangleLocation.width / 2){
    //     var greenColor = gsap.utils.mapRange(rectangleLocation.width /2,rectangleLocation.width/2,0,0,0);
    //     gsap.to(rectContainer,{
    //         backgroundColor: `rgb(0,${greenColor},0)`,
    //         ease: Power4,
    //     });
    // }
    else{
        var blueColor = gsap.utils.mapRange(rectangleLocation.width/2,rectangleLocation.width,0,255,rectInside);
        gsap.to(rectContainer, {
            backgroundColor: `rgb(0,0,${blueColor})`,
            ease: Power4,
        });
    }
});

rectContainer.addEventListener("mouseleave", function(){
    gsap.to(rectContainer, {
        backgroundColor: "white",
    })
})
