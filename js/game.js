const grid = document.querySelector(".grid")

const characters = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'summer',
    'meeseeks',
    'scroopy',
];

const firstCard = ""
const secondCard = ""

const revealCard = ({target}) => {

    if (target.parentNode.className.includes("revealCard")) {
        return
    }

    target.parentNode.classList.add("revealCard")
}

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

const createCard = (character) => {
    const card = createElement("div", "card")
    const front = createElement("div", "face front")
    const back = createElement("div", "face back")

    front.style.backgroundImage = `url("../images/${character}.png")`

    card.appendChild(front)
    card.appendChild(back)

    return card
}

const loadGame = () => {
    
    const duplicateCharacter = [...characters, ...characters]
    const shuffledArray = duplicateCharacter.sort(() => Match.Random() - 0.5)

    shuffledArray.forEach((character) => {
        const card = createCard(character)
        grid.appendChild(card)
    })
}

loadGame()