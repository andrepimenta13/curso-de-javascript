//Eventos - são formas que temos de executar determinada ação quando alguma ação/coisa acontece

const submitButton = document.querySelector('#submit-button'); //Selecionar os elementos da página HTML
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

const items = document.querySelector('.items');
const body = document.querySelector('body');

submitButton.addEventListener('click', function (e) { //colocar um evento "click" no botão submit
    e.preventDefault();

    const nameValue = nameInput.value; //guardar o valor digitado no elemento "Name"
    const emailValue = emailInput.value;

    if (nameValue === '' || emailValue === '') { //só deixa submeter se os dois campos de Name e Email estiverem preenchidos.
        return alert('Please, fill out all the fields!');
    }

    myForm.style.background = 'red'; //mudar a background color do formulario depois de carregar no submit

    items.firstElementChild.textContent = nameValue; //mudar o texto do firstElementChild do elemento items (que é uma lista);
    items.children[1].textContent = emailValue; //mudar texto do 2 child, do elemento items

    body.style.background = 'white'; //mudar o background do body

});