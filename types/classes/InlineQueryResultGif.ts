import MessageEntity from './MessageEntity';
import InlineKeyboardMarkup from './InlineKeyboardMarkup';
import InputTextMessageContent from './InputTextMessageContent';
import InputLocationMessageContent from './InputLocationMessageContent';
import InputVenueMessageContent from './InputVenueMessageContent';
import InputContactMessageContent from './InputContactMessageContent';

/**
* Represents a link to an animated GIF file. By default, this animated GIF file will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
*/
export default class InlineQueryResultGif {
  /**
  * Type of the result, must be gif
  */
  type: string;

  /**
  * Unique identifier for this result, 1-64 bytes
  */
  id: string;

  /**
  * A valid URL for the GIF file. File size must not exceed 1MB
  */
  gif_url: string;

  /**
  * Optional. Width of the GIF
  */
  gif_width?: number;

  /**
  * Optional. Height of the GIF
  */
  gif_height?: number;

  /**
  * Optional. Duration of the GIF
  */
  gif_duration?: number;

  /**
  * URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result
  */
  thumb_url: string;

  /**
  * Optional. MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg”
  */
  thumb_mime_type?: string;

  /**
  * Optional. Title for the result
  */
  title?: string;

  /**
  * Optional. Caption of the GIF file to be sent, 0-1024 characters after entities parsing
  */
  caption?: string;

  /**
  * Optional. Mode for parsing entities in the caption. See formatting options for more details.
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
  * Optional. Content of the message to be sent instead of the GIF animation
  */
  input_message_content?: (InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent);

  constructor(obj: { type: string, id: string, gif_url: string, thumb_url: string, gif_width?: number, gif_height?: number, gif_duration?: number, thumb_mime_type?: string, title?: string, caption?: string, parse_mode?: string, caption_entities?: MessageEntity[], reply_markup?: InlineKeyboardMarkup, input_message_content?: (InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent),  } ) {
    this.type = obj.type;
    this.id = obj.id;
    this.gif_url = obj.gif_url;
    this.gif_width = obj.gif_width;
    this.gif_height = obj.gif_height;
    this.gif_duration = obj.gif_duration;
    this.thumb_url = obj.thumb_url;
    this.thumb_mime_type = obj.thumb_mime_type;
    this.title = obj.title;
    this.caption = obj.caption;
    this.parse_mode = obj.parse_mode;
    this.caption_entities = obj.caption_entities;
    this.reply_markup = obj.reply_markup;
    this.input_message_content = obj.input_message_content;
  }
 
}
