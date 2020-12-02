import User from './User';
import Location from './Location';

/**
* This object represents an incoming inline query. When the user sends an empty query, your bot could return some default or trending results.
*/
export default class InlineQuery {
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

  constructor(obj: { id: string, from: User, query: string, offset: string, location?: Location,  } ) {
    this.id = obj.id;
    this.from = obj.from;
    this.location = obj.location;
    this.query = obj.query;
    this.offset = obj.offset;
  }
 
}
