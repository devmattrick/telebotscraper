import User from './User';

/**
* This object represents one row of the high scores table for a game.
*/
export default class GameHighScore {
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

  constructor(obj: { position: number, user: User, score: number,  } ) {
    this.position = obj.position;
    this.user = obj.user;
    this.score = obj.score;
  }
 
}
