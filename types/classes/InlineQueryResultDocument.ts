import MessageEntity from './MessageEntity';
import InlineKeyboardMarkup from './InlineKeyboardMarkup';
import InputTextMessageContent from './InputTextMessageContent';
import InputLocationMessageContent from './InputLocationMessageContent';
import InputVenueMessageContent from './InputVenueMessageContent';
import InputContactMessageContent from './InputContactMessageContent';

/**
* Represents a link to a file. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the file. Currently, only .PDF and .ZIP files can be sent using this method.
*/
export default class InlineQueryResultDocument {
  /**
  * Type of the result, must be document
  */
  readonly type: string;

  /**
  * Unique identifier for this result, 1-64 bytes
  */
  readonly id: string;

  /**
  * Title for the result
  */
  readonly title: string;

  /**
  * Optional. Caption of the document to be sent, 0-1024 characters after entities parsing
  */
  readonly caption?: string;

  /**
  * Optional. Mode for parsing entities in the document caption. See formatting options for more details.
  */
  readonly parse_mode?: string;

  /**
  * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
  */
  readonly caption_entities?: MessageEntity[];

  /**
  * A valid URL for the file
  */
  readonly document_url: string;

  /**
  * Mime type of the content of the file, either “application/pdf” or “application/zip”
  */
  readonly mime_type: string;

  /**
  * Optional. Short description of the result
  */
  readonly description?: string;

  /**
  * Optional. Inline keyboard attached to the message
  */
  readonly reply_markup?: InlineKeyboardMarkup;

  /**
  * Optional. Content of the message to be sent instead of the file
  */
  readonly input_message_content?: (InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent);

  /**
  * Optional. URL of the thumbnail (jpeg only) for the file
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

  constructor(obj: { type: string, id: string, title: string, document_url: string, mime_type: string, caption?: string, parse_mode?: string, caption_entities?: MessageEntity[], description?: string, reply_markup?: InlineKeyboardMarkup, input_message_content?: (InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent), thumb_url?: string, thumb_width?: number, thumb_height?: number,  } ) {
    this.type = obj?.type;
    this.id = obj?.id;
    this.title = obj?.title;
    this.caption = obj?.caption;
    this.parse_mode = obj?.parse_mode;
    this.caption_entities = obj?.caption_entities?.map(o=>new MessageEntity(o));
    this.document_url = obj?.document_url;
    this.mime_type = obj?.mime_type;
    this.description = obj?.description;
    this.reply_markup = obj?.reply_markup && new InlineKeyboardMarkup(obj.reply_markup);
    this.input_message_content = obj?.input_message_content && new (InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent)(obj.input_message_content);
    this.thumb_url = obj?.thumb_url;
    this.thumb_width = obj?.thumb_width;
    this.thumb_height = obj?.thumb_height;
  }
 
}
