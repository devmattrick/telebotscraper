import User from './User';
import Location from './Location';

/**
* Represents a result of an inline query that was chosen by the user and sent to their chat partner.
*/
export default class ChosenInlineResult {
  /**
  * The unique identifier for the result that was chosen
  */
  readonly result_id: string;

  /**
  * The user that chose the result
  */
  readonly from: User;

  /**
  * Optional. Sender location, only for bots that require user location
  */
  readonly location?: Location;

  /**
  * Optional. Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message. Will be also received in callback queries and can be used to edit the message.
  */
  readonly inline_message_id?: string;

  /**
  * The query that was used to obtain the result
  */
  readonly query: string;

  constructor(obj: { result_id: string, from: User, query: string, location?: Location, inline_message_id?: string,  } ) {
    this.result_id = obj?.result_id;
    this.from = obj?.from && new User(obj.from);
    this.location = obj?.location && new Location(obj.location);
    this.inline_message_id = obj?.inline_message_id;
    this.query = obj?.query;
  }
 
}
