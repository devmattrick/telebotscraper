import User from './User';

/**
* This object represents an answer of a user in a non-anonymous poll.
*/
export default class PollAnswer {
  /**
  * Unique poll identifier
  */
  readonly poll_id: string;

  /**
  * The user, who changed the answer to the poll
  */
  readonly user: User;

  /**
  * 0-based identifiers of answer options, chosen by the user. May be empty if the user retracted their vote.
  */
  readonly option_ids: number[];

  constructor(obj: { poll_id: string, user: User, option_ids: number[],  } ) {
    this.poll_id = obj?.poll_id;
    this.user = obj?.user;
    this.option_ids = obj?.option_ids;
  }
 
}
