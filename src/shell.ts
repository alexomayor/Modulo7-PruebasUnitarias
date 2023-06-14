import {
  dealCardButton,
  abandonButton,
  whatIfButton,
  resetButton,
} from "./model";
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
