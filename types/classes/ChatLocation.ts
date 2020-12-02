import Location from './Location';

/**
* Represents a location to which a chat is connected.
*/
export default class ChatLocation {
  /**
  * The location to which the supergroup is connected. Can&#x27;t be a live location.
  */
  location: Location;

  /**
  * Location address; 1-64 characters, as defined by the chat owner
  */
  address: string;

  constructor(obj: { location: Location, address: string,  } ) {
    this.location = obj.location;
    this.address = obj.address;
  }
 
}
