import User from './User';
import ShippingAddress from './ShippingAddress';

/**
* This object contains information about an incoming shipping query.
*/
export default class ShippingQuery {
  /**
  * Unique query identifier
  */
  readonly id: string;

  /**
  * User who sent the query
  */
  readonly from: User;

  /**
  * Bot specified invoice payload
  */
  readonly invoice_payload: string;

  /**
  * User specified shipping address
  */
  readonly shipping_address: ShippingAddress;

  constructor(obj: { id: string, from: User, invoice_payload: string, shipping_address: ShippingAddress,  } ) {
    this.id = obj?.id;
    this.from = obj?.from;
    this.invoice_payload = obj?.invoice_payload;
    this.shipping_address = obj?.shipping_address;
  }
 
}
