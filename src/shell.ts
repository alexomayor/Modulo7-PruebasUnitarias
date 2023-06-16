import { displayPoints, whatIfClick, resetGame, abandon, dealCard } from "./UI";
import {} from "./motor";
export function initGame() {
  if (dealCardButton && dealCardButton instanceof HTMLButtonElement) {
    dealCardButton.addEventListener("click", dealCard);
  }
  if (abandonButton && abandonButton instanceof HTMLButtonElement) {
    abandonButton.addEventListener("click", abandon);
  }
  if (whatIfButton && whatIfButton instanceof HTMLButtonElement) {
    whatIfButton.addEventListener("click", whatIfClick);
  }
  if (resetButton && resetButton instanceof HTMLButtonElement) {
    resetButton.addEventListener("click", resetGame);
  }
  displayPoints("0");
}

//////////////////////BUTTONS//////////////////////

export const dealCardButton = document.getElementById("dealCardButton");
export const abandonButton = document.getElementById("forfeitButton");
export const whatIfButton = document.getElementById("whatIfButton");
export const resetButton = document.getElementById("resetButton");
