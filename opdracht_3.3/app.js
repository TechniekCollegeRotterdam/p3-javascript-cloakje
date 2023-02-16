let getal = 0;
let output = document.getElementById("getal");

function verhoogGetal(){
   

   

    if(getal == 10) {
        getal = 0;
    } else{
        getal++;
    }
    output.innerText = getal;
}