
document.body.addEventListener("mousemove", function(e){
    if(e.clientX <= 20){
        document.getElementById("nav").classList.add("show-nav")
    }

    if(e.clientX > 300){
        document.getElementById("nav").classList.remove("show-nav")
    }
});

document.body.addEventListener('mouseleave', function(e){
    if(e.clientX > 300){
        document.getElementById("nav").classList.remove("show-nav")
    }
});