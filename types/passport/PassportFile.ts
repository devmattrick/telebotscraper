/**
 * This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files are in JPEG format when decrypted and don&#x27;t exceed 10MB.
 */
export default interface PassportFile {
  /**
   * Identifier for this file, which can be used to download or reuse the file
   */
  file_id: string;

  /**
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can&#x27;t be used to download or reuse the file.
   */
  file_unique_id: string;

  /**
   * File size
   */
  file_size: number;

  /**
   * Unix time when the file was uploaded
   */
  file_date: number;

}
