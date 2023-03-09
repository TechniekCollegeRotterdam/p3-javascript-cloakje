let button = document.getElementById("btn")

window.addEventListener("keydown",function(e) {
    console.log(e.key)



if(e.key == 'h' ){
    console.log("bart")
}
else{
    console.log("verkeerde toets")
}
});

window.addEventListener("mousemove", function(e){
    console.log(e.clientX)

if(e.clientX == '0'){
    console.log("ik ben aan de zijkant")
}
})



