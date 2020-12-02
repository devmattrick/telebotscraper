import MessageEntity from './MessageEntity';
import InlineKeyboardMarkup from './InlineKeyboardMarkup';
import InputTextMessageContent from './InputTextMessageContent';
import InputLocationMessageContent from './InputLocationMessageContent';
import InputVenueMessageContent from './InputVenueMessageContent';
import InputContactMessageContent from './InputContactMessageContent';

/**
* Represents a link to a voice recording in an .OGG container encoded with OPUS. By default, this voice recording will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the the voice message.
*/
export default class InlineQueryResultVoice {
  /**
  * Type of the result, must be voice
  */
  type: string;

  /**
  * Unique identifier for this result, 1-64 bytes
  */
  id: string;

  /**
  * A valid URL for the voice recording
  */
  voice_url: string;

  /**
  * Recording title
  */
  title: string;

  /**
  * Optional. Caption, 0-1024 characters after entities parsing
  */
  caption?: string;

  /**
  * Optional. Mode for parsing entities in the voice message caption. See formatting options for more details.
  */
  parse_mode?: string;

  /**
  * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
  */
  caption_entities?: MessageEntity[];

  /**
  * Optional. Recording duration in seconds
  */
  voice_duration?: number;

  /**
  * Optional. Inline keyboard attached to the message
  */
  reply_markup?: InlineKeyboardMarkup;

  /**
  * Optional. Content of the message to be sent instead of the voice recording
  */
  input_message_content?: (InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent);

  constructor(obj: { type: string, id: string, voice_url: string, title: string, caption?: string, parse_mode?: string, caption_entities?: MessageEntity[], voice_duration?: number, reply_markup?: InlineKeyboardMarkup, input_message_content?: (InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent),  } ) {
    this.type = obj.type;
    this.id = obj.id;
    this.voice_url = obj.voice_url;
    this.title = obj.title;
    this.caption = obj.caption;
    this.parse_mode = obj.parse_mode;
    this.caption_entities = obj.caption_entities;
    this.voice_duration = obj.voice_duration;
    this.reply_markup = obj.reply_markup;
    this.input_message_content = obj.input_message_content;
  }
 
}
