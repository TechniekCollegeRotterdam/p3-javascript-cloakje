let output = document.querySelector('.output')

const person = {
    name: 'henk',
    age: 69,
    birthdate: '16-07-1960',
    gender: 'refridgerator',
    deceased: true,
    hobbys:['drive', 'fishing', 'gaming', 'sleeping',]

}

output.innerHTML = `
<p>${person.name}</p>
<p>${person.age}</p>
<p>${person.birthdate}</p>
<p>${person.gender}</p>
<p>${person.deceased}</p>
`