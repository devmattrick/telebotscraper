/**
 * This object represents an audio file to be treated as music by the Telegram clients.
 */
export default interface Audio {
  /**
   * Identifier for this file, which can be used to download or reuse the file
   */
  file_id: string;

  /**
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can&#x27;t be used to download or reuse the file.
   */
  file_unique_id: string;

  /**
   * Duration of the audio in seconds as defined by sender
   */
  duration: number;

  /**
   * Optional. Performer of the audio as defined by sender or by audio tags
   */
  performer?: string;

  /**
   * Optional. Title of the audio as defined by sender or by audio tags
   */
  title?: string;

  /**
   * Optional. Original filename as defined by sender
   */
  file_name?: string;

  /**
   * Optional. MIME type of the file as defined by sender
   */
  mime_type?: string;

  /**
   * Optional. File size
   */
  file_size?: number;

  /**
   * Optional. Thumbnail of the album cover to which the music file belongs
   */
  thumb?: PhotoSize;

}
