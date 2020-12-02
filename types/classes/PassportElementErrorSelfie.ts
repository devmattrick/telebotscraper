
/**
* Represents an issue with the selfie with a document. The error is considered resolved when the file with the selfie changes.
*/
export default class PassportElementErrorSelfie {
  /**
  * Error source, must be selfie
  */
  readonly source: string;

  /**
  * The section of the user&#x27;s Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”
  */
  readonly type: string;

  /**
  * Base64-encoded hash of the file with the selfie
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
