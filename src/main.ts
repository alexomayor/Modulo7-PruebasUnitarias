import "./style.css";

console.log("Hello Typescript!");

let puntuacionActual = 0;
let newCardValue = 0;
let newCardImgURL = "0";
let newCardValuePoints = 0;
let mensajeSpan = document.getElementById("mensaje") as HTMLSpanElement;
mensajeSpan.textContent = "Buena suerte!";
let currentImage = document.getElementById("cartaActual") as HTMLImageElement;
let dealCardButton = document.getElementById("dealCardButton");
let abandonButton = document.getElementById("forfeitButton");
let whatIfButton = document.getElementById("whatIfButton");
let resetButton = document.getElementById("resetButton");

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
  gameStart();
  newCardValueCalc();
  newCardValueAdd();
  mostrarCarta();
  assingCard();
  newCardValuePointsToSUM();
  puntuacionActual += newCardValuePoints;
  muestraPuntuacion();
  comprobarpartida();
}

function gameStart() {
  if (
    abandonButton &&
    resetButton &&
    abandonButton instanceof HTMLButtonElement &&
    resetButton instanceof HTMLButtonElement
  ) {
    mensajeSpan.textContent = null;
    resetButton.disabled = false;
    abandonButton.disabled = false;
  }
}

function comprobarpartida() {
  if (puntuacionActual > 7.5) {
    hasPerdido();
  } else if (puntuacionActual === 7.5) {
    hasGanado();
  }
}

function newCardValueCalc() {
  newCardValue = Math.round(Math.random() * 9 + 1);
  console.log("damecartaCheck");
  console.log(newCardValue);
}

function newCardValueAdd() {
  newCardValue > 7 ? (newCardValue = newCardValue + 2) : newCardValue;
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
  newCardImgURL = newCardValue.toString();
  switch (newCardImgURL) {
    case "1":
      newCardImgURL =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
      break;
    case "2":
      newCardImgURL =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
      break;
    case "3":
      newCardImgURL =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
      break;
    case "4":
      newCardImgURL =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
      break;
    case "5":
      newCardImgURL =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
      break;
    case "6":
      newCardImgURL =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
      break;
    case "7":
      newCardImgURL =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
      break;
    case "10":
      newCardImgURL =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
      break;
    case "11":
      newCardImgURL =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
      break;
    case "12":
      newCardImgURL =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
      break;
  }
  console.log(`MostrarCarta Check`);
}

function assingCard() {
  currentImage.src = newCardImgURL;
}

function whatIf() {
  if (whatIfButton && whatIfButton instanceof HTMLButtonElement) {
    whatIfButton.disabled = true;
    newCardValueCalc();
    newCardValueAdd();
    mostrarCarta();
    assingCard();
    newCardValuePointsToSUM();
  }
}

function whatIfMessage() {
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
  allButtonsDisabledExceptResetGameWhatIf();
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
  if (
    dealCardButton &&
    abandonButton &&
    whatIfButton &&
    resetButton &&
    dealCardButton instanceof HTMLButtonElement &&
    abandonButton instanceof HTMLButtonElement &&
    whatIfButton instanceof HTMLButtonElement &&
    resetButton instanceof HTMLButtonElement
  ) {
    dealCardButton.disabled = false;
    abandonButton.disabled = true;
    whatIfButton.disabled = true;
    resetButton.disabled = true;
  }
}

function allButtonsDisabledExceptResetGame() {
  if (
    dealCardButton &&
    abandonButton &&
    whatIfButton &&
    resetButton &&
    dealCardButton instanceof HTMLButtonElement &&
    abandonButton instanceof HTMLButtonElement &&
    whatIfButton instanceof HTMLButtonElement &&
    resetButton instanceof HTMLButtonElement
  ) {
    dealCardButton.disabled = true;
    abandonButton.disabled = true;
    whatIfButton.disabled = true;
    resetButton.disabled = false;
  }
}

function allButtonsDisabledExceptResetGameWhatIf() {
  if (
    dealCardButton &&
    abandonButton &&
    whatIfButton &&
    resetButton &&
    dealCardButton instanceof HTMLButtonElement &&
    abandonButton instanceof HTMLButtonElement &&
    whatIfButton instanceof HTMLButtonElement &&
    resetButton instanceof HTMLButtonElement
  ) {
    dealCardButton.disabled = true;
    abandonButton.disabled = true;
    whatIfButton.disabled = false;
    resetButton.disabled = false;
  }
}

document.addEventListener("DOMContentLoaded", muestraPuntuacion);
if (dealCardButton) {
  dealCardButton.addEventListener("click", dameCarta);
}
if (abandonButton) {
  abandonButton.addEventListener("click", abandonar);
}
if (whatIfButton) {
  whatIfButton.addEventListener("click", () => {
    whatIf();
    whatIfMessage();
  });
}
if (resetButton) {
  resetButton.addEventListener("click", resetGame);
}
