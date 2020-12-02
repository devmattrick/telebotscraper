
/**
* This object represents a point on the map.
*/
export default class Location {
  /**
  * Longitude as defined by sender
  */
  readonly longitude: number;

  /**
  * Latitude as defined by sender
  */
  readonly latitude: number;

  /**
  * Optional. The radius of uncertainty for the location, measured in meters; 0-1500
  */
  readonly horizontal_accuracy?: number;

  /**
  * Optional. Time relative to the message sending date, during which the location can be updated, in seconds. For active live locations only.
  */
  readonly live_period?: number;

  /**
  * Optional. The direction in which user is moving, in degrees; 1-360. For active live locations only.
  */
  readonly heading?: number;

  /**
  * Optional. Maximum distance for proximity alerts about approaching another chat member, in meters. For sent live locations only.
  */
  readonly proximity_alert_radius?: number;

  constructor(obj: { longitude: number, latitude: number, horizontal_accuracy?: number, live_period?: number, heading?: number, proximity_alert_radius?: number,  } ) {
    this.longitude = obj?.longitude
    this.latitude = obj?.latitude
    this.horizontal_accuracy = obj?.horizontal_accuracy
    this.live_period = obj?.live_period
    this.heading = obj?.heading
    this.proximity_alert_radius = obj?.proximity_alert_radius
  }
 
}
