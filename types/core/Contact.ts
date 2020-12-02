/**
 * This object represents a phone contact.
 */
export default interface Contact {
  /**
   * Contact&#x27;s phone number
   */
  phone_number: string;

  /**
   * Contact&#x27;s first name
   */
  first_name: string;

  /**
   * Optional. Contact&#x27;s last name
   */
  last_name?: string;

  /**
   * Optional. Contact&#x27;s user identifier in Telegram
   */
  user_id?: number;

  /**
   * Optional. Additional data about the contact in the form of a vCard
   */
  vcard?: string;

}
