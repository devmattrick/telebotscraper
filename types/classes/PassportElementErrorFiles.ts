
/**
* Represents an issue with a list of scans. The error is considered resolved when the list of files containing the scans changes.
*/
export default class PassportElementErrorFiles {
  /**
  * Error source, must be files
  */
  readonly source: string;

  /**
  * The section of the user&#x27;s Telegram Passport which has the issue, one of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
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
    this.source = obj?.source
    this.type = obj?.type
    this.file_hashes = obj?.file_hashes
    this.message = obj?.message
  }
 
}
