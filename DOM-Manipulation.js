//Manipular DOM

const items = document.querySelector('.items');

console.log(items);


//items.remove(); //remover elementos

//console.log(items.firstElementChild.remove()); //o firstElementChild() vai pegar o primeiro filho do elemento ul.
//E depois faz um remove para apagar.

//items.lastElementChild.remove(); //para remover o ultimo filho do elemento ul.

//console.log(items.children[1].textContent = "Item um"); //podemos pegar o 2 filho através do indice. 
//E depois podemos alterar o texto do mesmo através do textContent.

//items.lastElementChild.innerHTML = '<h1>Hello World!</h1>'; //com o innerHTML podemos colocar um elemento HTML

//const button = document.getElementById('submit-button');
const button = document.querySelector('.btn');

button.style.backgroundColor = 'red'; //estilizar elementos via JS;
button.style.color = 'black'; //estilizar elementos via JS;