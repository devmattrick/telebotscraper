import InputTextMessageContent from './InputTextMessageContent';
import InputLocationMessageContent from './InputLocationMessageContent';
import InputVenueMessageContent from './InputVenueMessageContent';
import InputContactMessageContent from './InputContactMessageContent';
import InlineKeyboardMarkup from './InlineKeyboardMarkup';

/**
* Represents a link to an article or web page.
*/
export default class InlineQueryResultArticle {
  /**
  * Type of the result, must be article
  */
  readonly type: string;

  /**
  * Unique identifier for this result, 1-64 Bytes
  */
  readonly id: string;

  /**
  * Title of the result
  */
  readonly title: string;

  /**
  * Content of the message to be sent
  */
  readonly input_message_content: (InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent);

  /**
  * Optional. Inline keyboard attached to the message
  */
  readonly reply_markup?: InlineKeyboardMarkup;

  /**
  * Optional. URL of the result
  */
  readonly url?: string;

  /**
  * Optional. Pass true, if you don&#x27;t want the URL to be shown in the message
  */
  readonly hide_url?: boolean;

  /**
  * Optional. Short description of the result
  */
  readonly description?: string;

  /**
  * Optional. Url of the thumbnail for the result
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

  constructor(obj: { type: string, id: string, title: string, input_message_content: (InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent), reply_markup?: InlineKeyboardMarkup, url?: string, hide_url?: boolean, description?: string, thumb_url?: string, thumb_width?: number, thumb_height?: number,  } ) {
    this.type = obj?.type
    this.id = obj?.id
    this.title = obj?.title
    this.input_message_content = obj?.input_message_content && new (InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent)(obj.input_message_content)
    this.reply_markup = obj?.reply_markup && new InlineKeyboardMarkup(obj.reply_markup)
    this.url = obj?.url
    this.hide_url = obj?.hide_url
    this.description = obj?.description
    this.thumb_url = obj?.thumb_url
    this.thumb_width = obj?.thumb_width
    this.thumb_height = obj?.thumb_height
  }
 
}
