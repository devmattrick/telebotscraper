/**
 * This object represents a video file.
 */
export default interface Video {
  /**
   * Identifier for this file, which can be used to download or reuse the file
   */
  file_id: string;

  /**
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can&#x27;t be used to download or reuse the file.
   */
  file_unique_id: string;

  /**
   * Video width as defined by sender
   */
  width: number;

  /**
   * Video height as defined by sender
   */
  height: number;

  /**
   * Duration of the video in seconds as defined by sender
   */
  duration: number;

  /**
   * Optional. Video thumbnail
   */
  thumb?: PhotoSize;

  /**
   * Optional. Original filename as defined by sender
   */
  file_name?: string;

  /**
   * Optional. Mime type of a file as defined by sender
   */
  mime_type?: string;

  /**
   * Optional. File size
   */
  file_size?: number;

}
