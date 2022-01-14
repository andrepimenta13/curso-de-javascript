// Objetos

const person = {
    firstName: 'Felipe',
    lastName: 'Rocha',
    age: 21,
    hobbies: ['Assistir F1', 'Jogar futebol', 'Ler'],
    dog: {
        name: 'Simba',
        age: 4
    }
};

/* const firstName = person.firstName;
const lastName = person.lastName;
const age = person.age;
const hobbies = person.hobbies; */

// Destructuring
//O comando seguinte, faz exatamente o que está no código acima, ou seja,
//pega nas propriedades de um objeto, cria variáveis e atribui esses valores ás mesmas.

const {
    firstName: primeiroNome,
    lastName,
    age,
    hobbies,
    dog: {
        name: dogName
    },
} = person;

//No exemplo acima, podemos renomear o nome de uma var, como vemos no exemplo do firstName.

const read = person.hobbies[2];

console.log(primeiroNome);
console.log(lastName);
console.log(age);
console.log(hobbies);
console.log(read);


//Adicionar novas propriedades a um objeto

//person.dog = 'Simba';

//console.log(person.dog);

//Adicionar objetos dentro de objetos (ver objeto dog adicionado no objeto person em cima
//e depois ver o Destructuring também feito ao name do objeto dog)

console.log(person.dog.age);
console.log(dogName);