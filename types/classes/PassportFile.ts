
/**
* This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files are in JPEG format when decrypted and don&#x27;t exceed 10MB.
*/
export default class PassportFile {
  /**
  * Identifier for this file, which can be used to download or reuse the file
  */
  readonly file_id: string;

  /**
  * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can&#x27;t be used to download or reuse the file.
  */
  readonly file_unique_id: string;

  /**
  * File size
  */
  readonly file_size: number;

  /**
  * Unix time when the file was uploaded
  */
  readonly file_date: number;

  constructor(obj: { file_id: string, file_unique_id: string, file_size: number, file_date: number,  } ) {
    this.file_id = obj?.file_id;
    this.file_unique_id = obj?.file_unique_id;
    this.file_size = obj?.file_size;
    this.file_date = obj?.file_date;
  }
 
}
