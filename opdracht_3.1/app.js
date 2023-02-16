let text = document.getElementById("text")

text.innerText = "u heeft voldoende budget";

let budget = 100;

let product = prompt();

if (budget > product ) {
    text.innerText = "u heeft voldoende budget"
    text.style.color = "green";
} else{
    text.innerText = "u heeft niet genoeg budget";
    text.style.color = "red"
}