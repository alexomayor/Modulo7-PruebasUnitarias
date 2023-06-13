import { globalVariable, gameMessages } from "./model";

import {
  updateCurrentImage,
  fetchCardURL,
  whatIfMessage,
  abandonMessage,
  updateMessage,
  displayPoints,
  disableButtonAbandonCard,
  disableButtonWhatIf,
  disableButtonReset,
  allButtonsDisabledExceptDealCard,
  allButtonsDisabledExceptResetGame,
  allButtonsDisabledExceptResetGameWhatIf,
} from "./UI";

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

/////////////////////////////////////////////////CALC VALUES/////////////////////////////////////////////////
function newCardPointsToSUM(value: number): number {
  return value < 8 ? value : 0.5;
}
function newCardValueCalc() {
  return Math.round(Math.random() * 9 + 1);
}
function newCardNumberCalc(value: number) {
  return value > 7 ? value + 2 : value;
}

/////////////////////////////////////////////////GAME START & GAME OVER/////////////////////////////////////////////////
function gameStart() {
  disableButtonAbandonCard(false);
  disableButtonReset(false);
  updateMessage("");
}

function gameCheck(value: number) {
  if (value > globalVariable.targetPoints) {
    gameLost();
  }
  if (value === globalVariable.targetPoints) {
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
