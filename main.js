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