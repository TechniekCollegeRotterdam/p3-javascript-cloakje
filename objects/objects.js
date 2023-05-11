let output = document.querySelector('.output')

const car = {
    //properties
    name: 'kruiwagen',
    model: 'blazer6000',
    weight: '150kg',
    color: 'orange',
    repairs: ["wiel", "handvat", "bak",],

    //methods 
    start: function () {
        return 'ik loop vooruit';
    },
    drive: function () {
        return 'ik ben aan het lopen';
    },
    brake: function () {
        return 'ik ga langzamer lopen';
    },
    stop: function () {
        return 'ik sta stil';
    },
};

output.innerHTML = `
<p>De naam van de auto ${car.name}</p>
<p>${car.drive()}</p>

`
