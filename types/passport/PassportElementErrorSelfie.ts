/**
 * Represents an issue with the selfie with a document. The error is considered resolved when the file with the selfie changes.
 */
export default interface PassportElementErrorSelfie {
  /**
   * Error source, must be selfie
   */
  source: string;

  /**
   * The section of the user&#x27;s Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”
   */
  type: string;

  /**
   * Base64-encoded hash of the file with the selfie
   */
  file_hash: string;

  /**
   * Error message
   */
  message: string;

}
