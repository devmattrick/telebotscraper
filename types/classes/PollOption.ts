
/**
* This object contains information about one answer option in a poll.
*/
export default class PollOption {
  /**
  * Option text, 1-100 characters
  */
  readonly text: string;

  /**
  * Number of users that voted for this option
  */
  readonly voter_count: number;

  constructor(obj: { text: string, voter_count: number,  } ) {
    this.text = obj?.text
    this.voter_count = obj?.voter_count
  }
 
}
