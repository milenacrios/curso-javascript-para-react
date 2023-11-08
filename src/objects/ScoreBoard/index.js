import PlayerName from "../../components/PlayerName"
import PlayerScore from "../../components/PlayerScore"
import PlayerVesus from "../../components/PlayerVersus"
import PlayerArrow from "../../components/PlayerArrow"
import "./style.css"
const ScoreBoard = () => {
    return /*html*/`
        <header class="score-board">
            ${(PlayerArrow(2))}
            ${PlayerName("Player1")}
            ${PlayerScore(2)}
            ${PlayerVesus()}
            ${PlayerScore(3)}
            ${PlayerName("Player2")} 
        </header>
    `
}
export default ScoreBoard