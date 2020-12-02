import MessageEntity from './MessageEntity';
import InlineKeyboardMarkup from './InlineKeyboardMarkup';
import InputTextMessageContent from './InputTextMessageContent';
import InputLocationMessageContent from './InputLocationMessageContent';
import InputVenueMessageContent from './InputVenueMessageContent';
import InputContactMessageContent from './InputContactMessageContent';

/**
* Represents a link to a video animation (H.264/MPEG-4 AVC video without sound). By default, this animated MPEG-4 file will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
*/
export default class InlineQueryResultMpeg4Gif {
  /**
  * Type of the result, must be mpeg4_gif
  */
  type: string;

  /**
  * Unique identifier for this result, 1-64 bytes
  */
  id: string;

  /**
  * A valid URL for the MP4 file. File size must not exceed 1MB
  */
  mpeg4_url: string;

  /**
  * Optional. Video width
  */
  mpeg4_width?: number;

  /**
  * Optional. Video height
  */
  mpeg4_height?: number;

  /**
  * Optional. Video duration
  */
  mpeg4_duration?: number;

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
  * Optional. Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing
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
  * Optional. Content of the message to be sent instead of the video animation
  */
  input_message_content?: (InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent);

  constructor(obj: { type: string, id: string, mpeg4_url: string, thumb_url: string, mpeg4_width?: number, mpeg4_height?: number, mpeg4_duration?: number, thumb_mime_type?: string, title?: string, caption?: string, parse_mode?: string, caption_entities?: MessageEntity[], reply_markup?: InlineKeyboardMarkup, input_message_content?: (InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent),  } ) {
    this.type = obj.type;
    this.id = obj.id;
    this.mpeg4_url = obj.mpeg4_url;
    this.mpeg4_width = obj.mpeg4_width;
    this.mpeg4_height = obj.mpeg4_height;
    this.mpeg4_duration = obj.mpeg4_duration;
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
