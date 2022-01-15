const todos = [{
    id: 1,
    description: 'Estudar programação',
    isCompleted: false,
}, {
    id: 2,
    description: 'Ler',
    isCompleted: true,
}, {
    id: 3,
    description: 'Treinar',
    isCompleted: true,
}];

//Colocar o objeto que está em cima, em um JSON

const todosJSON = JSON.stringify(todos);

console.log(todosJSON);

//Passar de JSON para um Array

const todosList = JSON.parse(todosJSON);

console.log(todosList);