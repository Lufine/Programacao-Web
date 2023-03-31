/*
Curso de Engenharia de Software - UniEVANGÉLICA
Disciplina: Programação Web
DATA: 15/03/2023
Dev: Luiz Filipe - 2111287
*/

//Const para o jogo, timer e seletor
const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

// Cartas do jogo da memoria
const characters = [
  'battle-royale',
  'csgo',
  'esporte',
  'lol',
  'street-fighter',
  'valorant',
  'fortnite',
  'rainbow',
  'dota',
  'callofduty',
];

//Criação de elementos
const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

let firstCard = '';
let secondCard = '';

//Checar se o jogo terminou
const checkEndGame = () => {
  const disabledCards = document.querySelectorAll('.disabled-card');

  if (disabledCards.length === 20) {
    clearInterval(setInterval);
    alert(`Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi de: ${timer.innerHTML}`);
  }
}
// Conferir se as cartas são iguais
const checkCards = () => {
  const firstCharacter = firstCard.getAttribute('data-character');
  const secondCharacter = secondCard.getAttribute('data-character');

  if (firstCharacter === secondCharacter) {

    firstCard.firstChild.classList.add('disabled-card');
    secondCard.firstChild.classList.add('disabled-card');

    firstCard = '';
    secondCard = '';

    checkEndGame();

  } else {
    setTimeout(() => {

      firstCard.classList.remove('reveal-card');
      secondCard.classList.remove('reveal-card');

      firstCard = '';
      secondCard = '';

    }, 500);
  }

}
// revelar cartas
const revealCard = ({ target }) => {

  if (target.parentNode.className.includes('reveal-card')) {
    return;
  }

  if (firstCard === '') {

    target.parentNode.classList.add('reveal-card');
    firstCard = target.parentNode;

  } else if (secondCard === '') {

    target.parentNode.classList.add('reveal-card');
    secondCard = target.parentNode;

    checkCards();

  }
}
// criação das cartas
const createCard = (character) => {

  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');

  front.style.backgroundImage = `url('../images/${character}.png')`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener('click', revealCard);
  card.setAttribute('data-character', character)

  return card;
}

//Carregar o jogo, e deixar as cartas em posições aleatórias
const loadGame = () => {
  const duplicateCharacters = [...characters, ...characters];

  const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

  shuffledArray.forEach((character) => {
    const card = createCard(character);
    grid.appendChild(card);
  });
}

//Contador de tempo
const timerDisplay = document.getElementById('timer');
let timeLeft = 60; // tempo em segundos

//Função para o tempo iniciar em ordem decrescente
function startTimer() {

  const timer = setInterval(() => {
    // atualizar o tempo restante
    timeLeft--;
    // atualizar o display do timer
    timerDisplay.textContent = timeLeft;
    
    // verificar se o tempo acabou
    if (timeLeft === 0) {
      // parar o temporizador
      clearInterval(timer);
      // exibir um alerta
      alert('Tempo esgotado!');
      // reiniciar o temporizador
      timeLeft = 60;
      timerDisplay.textContent = timeLeft;
    }
  }, 1000); // intervalo de 1 segundo
}

// iniciar o temporizador quando a página carregar
window.onload = startTimer;

// mostrar o nome do jogador
window.onload = () => {
  spanPlayer.innerHTML = localStorage.getItem('player');
  startTimer();
  loadGame();
}