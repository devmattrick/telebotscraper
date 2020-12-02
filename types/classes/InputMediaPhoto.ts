import MessageEntity from './MessageEntity';

/**
* Represents a photo to be sent.
*/
export default class InputMediaPhoto {
  /**
  * Type of the result, must be photo
  */
  readonly type: string;

  /**
  * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file_attach_name&gt;” to upload a new one using multipart/form-data under &lt;file_attach_name&gt; name. More info on Sending Files »
  */
  readonly media: string;

  /**
  * Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing
  */
  readonly caption?: string;

  /**
  * Optional. Mode for parsing entities in the photo caption. See formatting options for more details.
  */
  readonly parse_mode?: string;

  /**
  * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
  */
  readonly caption_entities?: MessageEntity[];

  constructor(obj: { type: string, media: string, caption?: string, parse_mode?: string, caption_entities?: MessageEntity[],  } ) {
    this.type = obj?.type;
    this.media = obj?.media;
    this.caption = obj?.caption;
    this.parse_mode = obj?.parse_mode;
    this.caption_entities = new MessageEntity[](obj?.caption_entities);
  }
 
}
