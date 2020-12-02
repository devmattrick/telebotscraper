import ShippingAddress from './ShippingAddress';

/**
* This object represents information about an order.
*/
export default class OrderInfo {
  /**
  * Optional. User name
  */
  readonly name?: string;

  /**
  * Optional. User&#x27;s phone number
  */
  readonly phone_number?: string;

  /**
  * Optional. User email
  */
  readonly email?: string;

  /**
  * Optional. User shipping address
  */
  readonly shipping_address?: ShippingAddress;

  constructor(obj: { name?: string, phone_number?: string, email?: string, shipping_address?: ShippingAddress,  } ) {
    this.name = obj?.name
    this.phone_number = obj?.phone_number
    this.email = obj?.email
    this.shipping_address = obj?.shipping_address && new ShippingAddress(obj.shipping_address)
  }
 
}
