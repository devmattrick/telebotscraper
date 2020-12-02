import PhotoSize from './PhotoSize';

/**
* This object represents an animation file (GIF or H.264/MPEG-4 AVC video without sound).
*/
export default class Animation {
  /**
  * Identifier for this file, which can be used to download or reuse the file
  */
  readonly file_id: string;

  /**
  * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can&#x27;t be used to download or reuse the file.
  */
  readonly file_unique_id: string;

  /**
  * Video width as defined by sender
  */
  readonly width: number;

  /**
  * Video height as defined by sender
  */
  readonly height: number;

  /**
  * Duration of the video in seconds as defined by sender
  */
  readonly duration: number;

  /**
  * Optional. Animation thumbnail as defined by sender
  */
  readonly thumb?: PhotoSize;

  /**
  * Optional. Original animation filename as defined by sender
  */
  readonly file_name?: string;

  /**
  * Optional. MIME type of the file as defined by sender
  */
  readonly mime_type?: string;

  /**
  * Optional. File size
  */
  readonly file_size?: number;

  constructor(obj: { file_id: string, file_unique_id: string, width: number, height: number, duration: number, thumb?: PhotoSize, file_name?: string, mime_type?: string, file_size?: number,  } ) {
    this.file_id = obj?.file_id
    this.file_unique_id = obj?.file_unique_id
    this.width = obj?.width
    this.height = obj?.height
    this.duration = obj?.duration
    this.thumb = obj?.thumb && new PhotoSize(obj.thumb)
    this.file_name = obj?.file_name
    this.mime_type = obj?.mime_type
    this.file_size = obj?.file_size
  }
 
}