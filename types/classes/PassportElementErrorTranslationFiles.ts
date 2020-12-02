
/**
* Represents an issue with the translated version of a document. The error is considered resolved when a file with the document translation change.
*/
export default class PassportElementErrorTranslationFiles {
  /**
  * Error source, must be translation_files
  */
  readonly source: string;

  /**
  * Type of element of the user&#x27;s Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
  */
  readonly type: string;

  /**
  * List of base64-encoded file hashes
  */
  readonly file_hashes: string[];

  /**
  * Error message
  */
  readonly message: string;

  constructor(obj: { source: string, type: string, file_hashes: string[], message: string,  } ) {
    this.source = obj?.source;
    this.type = obj?.type;
    this.file_hashes = obj?.file_hashes;
    this.message = obj?.message;
  }
 
}
