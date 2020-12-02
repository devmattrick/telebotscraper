/**
 * Represents an issue with the reverse side of a document. The error is considered resolved when the file with reverse side of the document changes.
 */
export default interface PassportElementErrorReverseSide {
  /**
   * Error source, must be reverse_side
   */
  source: string;

  /**
   * The section of the user&#x27;s Telegram Passport which has the issue, one of “driver_license”, “identity_card”
   */
  type: string;

  /**
   * Base64-encoded hash of the file with the reverse side of the document
   */
  file_hash: string;

  /**
   * Error message
   */
  message: string;

}
