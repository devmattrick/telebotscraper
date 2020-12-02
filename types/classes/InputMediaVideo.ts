import InputFile from './InputFile';
import MessageEntity from './MessageEntity';

/**
* Represents a video to be sent.
*/
export default class InputMediaVideo {
  /**
  * Type of the result, must be video
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
  readonly width?: number;

  /**
  * Optional. Video height
  */
  readonly height?: number;

  /**
  * Optional. Video duration
  */
  readonly duration?: number;

  /**
  * Optional. Pass true, if the uploaded video is suitable for streaming
  */
  readonly supports_streaming?: boolean;

  constructor(obj: { type: string, media: string, thumb?: InputFile | string, caption?: string, parse_mode?: string, caption_entities?: MessageEntity[], width?: number, height?: number, duration?: number, supports_streaming?: boolean,  } ) {
    this.type = obj?.type;
    this.media = obj?.media;
    this.thumb = obj?.thumb && new InputFile | string(obj.thumb);
    this.caption = obj?.caption;
    this.parse_mode = obj?.parse_mode;
    this.caption_entities = obj?.caption_entities?.map(o=>new MessageEntity(o));
    this.width = obj?.width;
    this.height = obj?.height;
    this.duration = obj?.duration;
    this.supports_streaming = obj?.supports_streaming;
  }
 
}
