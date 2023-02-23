let answer = document.getElementById("answer");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

function multiply(){
    answer.innerText = input1.value * input2.value;
    if(input1.value <= 0 || input2.value <= 0){
    answer.innerText = "Het antwoord is te laag";
    }
}
function devide(){
    answer.innerText = input1.value / input2.value;
    if(input1.value <= 0 || input2.value <= 0){
        answer.innerText = "Het antwoord is te laag";
    }
}
function add(){
    answer.innerText = Number(input1.value) + Number(input2.value);
    if(input1.value <= 0 || input2.value <= 0){
        answer.innerText = "Het antwoord is te laag";
    }
}
function minus(){
    answer.innerText = input1.value - input2.value;
    if(input1.value <= 0 || input2.value <= 0){
        answer.innerText = "Het antwoord is te laag";
    }
}