import Location from './Location';

/**
* This object represents a venue.
*/
export default class Venue {
  /**
  * Venue location. Can&#x27;t be a live location
  */
  readonly location: Location;

  /**
  * Name of the venue
  */
  readonly title: string;

  /**
  * Address of the venue
  */
  readonly address: string;

  /**
  * Optional. Foursquare identifier of the venue
  */
  readonly foursquare_id?: string;

  /**
  * Optional. Foursquare type of the venue. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
  */
  readonly foursquare_type?: string;

  /**
  * Optional. Google Places identifier of the venue
  */
  readonly google_place_id?: string;

  /**
  * Optional. Google Places type of the venue. (See supported types.)
  */
  readonly google_place_type?: string;

  constructor(obj: { location: Location, title: string, address: string, foursquare_id?: string, foursquare_type?: string, google_place_id?: string, google_place_type?: string,  } ) {
    this.location = obj?.location && new Location(obj.location)
    this.title = obj?.title
    this.address = obj?.address
    this.foursquare_id = obj?.foursquare_id
    this.foursquare_type = obj?.foursquare_type
    this.google_place_id = obj?.google_place_id
    this.google_place_type = obj?.google_place_type
  }
 
}
