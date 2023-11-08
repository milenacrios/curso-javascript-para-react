import CardGame from "../CardGame";
import "./style.css";
//o DOM recebe como parametro a string da função js e ela deve estar em
//escopo global conforme já vimos, escopo global é o window. 
window.cardFrontBack = {}
//nameSpace = pesquisar
window.cardFrontBack.handleClick = (event) => {
    //qual foi o card clicado?
    const $origin = event.target //origem do clique
    const $cardFrontBack = $origin.closest('.card-front-back')
    /*if ($cardFrontBack.classList.contains("-active")){
        $cardFrontBack.classList.remove("-active")
    }
    else {
        $cardFrontBack.classList.add("-active")
    }*/

    $cardFrontBack.classList.toggle('-active') //faz todo o if acima em uma linha :)
    
    console.log($cardFrontBack)
}
const CardFrontBack = (icon, altIcon) =>{
  return /*html*/ `
    <article class="card-front-back" onClick="cardFrontBack.handleClick(event)">
      <div class="card -front">
        ${CardGame()}
      </div>
      <div class="card -back">
        ${CardGame(icon, altIcon)}
      </div>
    </article>
  `;
}

export default CardFrontBack;