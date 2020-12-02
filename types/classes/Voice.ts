
/**
* This object represents a voice note.
*/
export default class Voice {
  /**
  * Identifier for this file, which can be used to download or reuse the file
  */
  readonly file_id: string;

  /**
  * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can&#x27;t be used to download or reuse the file.
  */
  readonly file_unique_id: string;

  /**
  * Duration of the audio in seconds as defined by sender
  */
  readonly duration: number;

  /**
  * Optional. MIME type of the file as defined by sender
  */
  readonly mime_type?: string;

  /**
  * Optional. File size
  */
  readonly file_size?: number;

  constructor(obj: { file_id: string, file_unique_id: string, duration: number, mime_type?: string, file_size?: number,  } ) {
    this.file_id = obj?.file_id;
    this.file_unique_id = obj?.file_unique_id;
    this.duration = obj?.duration;
    this.mime_type = obj?.mime_type;
    this.file_size = obj?.file_size;
  }
 
}
