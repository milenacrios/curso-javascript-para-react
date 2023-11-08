import './src/components/styles/settings/colors.css'
import './src/components/styles/generic/reset.css'
import './src/components/styles/elements/base.css'
import PlayerName from './src/components/PlayerName'
import ScoreBoard from './src/objects/ScoreBoard'
import CardFrontBack from './src/components/CardFrontBack'
import BoardGame from './src/objects/BoardGame'
//a main.js é a representação de todo html em js na tela
const $htmlPlayerName = PlayerName("Milena")

let $root = document.getElementById("root")

$root.insertAdjacentHTML(
    "beforeend", 
    `
    ${ScoreBoard()}
    ${BoardGame(6)}
    `
)
