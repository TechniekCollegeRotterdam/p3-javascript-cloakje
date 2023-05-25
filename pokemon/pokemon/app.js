let output = document.querySelector(".pokemons");
let out = "";

fetch("./pokemon.json")
  .then((response) => response.json())
  .then((pokemons) => {
    for (let pokemon of pokemons) {
      out += `
    <h1> ${pokemon.name} </h1>
    <img src="${pokemon.img}">
    `;
    }
    output.innerHTML = out;
  });