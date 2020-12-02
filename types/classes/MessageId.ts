
/**
* This object represents a unique message identifier.
*/
export default class MessageId {
  /**
  * Unique message identifier
  */
  readonly message_id: number;

  constructor(obj: { message_id: number,  } ) {
    this.message_id = obj?.message_id;
  }
 
}
