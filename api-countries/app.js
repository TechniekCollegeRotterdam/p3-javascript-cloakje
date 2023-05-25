let output = document.querySelector(".countries");
let out = "";

fetch(`https://restcountries.com/v3.1/all/`)
  .then((response) => response.json())
  .then((data) => {
    for (let d of data) {
      out += `
            <div>
          <p>${d.name.common}</p>
          <img src="${d.flags.png}">
          </div>
        
          `;
    }
    output.innerHTML = out;
  });
