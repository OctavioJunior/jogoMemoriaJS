const input = document.querySelector('.loginInput');
const button = document.querySelector('.loginButton');
const form = document.querySelector('.loginForm');

const validateInput = ({ target }) => {
  if (target.value.length > 2) {
    button.removeAttribute('disabled');
    return;
  }

  button.setAttribute('disabled', '');
}

const handleSubmit = (e) => {
  e.preventDefault();                       //evita que a pagina recarregue pelo padrão da função
  localStorage.setItem('player', input.value);  //salvando o nome da pessoa no local storage
  window.location = 'pages/game.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);