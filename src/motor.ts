import { globalVariable, gameStatus } from "./model";

//////////////////////CALC VALUES//////////////////////

export function newCardPointsToSUM(value: number): number {
  return value < 8 ? value : 0.5;
}
export function newCardValueCalc() {
  return Math.round(Math.random() * 9 + 1);
}
export function newCardNumberCalc(value: number) {
  return value > 7 ? value + 2 : value;
}

//////////////////////STATUS CHECK//////////////////////

export function gameStatusCheck(points: number) {
  if (points > globalVariable.targetPoints) {
    return gameStatus.lost;
  }
  if (points === globalVariable.targetPoints) {
    return gameStatus.won;
  } else {
    return gameStatus.ongoing;
  }
}
