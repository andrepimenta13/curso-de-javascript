//DOM - é basicamente o site, a árvore de elementos.

//Selecionar apenas um elemento

/* const addUserText = document.getElementById('add-user'); pegar no elemento

//console.log(addUserText); validar se pegamos no elemento.

addUserText.innerText = 'Adicionar usuário'; mudar o texto num elemento. 

const addUserText = document.querySelector('#add-user') //outra forma de pegar em elementos. # = ID, . = classe

console.log('addUserText'); //validar se pegamos no elemento.

addUserText.textContent = 'Adicionar usuário'; //Outra forma de mudar o texto de um MediaElementAudioSourceNode.

const myForm = document.querySelector('.container #my-form'); //outra forma de usar o query selector

console.log(myForm); */

//Selecionar multiplos elementos

/* const allItems = document.querySelectorAll('.item'); //pegar vários elementos

const allItems = document.querySelectorAll('.items .item'); //vai pegar os elementos que estejam dentro da classe items e depois item.
console.log(allItems);

console.log(allItems); //logar para validar quais elementos selecionamos

console.log(allItems[1]); //podemos pegar apenas um elemento do array 

const allItems = document.getElementsByClassName('item'); //outra forma de pegarmos em um elemento
console.log(allItems); */

const allItems = document.getElementsByTagName('ul'); //pegar elementos pela tag HTML
console.log(allItems);