import InputFile from './InputFile';
import MessageEntity from './MessageEntity';

/**
* Represents an animation file (GIF or H.264/MPEG-4 AVC video without sound) to be sent.
*/
export default class InputMediaAnimation {
  /**
  * Type of the result, must be animation
  */
  readonly type: string;

  /**
  * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file_attach_name&gt;” to upload a new one using multipart/form-data under &lt;file_attach_name&gt; name. More info on Sending Files »
  */
  readonly media: string;

  /**
  * Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail&#x27;s width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can&#x27;t be reused and can be only uploaded as a new file, so you can pass “attach://&lt;file_attach_name&gt;” if the thumbnail was uploaded using multipart/form-data under &lt;file_attach_name&gt;. More info on Sending Files »
  */
  readonly thumb?: InputFile | string;

  /**
  * Optional. Caption of the animation to be sent, 0-1024 characters after entities parsing
  */
  readonly caption?: string;

  /**
  * Optional. Mode for parsing entities in the animation caption. See formatting options for more details.
  */
  readonly parse_mode?: string;

  /**
  * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
  */
  readonly caption_entities?: MessageEntity[];

  /**
  * Optional. Animation width
  */
  readonly width?: number;

  /**
  * Optional. Animation height
  */
  readonly height?: number;

  /**
  * Optional. Animation duration
  */
  readonly duration?: number;

  constructor(obj: { type: string, media: string, thumb?: InputFile | string, caption?: string, parse_mode?: string, caption_entities?: MessageEntity[], width?: number, height?: number, duration?: number,  } ) {
    this.type = obj?.type;
    this.media = obj?.media;
    this.thumb = new InputFile | string(obj?.thumb);
    this.caption = obj?.caption;
    this.parse_mode = obj?.parse_mode;
    this.caption_entities = new MessageEntity[](obj?.caption_entities);
    this.width = obj?.width;
    this.height = obj?.height;
    this.duration = obj?.duration;
  }
 
}
