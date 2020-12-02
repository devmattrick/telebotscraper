import LabeledPrice from './LabeledPrice';

/**
* This object represents one shipping option.
*/
export default class ShippingOption {
  /**
  * Shipping option identifier
  */
  id: string;

  /**
  * Option title
  */
  title: string;

  /**
  * List of price portions
  */
  prices: LabeledPrice[];

  constructor(obj: { id: string, title: string, prices: LabeledPrice[],  } ) {
    this.id = obj.id;
    this.title = obj.title;
    this.prices = obj.prices;
  }
 
}
