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
  readonly type: string;

  /**
  * Unique identifier for this result, 1-64 bytes
  */
  readonly id: string;

  /**
  * A valid URL of the photo. Photo must be in jpeg format. Photo size must not exceed 5MB
  */
  readonly photo_url: string;

  /**
  * URL of the thumbnail for the photo
  */
  readonly thumb_url: string;

  /**
  * Optional. Width of the photo
  */
  readonly photo_width?: number;

  /**
  * Optional. Height of the photo
  */
  readonly photo_height?: number;

  /**
  * Optional. Title for the result
  */
  readonly title?: string;

  /**
  * Optional. Short description of the result
  */
  readonly description?: string;

  /**
  * Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing
  */
  readonly caption?: string;

  /**
  * Optional. Mode for parsing entities in the photo caption. See formatting options for more details.
  */
  readonly parse_mode?: string;

  /**
  * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
  */
  readonly caption_entities?: MessageEntity[];

  /**
  * Optional. Inline keyboard attached to the message
  */
  readonly reply_markup?: InlineKeyboardMarkup;

  /**
  * Optional. Content of the message to be sent instead of the photo
  */
  readonly input_message_content?: (InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent);

  constructor(obj: { type: string, id: string, photo_url: string, thumb_url: string, photo_width?: number, photo_height?: number, title?: string, description?: string, caption?: string, parse_mode?: string, caption_entities?: MessageEntity[], reply_markup?: InlineKeyboardMarkup, input_message_content?: (InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent),  } ) {
    this.type = obj?.type;
    this.id = obj?.id;
    this.photo_url = obj?.photo_url;
    this.thumb_url = obj?.thumb_url;
    this.photo_width = obj?.photo_width;
    this.photo_height = obj?.photo_height;
    this.title = obj?.title;
    this.description = obj?.description;
    this.caption = obj?.caption;
    this.parse_mode = obj?.parse_mode;
    this.caption_entities = new MessageEntity[](obj?.caption_entities);
    this.reply_markup = new InlineKeyboardMarkup(obj?.reply_markup);
    this.input_message_content = new (InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent)(obj?.input_message_content);
  }
 
}
