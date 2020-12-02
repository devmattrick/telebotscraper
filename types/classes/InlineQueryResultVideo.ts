import MessageEntity from './MessageEntity';
import InlineKeyboardMarkup from './InlineKeyboardMarkup';
import InputTextMessageContent from './InputTextMessageContent';
import InputLocationMessageContent from './InputLocationMessageContent';
import InputVenueMessageContent from './InputVenueMessageContent';
import InputContactMessageContent from './InputContactMessageContent';

/**
* 
If an InlineQueryResultVideo message contains an embedded video (e.g., YouTube), you must replace its content using input_message_content.

Represents a link to a page containing an embedded video player or a video file. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the video.
*/
export default class InlineQueryResultVideo {
  /**
  * Type of the result, must be video
  */
  readonly type: string;

  /**
  * Unique identifier for this result, 1-64 bytes
  */
  readonly id: string;

  /**
  * A valid URL for the embedded video player or video file
  */
  readonly video_url: string;

  /**
  * Mime type of the content of video url, “text/html” or “video/mp4”
  */
  readonly mime_type: string;

  /**
  * URL of the thumbnail (jpeg only) for the video
  */
  readonly thumb_url: string;

  /**
  * Title for the result
  */
  readonly title: string;

  /**
  * Optional. Caption of the video to be sent, 0-1024 characters after entities parsing
  */
  readonly caption?: string;

  /**
  * Optional. Mode for parsing entities in the video caption. See formatting options for more details.
  */
  readonly parse_mode?: string;

  /**
  * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
  */
  readonly caption_entities?: MessageEntity[];

  /**
  * Optional. Video width
  */
  readonly video_width?: number;

  /**
  * Optional. Video height
  */
  readonly video_height?: number;

  /**
  * Optional. Video duration in seconds
  */
  readonly video_duration?: number;

  /**
  * Optional. Short description of the result
  */
  readonly description?: string;

  /**
  * Optional. Inline keyboard attached to the message
  */
  readonly reply_markup?: InlineKeyboardMarkup;

  /**
  * Optional. Content of the message to be sent instead of the video. This field is required if InlineQueryResultVideo is used to send an HTML-page as a result (e.g., a YouTube video).
  */
  readonly input_message_content?: (InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent);

  constructor(obj: { type: string, id: string, video_url: string, mime_type: string, thumb_url: string, title: string, caption?: string, parse_mode?: string, caption_entities?: MessageEntity[], video_width?: number, video_height?: number, video_duration?: number, description?: string, reply_markup?: InlineKeyboardMarkup, input_message_content?: (InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent),  } ) {
    this.type = obj?.type;
    this.id = obj?.id;
    this.video_url = obj?.video_url;
    this.mime_type = obj?.mime_type;
    this.thumb_url = obj?.thumb_url;
    this.title = obj?.title;
    this.caption = obj?.caption;
    this.parse_mode = obj?.parse_mode;
    this.caption_entities = obj?.caption_entities && new MessageEntity[](obj.caption_entities);
    this.video_width = obj?.video_width;
    this.video_height = obj?.video_height;
    this.video_duration = obj?.video_duration;
    this.description = obj?.description;
    this.reply_markup = obj?.reply_markup && new InlineKeyboardMarkup(obj.reply_markup);
    this.input_message_content = obj?.input_message_content && new (InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent)(obj.input_message_content);
  }
 
}
