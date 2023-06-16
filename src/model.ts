//////////////////////GLOBAL VARIABLES//////////////////////

interface GlobalVariable {
  currentPoints: number;
  targetPoints: number;
}

export const globalVariable: GlobalVariable = {
  currentPoints: 0,
  targetPoints: 7.5,
};

//////////////////////STATUS//////////////////////

interface GameStatus {
  lost: string;
  won: string;
  ongoing: string;
}

export const gameStatus: GameStatus = {
  lost: "GAME_LOST",
  won: "GAME_WON",
  ongoing: "GAME_ONGOING",
};

//////////////////////MESSAGES//////////////////////
interface GameMessages {
  messageStartGame: string;
  messageGameWon: string;
  messageGameLost: string;
  messageWhatIfGoodDecision: string;
  messageWhatIfBadDecision: string;
  messageAbandonLowerThan4: string;
  messageAbandonBetween4and5Half: string;
  messageAbandonBetween6and7: string;
}
export const gameMessages: GameMessages = {
  messageStartGame: "Buena suerte!",
  messageGameWon: "¡Lo has clavado! ¡Enhorabuena!",
  messageGameLost: "No juegas muy bien...",
  messageWhatIfGoodDecision:
    "Plantarse fue una buena decision! Te habrias pasado.",
  messageWhatIfBadDecision: `Plantarse fue una mala decision! Habrias tenido `,
  messageAbandonLowerThan4: "Has sido muy conservador.",
  messageAbandonBetween4and5Half: "Te ha entrado el canguelo eh?",
  messageAbandonBetween6and7: "Casi casi...",
};
