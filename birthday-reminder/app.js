let output = document.querySelector(".birthdays");
let out = "";
let button = document.querySelector(".clearbtn");

fetch("./birthday.json")
  .then((response) => response.json())
  .then((birthdays) => {
    for (let birthday of birthdays) {
      out += `
    <h1> ${birthday.name} </h1>
    <p>${birthday.age}</p>
    <img src="${birthday.img}">
    `;
    }
    output.innerHTML = out;
  });

  button.addEventListener("click", function(){

    output.innerHTML =  "";

  })
