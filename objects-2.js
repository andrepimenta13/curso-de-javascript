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


//Aceder a uma propriedade de um objeto dentro de um array

console.log(todos[2].id, todos[2].description, todos[2].isCompleted);

const descriptionOfLastTodo = todos[2].description;

console.log(descriptionOfLastTodo);