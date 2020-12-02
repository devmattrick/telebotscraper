import PhotoSize from './PhotoSize';

/**
* This object represents a video message (available in Telegram apps as of v.4.0).
*/
export default class VideoNote {
  /**
  * Identifier for this file, which can be used to download or reuse the file
  */
  readonly file_id: string;

  /**
  * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can&#x27;t be used to download or reuse the file.
  */
  readonly file_unique_id: string;

  /**
  * Video width and height (diameter of the video message) as defined by sender
  */
  readonly length: number;

  /**
  * Duration of the video in seconds as defined by sender
  */
  readonly duration: number;

  /**
  * Optional. Video thumbnail
  */
  readonly thumb?: PhotoSize;

  /**
  * Optional. File size
  */
  readonly file_size?: number;

  constructor(obj: { file_id: string, file_unique_id: string, length: number, duration: number, thumb?: PhotoSize, file_size?: number,  } ) {
    this.file_id = obj?.file_id;
    this.file_unique_id = obj?.file_unique_id;
    this.length = obj?.length;
    this.duration = obj?.duration;
    this.thumb = new PhotoSize(obj?.thumb);
    this.file_size = obj?.file_size;
  }
 
}
