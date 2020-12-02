
/**
* Represents the content of a venue message to be sent as the result of an inline query.
*/
export default class InputVenueMessageContent {
  /**
  * Latitude of the venue in degrees
  */
  latitude: number;

  /**
  * Longitude of the venue in degrees
  */
  longitude: number;

  /**
  * Name of the venue
  */
  title: string;

  /**
  * Address of the venue
  */
  address: string;

  /**
  * Optional. Foursquare identifier of the venue, if known
  */
  foursquare_id?: string;

  /**
  * Optional. Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
  */
  foursquare_type?: string;

  /**
  * Optional. Google Places identifier of the venue
  */
  google_place_id?: string;

  /**
  * Optional. Google Places type of the venue. (See supported types.)
  */
  google_place_type?: string;

  constructor(obj: { latitude: number, longitude: number, title: string, address: string, foursquare_id?: string, foursquare_type?: string, google_place_id?: string, google_place_type?: string,  } ) {
    this.latitude = obj.latitude;
    this.longitude = obj.longitude;
    this.title = obj.title;
    this.address = obj.address;
    this.foursquare_id = obj.foursquare_id;
    this.foursquare_type = obj.foursquare_type;
    this.google_place_id = obj.google_place_id;
    this.google_place_type = obj.google_place_type;
  }
 
}
