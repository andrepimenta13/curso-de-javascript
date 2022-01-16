//Loops - for

for (let index = 1; index <= 20; index++) {
    console.log(index);

}

const cars = ['Ferrari', 'Tesla', 'Mercedes'];

for (let i = 0; i < cars.length; i++) {

    console.log(cars[i]);

};

//O for de baixo, faz exatamente a mesma coisa que o for de cima

for (let car of cars) {

    console.log(car);

};

//o forEach também faz a mesma função de cima, sem ser necessário um loop.

cars.forEach(function (car, x) {

    console.log(x);
    console.log(car);
});

//forEach com arrow function

cars.forEach(car => {
    console.log(car);
});