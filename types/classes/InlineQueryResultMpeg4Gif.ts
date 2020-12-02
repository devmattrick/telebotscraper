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
  readonly type: string;

  /**
  * Unique identifier for this result, 1-64 bytes
  */
  readonly id: string;

  /**
  * A valid URL for the MP4 file. File size must not exceed 1MB
  */
  readonly mpeg4_url: string;

  /**
  * Optional. Video width
  */
  readonly mpeg4_width?: number;

  /**
  * Optional. Video height
  */
  readonly mpeg4_height?: number;

  /**
  * Optional. Video duration
  */
  readonly mpeg4_duration?: number;

  /**
  * URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result
  */
  readonly thumb_url: string;

  /**
  * Optional. MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg”
  */
  readonly thumb_mime_type?: string;

  /**
  * Optional. Title for the result
  */
  readonly title?: string;

  /**
  * Optional. Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing
  */
  readonly caption?: string;

  /**
  * Optional. Mode for parsing entities in the caption. See formatting options for more details.
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
  * Optional. Content of the message to be sent instead of the video animation
  */
  readonly input_message_content?: (InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent);

  constructor(obj: { type: string, id: string, mpeg4_url: string, thumb_url: string, mpeg4_width?: number, mpeg4_height?: number, mpeg4_duration?: number, thumb_mime_type?: string, title?: string, caption?: string, parse_mode?: string, caption_entities?: MessageEntity[], reply_markup?: InlineKeyboardMarkup, input_message_content?: (InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent),  } ) {
    this.type = obj?.type;
    this.id = obj?.id;
    this.mpeg4_url = obj?.mpeg4_url;
    this.mpeg4_width = obj?.mpeg4_width;
    this.mpeg4_height = obj?.mpeg4_height;
    this.mpeg4_duration = obj?.mpeg4_duration;
    this.thumb_url = obj?.thumb_url;
    this.thumb_mime_type = obj?.thumb_mime_type;
    this.title = obj?.title;
    this.caption = obj?.caption;
    this.parse_mode = obj?.parse_mode;
    this.caption_entities = new MessageEntity[](obj?.caption_entities);
    this.reply_markup = new InlineKeyboardMarkup(obj?.reply_markup);
    this.input_message_content = new (InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent)(obj?.input_message_content);
  }
 
}
