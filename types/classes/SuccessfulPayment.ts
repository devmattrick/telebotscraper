import OrderInfo from './OrderInfo';

/**
* This object contains basic information about a successful payment.
*/
export default class SuccessfulPayment {
  /**
  * Three-letter ISO 4217 currency code
  */
  currency: string;

  /**
  * Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount &#x3D; 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
  */
  total_amount: number;

  /**
  * Bot specified invoice payload
  */
  invoice_payload: string;

  /**
  * Optional. Identifier of the shipping option chosen by the user
  */
  shipping_option_id?: string;

  /**
  * Optional. Order info provided by the user
  */
  order_info?: OrderInfo;

  /**
  * Telegram payment identifier
  */
  telegram_payment_charge_id: string;

  /**
  * Provider payment identifier
  */
  provider_payment_charge_id: string;

  constructor(obj: { currency: string, total_amount: number, invoice_payload: string, telegram_payment_charge_id: string, provider_payment_charge_id: string, shipping_option_id?: string, order_info?: OrderInfo,  } ) {
    this.currency = obj.currency;
    this.total_amount = obj.total_amount;
    this.invoice_payload = obj.invoice_payload;
    this.shipping_option_id = obj.shipping_option_id;
    this.order_info = obj.order_info;
    this.telegram_payment_charge_id = obj.telegram_payment_charge_id;
    this.provider_payment_charge_id = obj.provider_payment_charge_id;
  }
 
}
