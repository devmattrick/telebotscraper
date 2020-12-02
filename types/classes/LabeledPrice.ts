
/**
* This object represents a portion of the price for goods or services.
*/
export default class LabeledPrice {
  /**
  * Portion label
  */
  readonly label: string;

  /**
  * Price of the product in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount &#x3D; 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
  */
  readonly amount: number;

  constructor(obj: { label: string, amount: number,  } ) {
    this.label = obj?.label;
    this.amount = obj?.amount;
  }
 
}
