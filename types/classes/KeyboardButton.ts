import KeyboardButtonPollType from './KeyboardButtonPollType';

/**
* This object represents one button of the reply keyboard. For simple text buttons string can be used instead of this object to specify text of the button. Optional fields request_contact, request_location, and request_poll are mutually exclusive.
*/
export default class KeyboardButton {
  /**
  * Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed
  */
  readonly text: string;

  /**
  * Optional. If true, the user&#x27;s phone number will be sent as a contact when the button is pressed. Available in private chats only
  */
  readonly request_contact?: boolean;

  /**
  * Optional. If true, the user&#x27;s current location will be sent when the button is pressed. Available in private chats only
  */
  readonly request_location?: boolean;

  /**
  * Optional. If specified, the user will be asked to create a poll and send it to the bot when the button is pressed. Available in private chats only
  */
  readonly request_poll?: KeyboardButtonPollType;

  constructor(obj: { text: string, request_contact?: boolean, request_location?: boolean, request_poll?: KeyboardButtonPollType,  } ) {
    this.text = obj?.text;
    this.request_contact = obj?.request_contact;
    this.request_location = obj?.request_location;
    this.request_poll = new KeyboardButtonPollType(obj?.request_poll);
  }
 
}
