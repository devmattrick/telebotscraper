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
  type: string;

  /**
  * Unique identifier for this result, 1-64 bytes
  */
  id: string;

  /**
  * Title for the result
  */
  title: string;

  /**
  * Optional. Caption of the document to be sent, 0-1024 characters after entities parsing
  */
  caption?: string;

  /**
  * Optional. Mode for parsing entities in the document caption. See formatting options for more details.
  */
  parse_mode?: string;

  /**
  * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
  */
  caption_entities?: MessageEntity[];

  /**
  * A valid URL for the file
  */
  document_url: string;

  /**
  * Mime type of the content of the file, either “application/pdf” or “application/zip”
  */
  mime_type: string;

  /**
  * Optional. Short description of the result
  */
  description?: string;

  /**
  * Optional. Inline keyboard attached to the message
  */
  reply_markup?: InlineKeyboardMarkup;

  /**
  * Optional. Content of the message to be sent instead of the file
  */
  input_message_content?: (InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent);

  /**
  * Optional. URL of the thumbnail (jpeg only) for the file
  */
  thumb_url?: string;

  /**
  * Optional. Thumbnail width
  */
  thumb_width?: number;

  /**
  * Optional. Thumbnail height
  */
  thumb_height?: number;

  constructor(obj: { type: string, id: string, title: string, document_url: string, mime_type: string, caption?: string, parse_mode?: string, caption_entities?: MessageEntity[], description?: string, reply_markup?: InlineKeyboardMarkup, input_message_content?: (InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent), thumb_url?: string, thumb_width?: number, thumb_height?: number,  } ) {
    this.type = obj.type;
    this.id = obj.id;
    this.title = obj.title;
    this.caption = obj.caption;
    this.parse_mode = obj.parse_mode;
    this.caption_entities = obj.caption_entities;
    this.document_url = obj.document_url;
    this.mime_type = obj.mime_type;
    this.description = obj.description;
    this.reply_markup = obj.reply_markup;
    this.input_message_content = obj.input_message_content;
    this.thumb_url = obj.thumb_url;
    this.thumb_width = obj.thumb_width;
    this.thumb_height = obj.thumb_height;
  }
 
}
