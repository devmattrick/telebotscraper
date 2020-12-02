
/**
* Represents an issue in an unspecified place. The error is considered resolved when new data is added.
*/
export default class PassportElementErrorUnspecified {
  /**
  * Error source, must be unspecified
  */
  source: string;

  /**
  * Type of element of the user&#x27;s Telegram Passport which has the issue
  */
  type: string;

  /**
  * Base64-encoded element hash
  */
  element_hash: string;

  /**
  * Error message
  */
  message: string;

  constructor(obj: { source: string, type: string, element_hash: string, message: string,  } ) {
    this.source = obj.source;
    this.type = obj.type;
    this.element_hash = obj.element_hash;
    this.message = obj.message;
  }
 
}
