import "./style.css";

console.log("Hello Typescript!");

let puntuacionActual = 0;
let newCardValue = 0;
let newCardValuePoints = 0;
let mensajeSpan = document.getElementById("mensaje") as HTMLSpanElement;
mensajeSpan.textContent = "Buena suerte!";
let currentImage = document.getElementById("cartaActual") as HTMLImageElement;
let dealCardButton = document.getElementById(
  "dealCardButton"
) as HTMLButtonElement;
let abandonButton = document.getElementById(
  "forfeitButton"
) as HTMLButtonElement;
let whatIfButton = document.getElementById("whatIfButton") as HTMLButtonElement;
let resetButton = document.getElementById("resetButton") as HTMLButtonElement;

function newCardValuePointsToSUM() {
  newCardValue < 8
    ? (newCardValuePoints = newCardValue)
    : (newCardValuePoints = 0.5);
}
const muestraPuntuacion = () => {
  console.log("check:");
  let textoMarcador = `Puntos: ` + puntuacionActual.toString();
  let marcadorSpan = document.getElementById("marcador");
  marcadorSpan != null
    ? (marcadorSpan.innerHTML = textoMarcador)
    : console.log(`marcador: ${textoMarcador}`);
};

function dameCarta() {
  mensajeSpan.textContent = null;
  resetButton.disabled = false;
  abandonButton.disabled = false;
  newCardValueCalc();
  mostrarCarta();
  newCardValuePointsToSUM();
  puntuacionActual += newCardValuePoints;
  muestraPuntuacion();

  if (puntuacionActual > 7.5) {
    hasPerdido();
  } else if (puntuacionActual === 7.5) {
    hasGanado();
  }
}

function newCardValueCalc() {
  newCardValue = Math.round(Math.random() * 9 + 1);
  newCardValue > 7 ? (newCardValue = newCardValue + 2) : newCardValue;
  console.log("damecartaCheck");
  console.log(newCardValue);
}
function hasPerdido() {
  console.log("hasPerdido");
  mensajeSpan.textContent = "No juegas muy bien...";
  allButtonsDisabledExceptResetGame();
}

function hasGanado() {
  console.log("hasGanado");
  mensajeSpan.textContent = "¡Lo has clavado! ¡Enhorabuena!";
  allButtonsDisabledExceptResetGame();
}

function mostrarCarta() {
  switch (newCardValue) {
    case 1:
      currentImage.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
      break;
    case 2:
      currentImage.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
      break;
    case 3:
      currentImage.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
      break;
    case 4:
      currentImage.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
      break;
    case 5:
      currentImage.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
      break;
    case 6:
      currentImage.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
      break;
    case 7:
      currentImage.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
      break;
    case 10:
      currentImage.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
      break;
    case 11:
      currentImage.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
      break;
    case 12:
      currentImage.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
      break;
  }
  console.log("MostrarCarta Check");
}

function whatIf() {
  whatIfButton.disabled = true;
  newCardValueCalc();
  mostrarCarta();
  newCardValuePointsToSUM();
  puntuacionActual + newCardValuePoints > 7.5
    ? (mensajeSpan.textContent = "Pues si, hiciste bien!")
    : (mensajeSpan.textContent = `Mala decision!
    Habrias tenido ${puntuacionActual + newCardValuePoints} punto(s)`);
}

function resetGame() {
  puntuacionActual = 0;
  newCardValue = 0;
  newCardValuePoints = 0;
  allButtonsDisabledExceptDealCard();
  mensajeSpan.textContent = "Buena suerte!";
  muestraPuntuacion();
  currentImage.src =
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
}

function abandonar() {
  dealCardButton.disabled = true;
  abandonButton.disabled = true;
  whatIfButton.disabled = false;
  switch (true) {
    case puntuacionActual < 5:
      mensajeSpan.textContent = "Has sido muy conservador";
      break;
    case puntuacionActual < 6:
      mensajeSpan.textContent = "Te ha entrado el canguelo eh?";
      break;
    case puntuacionActual < 7.5:
      mensajeSpan.textContent = "Casi casi...";
      break;
  }
}

function allButtonsDisabledExceptDealCard() {
  dealCardButton.disabled = false;
  abandonButton.disabled = true;
  whatIfButton.disabled = true;
  resetButton.disabled = true;
}

function allButtonsDisabledExceptResetGame() {
  dealCardButton.disabled = true;
  abandonButton.disabled = true;
  whatIfButton.disabled = true;
  resetButton.disabled = false;
}

document.addEventListener("DOMContentLoaded", muestraPuntuacion);
document.getElementById("dealCardButton")?.addEventListener("click", dameCarta);
document.getElementById("forfeitButton")?.addEventListener("click", abandonar);
document.getElementById("whatIfButton")?.addEventListener("click", whatIf);
document.getElementById("resetButton")?.addEventListener("click", resetGame);
