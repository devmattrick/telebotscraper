
/**
* This object contains basic information about an invoice.
*/
export default class Invoice {
  /**
  * Product name
  */
  readonly title: string;

  /**
  * Product description
  */
  readonly description: string;

  /**
  * Unique bot deep-linking parameter that can be used to generate this invoice
  */
  readonly start_parameter: string;

  /**
  * Three-letter ISO 4217 currency code
  */
  readonly currency: string;

  /**
  * Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount &#x3D; 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
  */
  readonly total_amount: number;

  constructor(obj: { title: string, description: string, start_parameter: string, currency: string, total_amount: number,  } ) {
    this.title = obj?.title;
    this.description = obj?.description;
    this.start_parameter = obj?.start_parameter;
    this.currency = obj?.currency;
    this.total_amount = obj?.total_amount;
  }
 
}
