import MessageEntity from './MessageEntity';
import InlineKeyboardMarkup from './InlineKeyboardMarkup';
import InputTextMessageContent from './InputTextMessageContent';
import InputLocationMessageContent from './InputLocationMessageContent';
import InputVenueMessageContent from './InputVenueMessageContent';
import InputContactMessageContent from './InputContactMessageContent';

/**
* Represents a link to an MP3 audio file. By default, this audio file will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the audio.
*/
export default class InlineQueryResultAudio {
  /**
  * Type of the result, must be audio
  */
  readonly type: string;

  /**
  * Unique identifier for this result, 1-64 bytes
  */
  readonly id: string;

  /**
  * A valid URL for the audio file
  */
  readonly audio_url: string;

  /**
  * Title
  */
  readonly title: string;

  /**
  * Optional. Caption, 0-1024 characters after entities parsing
  */
  readonly caption?: string;

  /**
  * Optional. Mode for parsing entities in the audio caption. See formatting options for more details.
  */
  readonly parse_mode?: string;

  /**
  * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
  */
  readonly caption_entities?: MessageEntity[];

  /**
  * Optional. Performer
  */
  readonly performer?: string;

  /**
  * Optional. Audio duration in seconds
  */
  readonly audio_duration?: number;

  /**
  * Optional. Inline keyboard attached to the message
  */
  readonly reply_markup?: InlineKeyboardMarkup;

  /**
  * Optional. Content of the message to be sent instead of the audio
  */
  readonly input_message_content?: (InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent);

  constructor(obj: { type: string, id: string, audio_url: string, title: string, caption?: string, parse_mode?: string, caption_entities?: MessageEntity[], performer?: string, audio_duration?: number, reply_markup?: InlineKeyboardMarkup, input_message_content?: (InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent),  } ) {
    this.type = obj?.type;
    this.id = obj?.id;
    this.audio_url = obj?.audio_url;
    this.title = obj?.title;
    this.caption = obj?.caption;
    this.parse_mode = obj?.parse_mode;
    this.caption_entities = obj?.caption_entities;
    this.performer = obj?.performer;
    this.audio_duration = obj?.audio_duration;
    this.reply_markup = obj?.reply_markup;
    this.input_message_content = obj?.input_message_content;
  }
 
}
