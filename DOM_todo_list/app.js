let button = document.getElementById("addtodo")
let input = document.getElementById("inputfield")
let container = document.getElementById("todocontainer")

button.addEventListener("click", function(){
//aanmaken van een p element oftewel 


let paragraph = document.createElement("p");
paragraph.innerText = inputfield.value;

container.appendChild(paragraph);

//input wordt leeg gemaakt nadat het is toegevoegd aan de paragraaf 
inputfield.value = "";

});
