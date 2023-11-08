import "./style.css"
const CardGame = (icon = "alura-pixel", alt = "logo da Alura") => {
    return `
        <article class="card-game">
            <img src="./images/${icon}.png" alt=${alt}>
        </article>
    `
}

export default CardGame;