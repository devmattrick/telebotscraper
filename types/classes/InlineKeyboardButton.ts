import LoginUrl from './LoginUrl';
import CallbackGame from './CallbackGame';

/**
* This object represents one button of an inline keyboard. You must use exactly one of the optional fields.
*/
export default class InlineKeyboardButton {
  /**
  * Label text on the button
  */
  text: string;

  /**
  * Optional. HTTP or tg:// url to be opened when button is pressed
  */
  url?: string;

  /**
  * Optional. An HTTP URL used to automatically authorize the user. Can be used as a replacement for the Telegram Login Widget.
  */
  login_url?: LoginUrl;

  /**
  * Optional. Data to be sent in a callback query to the bot when button is pressed, 1-64 bytes
  */
  callback_data?: string;

  /**
  * Optional. If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot&#x27;s username and the specified inline query in the input field. Can be empty, in which case just the bot&#x27;s username will be inserted.Note: This offers an easy way for users to start using your bot in inline mode when they are currently in a private chat with it. Especially useful when combined with switch_pm… actions – in this case the user will be automatically returned to the chat they switched from, skipping the chat selection screen.
  */
  switch_inline_query?: string;

  /**
  * Optional. If set, pressing the button will insert the bot&#x27;s username and the specified inline query in the current chat&#x27;s input field. Can be empty, in which case only the bot&#x27;s username will be inserted.This offers a quick way for the user to open your bot in inline mode in the same chat – good for selecting something from multiple options.
  */
  switch_inline_query_current_chat?: string;

  /**
  * Optional. Description of the game that will be launched when the user presses the button.NOTE: This type of button must always be the first button in the first row.
  */
  callback_game?: CallbackGame;

  /**
  * Optional. Specify true, to send a Pay button.NOTE: This type of button must always be the first button in the first row.
  */
  pay?: boolean;

  constructor(obj: { text: string, url?: string, login_url?: LoginUrl, callback_data?: string, switch_inline_query?: string, switch_inline_query_current_chat?: string, callback_game?: CallbackGame, pay?: boolean,  } ) {
    this.text = obj.text;
    this.url = obj.url;
    this.login_url = obj.login_url;
    this.callback_data = obj.callback_data;
    this.switch_inline_query = obj.switch_inline_query;
    this.switch_inline_query_current_chat = obj.switch_inline_query_current_chat;
    this.callback_game = obj.callback_game;
    this.pay = obj.pay;
  }
 
}
