//Filter

const users = [{
        id: 1,
        name: 'Beatriz',
        active: true
    },

    {
        id: 2,
        name: 'Matheus',
        active: true
    },

    {
        id: 3,
        name: 'Maria',
        active: false
    },
];

const activeUsers = users.filter((item) => {
    return item.active; //retorna só os users/objetos que estejam ativos. 
    //Dica: Quando é para verificar se é true não é preciso colocar ""=== true" 
});

console.log(activeUsers);


const activeUsersFalse = users.filter((item) => {
    return item.active === false; //retorna só os users/objetos que estejam com ative = false.  
});

console.log(activeUsersFalse);

//outro exemplo

const numbers = [1, 3, 5, 10, 12, 13, 21]

const oddNumber = numbers.filter((item) => {
    return item % 2 !== 0 //retorna os numeros impares
})

console.log(oddNumber);