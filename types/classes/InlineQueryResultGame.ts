import InlineKeyboardMarkup from './InlineKeyboardMarkup';

/**
* Represents a Game.
*/
export default class InlineQueryResultGame {
  /**
  * Type of the result, must be game
  */
  readonly type: string;

  /**
  * Unique identifier for this result, 1-64 bytes
  */
  readonly id: string;

  /**
  * Short name of the game
  */
  readonly game_short_name: string;

  /**
  * Optional. Inline keyboard attached to the message
  */
  readonly reply_markup?: InlineKeyboardMarkup;

  constructor(obj: { type: string, id: string, game_short_name: string, reply_markup?: InlineKeyboardMarkup,  } ) {
    this.type = obj?.type;
    this.id = obj?.id;
    this.game_short_name = obj?.game_short_name;
    this.reply_markup = new InlineKeyboardMarkup(obj?.reply_markup);
  }
 
}
