import "./style.css"
const PlayerArrow = (currentPlayer = 1) => {
    return /*html*/`
        <img class="player-arrow" data-currentPlayer="${currentPlayer}" src="images/IconArrowDown.png" alt="Seta para troca de player"/>
    `
}

export default PlayerArrow;