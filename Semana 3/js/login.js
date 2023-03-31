/*
Curso de Engenharia de Software - UniEVANGÉLICA
Disciplina: Programação Web
DATA: 15/03/2023
Dev: Luiz Filipe - 2111287
*/

// Define a constante "input" para o elemento HTML que possui a classe "login__input"
const input = document.querySelector('.login__input');

// Define a constante "button" para o elemento HTML que possui a classe "login__button"
const button = document.querySelector('.login__button');

// Define a constante "form" para o elemento HTML que possui a classe "login-form"
const form = document.querySelector('.login-form');

// Define uma função chamada "validateInput" que espera um objeto como parâmetro, mas só usa a propriedade "target"
const validateInput = ({ target }) => {
  if (target.value.length > 3) {
    button.removeAttribute('disabled');
    return;
  }

  // Define o atributo "disabled" no botão de envio se a condição do "if" for falsa
  button.setAttribute('disabled', '');
}

// Define uma função chamada "handleSubmit" que espera um objeto de evento como parâmetro
const handleSubmit = (event) => {
  event.preventDefault();

  // Salva o valor atual do campo de entrada na memória local do navegador com a chave "player"
  localStorage.setItem('player', input.value);
  window.location = 'pages/game.html';
}

// Adiciona um ouvinte de evento de entrada no campo de entrada para acionar a função "validateInput" sempre que o valor do campo mudar
input.addEventListener('input', validateInput);

// Adiciona um ouvinte de evento de envio ao formulário para acionar a função "handleSubmit" quando o usuário envia o formulário
form.addEventListener('submit', handleSubmit);