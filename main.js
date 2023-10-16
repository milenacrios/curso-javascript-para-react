import './src/components/styles/settings/colors.css'
import './src/components/styles/generic/reset.css'
import './src/components/styles/elements/base.css'
import CardGame from "./src/components/CardGame"
let $root = document.getElementById("root")
const $htmlCardGame = CardGame() 
console.log($htmlCardGame)

$root.insertAdjacentHTML("beforeend", $htmlCardGame)
