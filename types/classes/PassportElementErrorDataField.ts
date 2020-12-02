
/**
* Represents an issue in one of the data fields that was provided by the user. The error is considered resolved when the field&#x27;s value changes.
*/
export default class PassportElementErrorDataField {
  /**
  * Error source, must be data
  */
  source: string;

  /**
  * The section of the user&#x27;s Telegram Passport which has the error, one of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”, “address”
  */
  type: string;

  /**
  * Name of the data field which has the error
  */
  field_name: string;

  /**
  * Base64-encoded data hash
  */
  data_hash: string;

  /**
  * Error message
  */
  message: string;

  constructor(obj: { source: string, type: string, field_name: string, data_hash: string, message: string,  } ) {
    this.source = obj.source;
    this.type = obj.type;
    this.field_name = obj.field_name;
    this.data_hash = obj.data_hash;
    this.message = obj.message;
  }
 
}
