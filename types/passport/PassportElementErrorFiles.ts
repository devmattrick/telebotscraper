/**
 * Represents an issue with a list of scans. The error is considered resolved when the list of files containing the scans changes.
 */
export default interface PassportElementErrorFiles {
  /**
   * Error source, must be files
   */
  source: string;

  /**
   * The section of the user&#x27;s Telegram Passport which has the issue, one of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
   */
  type: string;

  /**
   * List of base64-encoded file hashes
   */
  file_hashes: string[];

  /**
   * Error message
   */
  message: string;

}
