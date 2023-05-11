let output = document.querySelector('.output')


const book = {
    title: 'dungeon',
    author: 'bart Slagboom',
    publisher: 'stroop',
    year: 2000,
    sold: 200000,
    price: '34,99',

}

output.innerHTML = `
<p>strings ${book.title}</p>
<p>strings ${book.author}</p>
<p>strings ${book.publisher}</p>
<p>strings ${book.year}</p>
<p>strings ${book.sold}</p>
<p>strings ${book.price}</p>
`