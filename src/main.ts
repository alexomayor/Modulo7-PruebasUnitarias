import "./style.css";
import {
  dealCardButton,
  abandonButton,
  whatIfButton,
  resetButton,
} from "./model";
import { displayPoints } from "./UI";
import { whatIfClick, resetGame, abandon, dealCard } from "./motor";

/////////////////////////////////////////////////INIT GAME/////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", initGame);
function initGame() {
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
