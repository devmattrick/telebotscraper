import User from './User';

/**
* This object represents one row of the high scores table for a game.
*/
export default class GameHighScore {
  /**
  * Position in high score table for the game
  */
  readonly position: number;

  /**
  * User
  */
  readonly user: User;

  /**
  * Score
  */
  readonly score: number;

  constructor(obj: { position: number, user: User, score: number,  } ) {
    this.position = obj?.position
    this.user = obj?.user && new User(obj.user)
    this.score = obj?.score
  }
 
}
