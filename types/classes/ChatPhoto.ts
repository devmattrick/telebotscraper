
/**
* This object represents a chat photo.
*/
export default class ChatPhoto {
  /**
  * File identifier of small (160x160) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed.
  */
  small_file_id: string;

  /**
  * Unique file identifier of small (160x160) chat photo, which is supposed to be the same over time and for different bots. Can&#x27;t be used to download or reuse the file.
  */
  small_file_unique_id: string;

  /**
  * File identifier of big (640x640) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed.
  */
  big_file_id: string;

  /**
  * Unique file identifier of big (640x640) chat photo, which is supposed to be the same over time and for different bots. Can&#x27;t be used to download or reuse the file.
  */
  big_file_unique_id: string;

  constructor(obj: { small_file_id: string, small_file_unique_id: string, big_file_id: string, big_file_unique_id: string,  } ) {
    this.small_file_id = obj.small_file_id;
    this.small_file_unique_id = obj.small_file_unique_id;
    this.big_file_id = obj.big_file_id;
    this.big_file_unique_id = obj.big_file_unique_id;
  }
 
}
