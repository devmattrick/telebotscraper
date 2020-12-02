/**
 * Represents an issue with a document scan. The error is considered resolved when the file with the document scan changes.
 */
export default interface PassportElementErrorFile {
  /**
   * Error source, must be file
   */
  source: string;

  /**
   * The section of the user&#x27;s Telegram Passport which has the issue, one of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
   */
  type: string;

  /**
   * Base64-encoded file hash
   */
  file_hash: string;

  /**
   * Error message
   */
  message: string;

}
