
/**
* This object represents a phone contact.
*/
export default class Contact {
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
  * Optional. Contact&#x27;s user identifier in Telegram
  */
  readonly user_id?: number;

  /**
  * Optional. Additional data about the contact in the form of a vCard
  */
  readonly vcard?: string;

  constructor(obj: { phone_number: string, first_name: string, last_name?: string, user_id?: number, vcard?: string,  } ) {
    this.phone_number = obj?.phone_number;
    this.first_name = obj?.first_name;
    this.last_name = obj?.last_name;
    this.user_id = obj?.user_id;
    this.vcard = obj?.vcard;
  }
 
}
