const names = ['Felipe', 'João', 'Julia', 10, false];


//acessar o 2o elemento da lista

const joao = names[1]
console.log(joao)

//adicionar elemento no final do array

names.push('Pedro')
console.log(names)

//adicionar elemento no inicio do array

names.unshift('Fernanda')
console.log(names)

//Remover o ultimo valor do array

names.pop()
console.log(names)

//Editar uma posição do array

names[3] = 'Gustavo'
console.log(names)

//Saber o indice/posição de algum elemento num array

console.log(names.indexOf('Felipe'));

//Ordenar a lista de um Array

const sortedNames = names.sort();
console.log(sortedNames);

//Saber o tamanho de um Array

console.log(names.length)

//Validar se uma variável é um Array

const namesIsArray = Array.isArray(names)
console.log(namesIsArray)