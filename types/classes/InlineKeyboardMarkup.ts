import InlineKeyboardButton from './InlineKeyboardButton';

/**
* This object represents an inline keyboard that appears right next to the message it belongs to.
*/
export default class InlineKeyboardMarkup {
  /**
  * Array of button rows, each represented by an Array of InlineKeyboardButton objects
  */
  readonly inline_keyboard: InlineKeyboardButton[][];

  constructor(obj: { inline_keyboard: InlineKeyboardButton[][],  } ) {
    this.inline_keyboard = obj?.inline_keyboard?.map(o=>o.map(o2=>new InlineKeyboardButton(o2)))
  }
 
}
