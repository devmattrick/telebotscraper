
/**
* Represents the content of a location message to be sent as the result of an inline query.
*/
export default class InputLocationMessageContent {
  /**
  * Latitude of the location in degrees
  */
  latitude: number;

  /**
  * Longitude of the location in degrees
  */
  longitude: number;

  /**
  * Optional. The radius of uncertainty for the location, measured in meters; 0-1500
  */
  horizontal_accuracy?: number;

  /**
  * Optional. Period in seconds for which the location can be updated, should be between 60 and 86400.
  */
  live_period?: number;

  /**
  * Optional. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
  */
  heading?: number;

  /**
  * Optional. For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
  */
  proximity_alert_radius?: number;

  constructor(obj: { latitude: number, longitude: number, horizontal_accuracy?: number, live_period?: number, heading?: number, proximity_alert_radius?: number,  } ) {
    this.latitude = obj.latitude;
    this.longitude = obj.longitude;
    this.horizontal_accuracy = obj.horizontal_accuracy;
    this.live_period = obj.live_period;
    this.heading = obj.heading;
    this.proximity_alert_radius = obj.proximity_alert_radius;
  }
 
}
