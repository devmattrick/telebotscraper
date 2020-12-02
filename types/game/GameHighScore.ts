/**
 * This object represents one row of the high scores table for a game.
 */
export default interface GameHighScore {
  /**
   * Position in high score table for the game
   */
  position: number;

  /**
   * User
   */
  user: User;

  /**
   * Score
   */
  score: number;

}
