
/**
* Represents an issue with one of the files that constitute the translation of a document. The error is considered resolved when the file changes.
*/
export default class PassportElementErrorTranslationFile {
  /**
  * Error source, must be translation_file
  */
  source: string;

  /**
  * Type of element of the user&#x27;s Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
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

  constructor(obj: { source: string, type: string, file_hash: string, message: string,  } ) {
    this.source = obj.source;
    this.type = obj.type;
    this.file_hash = obj.file_hash;
    this.message = obj.message;
  }
 
}
