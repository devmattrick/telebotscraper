/**
 * This object represents an incoming inline query. When the user sends an empty query, your bot could return some default or trending results.
 */
export default interface InlineQuery {
  /**
   * Unique identifier for this query
   */
  id: string;

  /**
   * Sender
   */
  from: User;

  /**
   * Optional. Sender location, only for bots that request user location
   */
  location?: Location;

  /**
   * Text of the query (up to 256 characters)
   */
  query: string;

  /**
   * Offset of the results to be returned, can be controlled by the bot
   */
  offset: string;

}
