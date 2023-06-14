import {
  globalVariable,
  dealCardButton,
  abandonButton,
  whatIfButton,
  resetButton,
  gameMessages,
  gameStatus,
} from "./model";

import {
  newCardPointsToSUM,
  newCardNumberCalc,
  newCardValueCalc,
  gameStatusCheck,
} from "./motor";

/////////////////////////////////////////////////BUTTONS: FUNCTIONS/////////////////////////////////////////////////

export function whatIfClick() {
  disableButtonWhatIf(true);
  whatIf();
}

function whatIf() {
  let newCardValue: number = newCardValueCalc(); // generates random value (1-10)
  let newCardNumber = newCardNumberCalc(newCardValue); // assigns card number from previous random value (1-7 / 10-12)
  let CardToBeDisplayed: string = fetchCardURL(newCardNumber.toString()); // fetches new card image URL
  let newCardPoints = newCardPointsToSUM(newCardNumber); // calculates new card points (0.5 or 1-7)
  updateCurrentImage(CardToBeDisplayed); // updates image displayed

  let messageToShow: string = whatIfMessage(
    globalVariable.currentPoints,
    newCardPoints
  );
  updateMessage(messageToShow);
  globalVariable.currentPoints += newCardPoints; // sums newCardPoints to currentPoints, which holds current game score
  displayPoints(globalVariable.currentPoints.toString()); // displays current game score in the scoreboard span
}

export function resetGame() {
  globalVariable.currentPoints = 0;
  allButtonsDisabledExceptDealCard();
  updateMessage(gameMessages.messageStartGame);
  displayPoints(globalVariable.currentPoints.toString());
  let CardToBeDisplayed: string = fetchCardURL("Card Reverse");
  updateCurrentImage(CardToBeDisplayed);
}

export function abandon() {
  allButtonsDisabledExceptResetGameWhatIf();
  let messageToShow: string = abandonMessage(globalVariable.currentPoints);
  updateMessage(messageToShow);
}

export function dealCard() {
  let newCardValue: number = newCardValueCalc(); // generates random value (1-10)
  let newCardNumber = newCardNumberCalc(newCardValue); // assigns card number from previous random value (1-7 / 10-12)
  let CardToBeDisplayed: string = fetchCardURL(newCardNumber.toString()); // fetches new card image URL
  let newCardPoints = newCardPointsToSUM(newCardNumber); // calculates new card points (0.5 or 1-7)
  updateCurrentImage(CardToBeDisplayed); // updates image displayed
  globalVariable.currentPoints += newCardPoints; // sums newCardPoints to currentPoints, which holds current game score
  gameStart();
  displayPoints(globalVariable.currentPoints.toString()); // displays current game score in the scoreboard span
  gameCheck(globalVariable.currentPoints); // checks wether the current game is won or lost
}

/////////////////////////////////////////////////UPDATE IMAGE/////////////////////////////////////////////////

function updateCurrentImage(value: string): void {
  const currentImage = document.getElementById("cartaActual");
  if (currentImage && currentImage instanceof HTMLImageElement) {
    currentImage.src = value;
  }
}

function fetchCardURL(value: string) {
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

function updateMessage(messageToShow: string) {
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

function disableButtonAbandonCard(value: boolean) {
  if (abandonButton && abandonButton instanceof HTMLButtonElement) {
    abandonButton.disabled = value;
  }
}

function disableButtonWhatIf(value: boolean) {
  if (whatIfButton && whatIfButton instanceof HTMLButtonElement) {
    whatIfButton.disabled = value;
  }
}

function disableButtonReset(value: boolean) {
  if (resetButton && resetButton instanceof HTMLButtonElement) {
    resetButton.disabled = value;
  }
}

function allButtonsDisabledExceptDealCard() {
  disableButtonDealCard(false);
  disableButtonAbandonCard(true);
  disableButtonWhatIf(true);
  disableButtonReset(true);
}

function allButtonsDisabledExceptResetGame() {
  disableButtonDealCard(true);
  disableButtonAbandonCard(true);
  disableButtonWhatIf(true);
  disableButtonReset(false);
}

function allButtonsDisabledExceptResetGameWhatIf() {
  disableButtonDealCard(true);
  disableButtonAbandonCard(true);
  disableButtonWhatIf(false);
  disableButtonReset(false);
}

/////////////////////////////////////////////////GAME START & GAME OVER/////////////////////////////////////////////////

function gameStart() {
  disableButtonAbandonCard(false);
  disableButtonReset(false);
  updateMessage("");
}

function gameCheck(value: number) {
  if (gameStatusCheck(value) === gameStatus.lost) {
    gameLost();
  }
  if (gameStatusCheck(value) === gameStatus.won) {
    gameWon();
  }
}

function gameWon() {
  allButtonsDisabledExceptResetGame();
  updateMessage(gameMessages.messageGameWon);
}

function gameLost() {
  allButtonsDisabledExceptResetGame();
  updateMessage(gameMessages.messageGameLost);
}
