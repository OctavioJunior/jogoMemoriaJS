const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector(".player")
const timer = document.querySelector(".timer")

const characters = [
  "bulma",
  "gohan_kid",
  "goku",
  "goku_kid",
  "majinbook",
  "mix",
  "picollo",
  "saiyaman",
  "videl",
  "vegeta",
]

const createElement = (tag, className) => {
  const element = document.createElement(tag)
  element.className = className;
  return element
}

let firstCard = ''
let secondCard = ''

const checkEndGame = () => {
  const disabledCards = document.querySelectorAll('.disabledCard')

  if (disabledCards.length === 20) {
    clearInterval(this.loop)
    alert(`Parabéns ${spanPlayer.innerHTML}, você finalizou o jogo em ${timer.innerHTML} segundos!`)
  }
}

const checkCards = () => {
  const firstCharacter = firstCard.getAttribute('data-character')
  const secondCharacter = secondCard.getAttribute('data-character')

  if (firstCharacter === secondCharacter) {

    firstCard.firstChild.classList.add('disabledCard')
    secondCard.firstChild.classList.add('disabledCard')

    firstCard = ''
    secondCard = ''

    checkEndGame()

  } else {
    setTimeout(() => {

      firstCard.classList.remove('revealCard')
      secondCard.classList.remove('revealCard')

      firstCard = ''
      secondCard = ''

    }, 1000)
  }

}

const revealCard = ({ target }) => {

  if (target.parentNode.className.includes('revealCard')) {
    return
  }

  if (firstCard === '') {

    target.parentNode.classList.add('revealCard')
    firstCard = target.parentNode

  } else if (secondCard === '') {

    target.parentNode.classList.add('revealCard')
    secondCard = target.parentNode

    checkCards()

  }  
}

const createCard = (character) => {

  const card = createElement('div', 'card');
  const front = createElement('div', 'face front')
  const back = createElement('div', 'face back')

  front.style.backgroundImage = `url('../imag/${character}.gif')`

  card.appendChild(front)
  card.appendChild(back)

  card.addEventListener('click', revealCard)
  card.setAttribute('data-character', character)

  return card
}

const loadGame = () => {
  const duplicateCharacters = [ ...characters, ...characters ]

  const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5)

  shuffledArray.forEach((character) => {
    const card = createCard(character)
    grid.appendChild(card)
  })
}

const startTimer = () => {

  this.loop = setInterval(() => {
    const currentTime = Number(timer.innerHTML) //ao invés de Number pode colocar um sinal de + ficando => +timer.innerHTML
    timer.innerHTML = currentTime + 1
  }, 1000)

}

window.onload = () => {
  
  const playerName = localStorage.getItem("player")
  spanPlayer.innerHTML = playerName

  startTimer()
  loadGame()
}