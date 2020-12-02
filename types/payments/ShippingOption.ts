/**
 * This object represents one shipping option.
 */
export default interface ShippingOption {
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

}
