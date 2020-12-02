
/**
* This object represents a shipping address.
*/
export default class ShippingAddress {
  /**
  * ISO 3166-1 alpha-2 country code
  */
  readonly country_code: string;

  /**
  * State, if applicable
  */
  readonly state: string;

  /**
  * City
  */
  readonly city: string;

  /**
  * First line for the address
  */
  readonly street_line1: string;

  /**
  * Second line for the address
  */
  readonly street_line2: string;

  /**
  * Address post code
  */
  readonly post_code: string;

  constructor(obj: { country_code: string, state: string, city: string, street_line1: string, street_line2: string, post_code: string,  } ) {
    this.country_code = obj?.country_code
    this.state = obj?.state
    this.city = obj?.city
    this.street_line1 = obj?.street_line1
    this.street_line2 = obj?.street_line2
    this.post_code = obj?.post_code
  }
 
}
