import MessageEntity from './MessageEntity';
import InlineKeyboardMarkup from './InlineKeyboardMarkup';
import InputTextMessageContent from './InputTextMessageContent';
import InputLocationMessageContent from './InputLocationMessageContent';
import InputVenueMessageContent from './InputVenueMessageContent';
import InputContactMessageContent from './InputContactMessageContent';

/**
* Represents a link to a voice message stored on the Telegram servers. By default, this voice message will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the voice message.
*/
export default class InlineQueryResultCachedVoice {
  /**
  * Type of the result, must be voice
  */
  readonly type: string;

  /**
  * Unique identifier for this result, 1-64 bytes
  */
  readonly id: string;

  /**
  * A valid file identifier for the voice message
  */
  readonly voice_file_id: string;

  /**
  * Voice message title
  */
  readonly title: string;

  /**
  * Optional. Caption, 0-1024 characters after entities parsing
  */
  readonly caption?: string;

  /**
  * Optional. Mode for parsing entities in the voice message caption. See formatting options for more details.
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
  * Optional. Content of the message to be sent instead of the voice message
  */
  readonly input_message_content?: (InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent);

  constructor(obj: { type: string, id: string, voice_file_id: string, title: string, caption?: string, parse_mode?: string, caption_entities?: MessageEntity[], reply_markup?: InlineKeyboardMarkup, input_message_content?: (InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent),  } ) {
    this.type = obj?.type;
    this.id = obj?.id;
    this.voice_file_id = obj?.voice_file_id;
    this.title = obj?.title;
    this.caption = obj?.caption;
    this.parse_mode = obj?.parse_mode;
    this.caption_entities = new MessageEntity[](obj?.caption_entities);
    this.reply_markup = new InlineKeyboardMarkup(obj?.reply_markup);
    this.input_message_content = new (InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent)(obj?.input_message_content);
  }
 
}
