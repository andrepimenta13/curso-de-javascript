//Map - fazer determinada função em cada item do array e retornar um novo array

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

const numbersMultipliedByTwo = numbers.map(function (number) {
    return number * 2 //multiplicar cada elemento do array por 2.
});

console.log(numbersMultipliedByTwo);


//Filter - Vai filtrar um array e retornar outro array novo baseado no filtro que passamos.

const ages = [8, 13, 27, 30, 22, 40];

const evenAges = ages.filter(function (age) {
    return age % 2 === 0 //verifica se é par e se for, adiciona a um novo array
});

console.log(evenAges);


//Reduce - é útil quando precisamos reduzir todos os valores de um array para um só. 
//Ex: somar todos os valores de um array.

const sumOfAges = ages.reduce(function (age, accumulator) {
    return accumulator * age //aqui é feita a soma de todos os elementos do array
}, 1); //aqui colocamos o accumulator a iniciar a 0

console.log(sumOfAges);