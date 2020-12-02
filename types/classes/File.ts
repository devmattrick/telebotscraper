
/**
* 
Maximum file size to download is 20 MB

This object represents a file ready to be downloaded. The file can be downloaded via the link https://api.telegram.org/file/bot&lt;token&gt;/&lt;file_path&gt;. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile.
*/
export default class File {
  /**
  * Identifier for this file, which can be used to download or reuse the file
  */
  readonly file_id: string;

  /**
  * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can&#x27;t be used to download or reuse the file.
  */
  readonly file_unique_id: string;

  /**
  * Optional. File size, if known
  */
  readonly file_size?: number;

  /**
  * Optional. File path. Use https://api.telegram.org/file/bot&lt;token&gt;/&lt;file_path&gt; to get the file.
  */
  readonly file_path?: string;

  constructor(obj: { file_id: string, file_unique_id: string, file_size?: number, file_path?: string,  } ) {
    this.file_id = obj?.file_id;
    this.file_unique_id = obj?.file_unique_id;
    this.file_size = obj?.file_size;
    this.file_path = obj?.file_path;
  }
 
}
