import CardFrontBack from "../../components/CardFrontBack"
import cards from "./data"
import "./style.css"
const flipAnHideCards = ($cardsActive) => {
    $cardsActive.forEach((card) => card.classList.remove("-active"))
}
const swapPlayer = () => {
    const $playerArrow = document.querySelector(".player-arrow")
    const currentPlayer = $playerArrow.getAttribute("data-currentPlayer")
    //quando as duas cartas forem viradas, a seta tem que indicar pro próximo jogador
    $playerArrow.setAttribute("data-currentPlayer", currentPlayer == 1 ? 2 : 1)
}
window.boardGame = {}
window.boardGame.handleClick = (event) => {
    const $boardGame = document.querySelector(".board-game")
    const $cardsActive = $boardGame.querySelectorAll('.card-front-back.-active')
    
    
    if($cardsActive.length === 2) {
        setTimeout(() => {
            flipAnHideCards($cardsActive)
            swapPlayer()
        },1000)
        
    }
}
const BoardGame = (quantity) => {
    
    const $htmlCardsList = cards.map((card) => CardFrontBack(card.icon, card.altIcon)) 
    const $htmlCards = $htmlCardsList.join('')    
    return /*html*/` 
        <section class="board-game" onClick="boardGame.handleClick(event)">
            ${$htmlCards}
        </section>
    `;
}
export default BoardGame;