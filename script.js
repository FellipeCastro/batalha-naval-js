const cardsContainer = document.getElementById('cards-container')
const gameOver = document.getElementById('game-over')
const remaningPlays = document.getElementById('remaning-plays')
const points = document.getElementById('points')

const icons = [
    'Ship-1.png',
    'Ship-2.png',
    'Ship-3.png',
    'Wave.png',
    'Wave.png',
    'Wave.png',
    'Wave.png',
    'Wave.png',
    'Wave.png',
    'Wave.png',
    'Wave.png',
    'Wave.png',
    'Wave.png',
    'Wave.png',
    'Wave.png',
    'Wave.png',
    'Wave.png',
    'Wave.png',
    'Wave.png',
    'Wave.png',
    'Wave.png',
    'Wave.png',
    'Wave.png',
    'Wave.png',
    'Wave.png',
    'Wave.png',
    'Wave.png',
    'Wave.png',
    'Wave.png',
    'Wave.png',
]

let plays = 10
let currentPoints = 0

const revelCard = ({ target }) => {
    if (plays >= 1) {
        target.parentNode.classList.add('reveal-card')
        plays -= 1
    } else {
        gameOver.classList.remove('hide')
    }

    remaningPlays.innerText = plays
}

const newCard = (frontImg) => {
    const card  =document.createElement('div')
    card.className = 'card'

    const front = document.createElement('div')
    front.className = 'face front'
    front.style.backgroundImage = `url('./img/${frontImg}')`

    const back = document.createElement('div')
    back.className = 'face back'

    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener('click', revelCard)

    return card
}

const loadGame = () => {
    const shuffledIcons = [ ...icons, ...icons, ...icons, ...icons ].sort(() => Math.random() - 0.5)

    shuffledIcons.forEach((img) => {
        const card = newCard(img)
        cardsContainer.appendChild(card)
    })
}

loadGame()
