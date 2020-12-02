
/**
* Represents the content of a contact message to be sent as the result of an inline query.
*/
export default class InputContactMessageContent {
  /**
  * Contact&#x27;s phone number
  */
  readonly phone_number: string;

  /**
  * Contact&#x27;s first name
  */
  readonly first_name: string;

  /**
  * Optional. Contact&#x27;s last name
  */
  readonly last_name?: string;

  /**
  * Optional. Additional data about the contact in the form of a vCard, 0-2048 bytes
  */
  readonly vcard?: string;

  constructor(obj: { phone_number: string, first_name: string, last_name?: string, vcard?: string,  } ) {
    this.phone_number = obj?.phone_number;
    this.first_name = obj?.first_name;
    this.last_name = obj?.last_name;
    this.vcard = obj?.vcard;
  }
 
}
