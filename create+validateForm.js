//Criando e Validando um formulário

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const submitButton = document.querySelector('#submit-button');

const errorMessage = document.querySelector('.msg');

const items = document.querySelector('.items');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if (nameValue === '' || emailValue === '') {
        errorMessage.textContent = 'Please fill out the fields!'; //mudar o texto de um elemento selecionado
        errorMessage.classList = 'error'; //adicionar uma classe a um elemento selecionado (que já existe no css)

        setTimeout(() => { //esta função faz com que aconteça X, após X segundos. Neste caso foram 3 segundos (3000ms)
            errorMessage.textContent = ''; //limpar o texto do elemento.
            errorMessage.classList = ''; //retirar a classe do elemento e assim eliminar o style
        }, 3000);

        nameInput.value = '';
        emailInput.value = '';

        return; //para sair da função
    }

    const li = document.createElement('li'); //criar um elemento HTML

    li.classList = 'item'; //adicionar uma classe a um elemento selecionado
    li.innerHTML = `Nome: ${nameValue}<br/>Email: ${emailValue}`; //alterar um elemento HTML

    items.appendChild(li); //adicionar um filho a este elemento Pai

    nameInput.value = '';
    emailInput.value = '';

})