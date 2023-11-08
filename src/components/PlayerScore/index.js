import "./style.css"
const PlayerScore = (points = 0) => {
    return /*html*/ `
        <div class="player-score" data-points="${points}">
            <div class="div-1"></div>
            <div class="div-2"></div>
            <div class="div-3"></div>
        </div>
    `
}

export default PlayerScore;