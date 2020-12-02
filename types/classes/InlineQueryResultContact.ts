import InlineKeyboardMarkup from './InlineKeyboardMarkup';
import InputTextMessageContent from './InputTextMessageContent';
import InputLocationMessageContent from './InputLocationMessageContent';
import InputVenueMessageContent from './InputVenueMessageContent';
import InputContactMessageContent from './InputContactMessageContent';

/**
* Represents a contact with a phone number. By default, this contact will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the contact.
*/
export default class InlineQueryResultContact {
  /**
  * Type of the result, must be contact
  */
  readonly type: string;

  /**
  * Unique identifier for this result, 1-64 Bytes
  */
  readonly id: string;

  /**
  * Contact&#x27;s phone number
  */
  readonly phone_number: string;

  /**
  * Contact&#x27;s first name
  */
  readonly first_name: string;

  /**
  * Optional. Contact&#x27;s last name
  */
  readonly last_name?: string;

  /**
  * Optional. Additional data about the contact in the form of a vCard, 0-2048 bytes
  */
  readonly vcard?: string;

  /**
  * Optional. Inline keyboard attached to the message
  */
  readonly reply_markup?: InlineKeyboardMarkup;

  /**
  * Optional. Content of the message to be sent instead of the contact
  */
  readonly input_message_content?: (InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent);

  /**
  * Optional. Url of the thumbnail for the result
  */
  readonly thumb_url?: string;

  /**
  * Optional. Thumbnail width
  */
  readonly thumb_width?: number;

  /**
  * Optional. Thumbnail height
  */
  readonly thumb_height?: number;

  constructor(obj: { type: string, id: string, phone_number: string, first_name: string, last_name?: string, vcard?: string, reply_markup?: InlineKeyboardMarkup, input_message_content?: (InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent), thumb_url?: string, thumb_width?: number, thumb_height?: number,  } ) {
    this.type = obj?.type
    this.id = obj?.id
    this.phone_number = obj?.phone_number
    this.first_name = obj?.first_name
    this.last_name = obj?.last_name
    this.vcard = obj?.vcard
    this.reply_markup = obj?.reply_markup && new InlineKeyboardMarkup(obj.reply_markup)
    this.input_message_content = obj?.input_message_content && new (InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent)(obj.input_message_content)
    this.thumb_url = obj?.thumb_url
    this.thumb_width = obj?.thumb_width
    this.thumb_height = obj?.thumb_height
  }
 
}
