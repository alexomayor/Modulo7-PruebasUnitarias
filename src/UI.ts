import {
  globalVariable,
  dealCardButton,
  abandonButton,
  whatIfButton,
  resetButton,
  gameMessages,
} from "./model";

/////////////////////////////////////////////////UPDATE IMAGE/////////////////////////////////////////////////
export function updateCurrentImage(value: string): void {
  const currentImage = document.getElementById("cartaActual");
  if (currentImage && currentImage instanceof HTMLImageElement) {
    currentImage.src = value;
  }
}

export function fetchCardURL(value: string) {
  switch (value) {
    case "1":
      value =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
      break;
    case "2":
      value =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
      break;
    case "3":
      value =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
      break;
    case "4":
      value =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
      break;
    case "5":
      value =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
      break;
    case "6":
      value =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
      break;
    case "7":
      value =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
      break;
    case "10":
      value =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
      break;
    case "11":
      value =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
      break;
    case "12":
      value =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
      break;
    case "Card Reverse":
      value =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
  return value;
}

/////////////////////////////////////////////////MESSAGES & SCOREBOARD UPDATES/////////////////////////////////////////////////
export function whatIfMessage(pointsNow: number, newPoints: number) {
  return pointsNow + newPoints > globalVariable.targetPoints
    ? gameMessages.messageWhatIfGoodDecision
    : gameMessages.messageWhatIfBadDecision + `${pointsNow + newPoints} puntos`;
}

export function abandonMessage(value: number) {
  if (value < 4) {
    return gameMessages.messageAbandonLowerThan4;
  }
  if (value < 6) {
    return gameMessages.messageAbandonBetween4and5Half;
  }
  if (value < 7.5) {
    return gameMessages.messageAbandonBetween6and7;
  }
  return "";
}

export function updateMessage(messageToShow: string) {
  const messageSpan = document.getElementById("message");
  if (messageSpan && messageSpan instanceof HTMLSpanElement) {
    messageSpan.textContent = messageToShow;
  }
}
export const displayPoints = (points: string) => {
  let scoreboardText = `Puntos: ` + points;
  let scoreboardSpan = document.getElementById("scoreboard");
  if (scoreboardSpan && scoreboardSpan instanceof HTMLSpanElement) {
    scoreboardSpan.innerHTML = scoreboardText;
  }
};

/////////////////////////////////////////////////DISABLING BUTTONS/////////////////////////////////////////////////
function disableButtonDealCard(value: boolean) {
  if (dealCardButton && dealCardButton instanceof HTMLButtonElement) {
    dealCardButton.disabled = value;
  }
}
export function disableButtonAbandonCard(value: boolean) {
  if (abandonButton && abandonButton instanceof HTMLButtonElement) {
    abandonButton.disabled = value;
  }
}
export function disableButtonWhatIf(value: boolean) {
  if (whatIfButton && whatIfButton instanceof HTMLButtonElement) {
    whatIfButton.disabled = value;
  }
}
export function disableButtonReset(value: boolean) {
  if (resetButton && resetButton instanceof HTMLButtonElement) {
    resetButton.disabled = value;
  }
}

export function allButtonsDisabledExceptDealCard() {
  disableButtonDealCard(false);
  disableButtonAbandonCard(true);
  disableButtonWhatIf(true);
  disableButtonReset(true);
}

export function allButtonsDisabledExceptResetGame() {
  disableButtonDealCard(true);
  disableButtonAbandonCard(true);
  disableButtonWhatIf(true);
  disableButtonReset(false);
}

export function allButtonsDisabledExceptResetGameWhatIf() {
  disableButtonDealCard(true);
  disableButtonAbandonCard(true);
  disableButtonWhatIf(false);
  disableButtonReset(false);
}
