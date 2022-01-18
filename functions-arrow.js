function sum(a, b = 10) { //adicionado um valor padrão para 'b', caso não receba nada.
    return a + b;
};

const sumValue = sum(2);

console.log(sumValue);

//Arrow functions

const sumArrow = (a, b = 10) => {
    return a + b;
};

console.log(sumArrow(3));