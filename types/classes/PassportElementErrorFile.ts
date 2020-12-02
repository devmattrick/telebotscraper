
/**
* Represents an issue with a document scan. The error is considered resolved when the file with the document scan changes.
*/
export default class PassportElementErrorFile {
  /**
  * Error source, must be file
  */
  readonly source: string;

  /**
  * The section of the user&#x27;s Telegram Passport which has the issue, one of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
  */
  readonly type: string;

  /**
  * Base64-encoded file hash
  */
  readonly file_hash: string;

  /**
  * Error message
  */
  readonly message: string;

  constructor(obj: { source: string, type: string, file_hash: string, message: string,  } ) {
    this.source = obj?.source
    this.type = obj?.type
    this.file_hash = obj?.file_hash
    this.message = obj?.message
  }
 
}
