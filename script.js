const cardsContainer = document.getElementById('cards-container')
const gameEnd = document.getElementById('game-end')
const remaningPlays = document.getElementById('remaning-plays')
const points = document.getElementById('points')
const reloadBtn = document.getElementById('reload-btn')

let plays = 12
let currentPoints = 0

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
]

reloadBtn.addEventListener('click', () => {
    location.reload()
})

const revelCard = ({ target }) => {
    if (plays > 0) {
        if (!target.parentNode.classList.contains('reveal-card')) {
            const frontImg = target.parentNode.querySelector('.front').style.backgroundImage
            target.parentNode.classList.add('reveal-card')

            if (frontImg.includes('Ship-1.png')) {
                currentPoints += 50
            } else if (frontImg.includes('Ship-2.png')) {
                currentPoints += 100
            } else if (frontImg.includes('Ship-3.png')) {
                currentPoints += 150
            }

            plays -= 1            
        }
    } else if (currentPoints == 1200) {
        gameEnd.innerText = 'Você derrubou todos os navios, parabéns!'
        gameEnd.classList.add('game-winner')
        gameEnd.classList.remove('hide')
        reloadBtn.classList.remove('hide')
    }else {
        gameEnd.innerText = 'Game over'
        gameEnd.classList.add('game-over')
        gameEnd.classList.remove('hide')
        reloadBtn.classList.remove('hide')
    }

    remaningPlays.innerText = plays
    points.innerText = currentPoints
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
