import MessageEntity from './MessageEntity';
import InlineKeyboardMarkup from './InlineKeyboardMarkup';
import InputTextMessageContent from './InputTextMessageContent';
import InputLocationMessageContent from './InputLocationMessageContent';
import InputVenueMessageContent from './InputVenueMessageContent';
import InputContactMessageContent from './InputContactMessageContent';

/**
* Represents a link to a photo. By default, this photo will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the photo.
*/
export default class InlineQueryResultPhoto {
  /**
  * Type of the result, must be photo
  */
  type: string;

  /**
  * Unique identifier for this result, 1-64 bytes
  */
  id: string;

  /**
  * A valid URL of the photo. Photo must be in jpeg format. Photo size must not exceed 5MB
  */
  photo_url: string;

  /**
  * URL of the thumbnail for the photo
  */
  thumb_url: string;

  /**
  * Optional. Width of the photo
  */
  photo_width?: number;

  /**
  * Optional. Height of the photo
  */
  photo_height?: number;

  /**
  * Optional. Title for the result
  */
  title?: string;

  /**
  * Optional. Short description of the result
  */
  description?: string;

  /**
  * Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing
  */
  caption?: string;

  /**
  * Optional. Mode for parsing entities in the photo caption. See formatting options for more details.
  */
  parse_mode?: string;

  /**
  * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
  */
  caption_entities?: MessageEntity[];

  /**
  * Optional. Inline keyboard attached to the message
  */
  reply_markup?: InlineKeyboardMarkup;

  /**
  * Optional. Content of the message to be sent instead of the photo
  */
  input_message_content?: (InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent);

  constructor(obj: { type: string, id: string, photo_url: string, thumb_url: string, photo_width?: number, photo_height?: number, title?: string, description?: string, caption?: string, parse_mode?: string, caption_entities?: MessageEntity[], reply_markup?: InlineKeyboardMarkup, input_message_content?: (InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent),  } ) {
    this.type = obj.type;
    this.id = obj.id;
    this.photo_url = obj.photo_url;
    this.thumb_url = obj.thumb_url;
    this.photo_width = obj.photo_width;
    this.photo_height = obj.photo_height;
    this.title = obj.title;
    this.description = obj.description;
    this.caption = obj.caption;
    this.parse_mode = obj.parse_mode;
    this.caption_entities = obj.caption_entities;
    this.reply_markup = obj.reply_markup;
    this.input_message_content = obj.input_message_content;
  }
 
}
