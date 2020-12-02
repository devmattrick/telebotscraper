
/**
* Represents an issue with the front side of a document. The error is considered resolved when the file with the front side of the document changes.
*/
export default class PassportElementErrorFrontSide {
  /**
  * Error source, must be front_side
  */
  readonly source: string;

  /**
  * The section of the user&#x27;s Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”
  */
  readonly type: string;

  /**
  * Base64-encoded hash of the file with the front side of the document
  */
  readonly file_hash: string;

  /**
  * Error message
  */
  readonly message: string;

  constructor(obj: { source: string, type: string, file_hash: string, message: string,  } ) {
    this.source = obj?.source;
    this.type = obj?.type;
    this.file_hash = obj?.file_hash;
    this.message = obj?.message;
  }
 
}
