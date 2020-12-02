import PollOption from './PollOption';
import MessageEntity from './MessageEntity';

/**
* This object contains information about a poll.
*/
export default class Poll {
  /**
  * Unique poll identifier
  */
  id: string;

  /**
  * Poll question, 1-255 characters
  */
  question: string;

  /**
  * List of poll options
  */
  options: PollOption[];

  /**
  * Total number of users that voted in the poll
  */
  total_voter_count: number;

  /**
  * true, if the poll is closed
  */
  is_closed: boolean;

  /**
  * true, if the poll is anonymous
  */
  is_anonymous: boolean;

  /**
  * Poll type, currently can be “regular” or “quiz”
  */
  type: string;

  /**
  * true, if the poll allows multiple answers
  */
  allows_multiple_answers: boolean;

  /**
  * Optional. 0-based identifier of the correct answer option. Available only for polls in the quiz mode, which are closed, or was sent (not forwarded) by the bot or to the private chat with the bot.
  */
  correct_option_id?: number;

  /**
  * Optional. Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters
  */
  explanation?: string;

  /**
  * Optional. Special entities like usernames, URLs, bot commands, etc. that appear in the explanation
  */
  explanation_entities?: MessageEntity[];

  /**
  * Optional. Amount of time in seconds the poll will be active after creation
  */
  open_period?: number;

  /**
  * Optional. Point in time (Unix timestamp) when the poll will be automatically closed
  */
  close_date?: number;

  constructor(obj: { id: string, question: string, options: PollOption[], total_voter_count: number, is_closed: boolean, is_anonymous: boolean, type: string, allows_multiple_answers: boolean, correct_option_id?: number, explanation?: string, explanation_entities?: MessageEntity[], open_period?: number, close_date?: number,  } ) {
    this.id = obj.id;
    this.question = obj.question;
    this.options = obj.options;
    this.total_voter_count = obj.total_voter_count;
    this.is_closed = obj.is_closed;
    this.is_anonymous = obj.is_anonymous;
    this.type = obj.type;
    this.allows_multiple_answers = obj.allows_multiple_answers;
    this.correct_option_id = obj.correct_option_id;
    this.explanation = obj.explanation;
    this.explanation_entities = obj.explanation_entities;
    this.open_period = obj.open_period;
    this.close_date = obj.close_date;
  }
 
}
