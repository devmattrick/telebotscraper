
/**
* This object represents one size of a photo or a file / sticker thumbnail.
*/
export default class PhotoSize {
  /**
  * Identifier for this file, which can be used to download or reuse the file
  */
  readonly file_id: string;

  /**
  * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can&#x27;t be used to download or reuse the file.
  */
  readonly file_unique_id: string;

  /**
  * Photo width
  */
  readonly width: number;

  /**
  * Photo height
  */
  readonly height: number;

  /**
  * Optional. File size
  */
  readonly file_size?: number;

  constructor(obj: { file_id: string, file_unique_id: string, width: number, height: number, file_size?: number,  } ) {
    this.file_id = obj?.file_id
    this.file_unique_id = obj?.file_unique_id
    this.width = obj?.width
    this.height = obj?.height
    this.file_size = obj?.file_size
  }
 
}
