import InlineKeyboardMarkup from './InlineKeyboardMarkup';
import InputTextMessageContent from './InputTextMessageContent';
import InputLocationMessageContent from './InputLocationMessageContent';
import InputVenueMessageContent from './InputVenueMessageContent';
import InputContactMessageContent from './InputContactMessageContent';

/**
* Represents a location on a map. By default, the location will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the location.
*/
export default class InlineQueryResultLocation {
  /**
  * Type of the result, must be location
  */
  type: string;

  /**
  * Unique identifier for this result, 1-64 Bytes
  */
  id: string;

  /**
  * Location latitude in degrees
  */
  latitude: number;

  /**
  * Location longitude in degrees
  */
  longitude: number;

  /**
  * Location title
  */
  title: string;

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

  /**
  * Optional. Inline keyboard attached to the message
  */
  reply_markup?: InlineKeyboardMarkup;

  /**
  * Optional. Content of the message to be sent instead of the location
  */
  input_message_content?: (InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent);

  /**
  * Optional. Url of the thumbnail for the result
  */
  thumb_url?: string;

  /**
  * Optional. Thumbnail width
  */
  thumb_width?: number;

  /**
  * Optional. Thumbnail height
  */
  thumb_height?: number;

  constructor(obj: { type: string, id: string, latitude: number, longitude: number, title: string, horizontal_accuracy?: number, live_period?: number, heading?: number, proximity_alert_radius?: number, reply_markup?: InlineKeyboardMarkup, input_message_content?: (InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent), thumb_url?: string, thumb_width?: number, thumb_height?: number,  } ) {
    this.type = obj.type;
    this.id = obj.id;
    this.latitude = obj.latitude;
    this.longitude = obj.longitude;
    this.title = obj.title;
    this.horizontal_accuracy = obj.horizontal_accuracy;
    this.live_period = obj.live_period;
    this.heading = obj.heading;
    this.proximity_alert_radius = obj.proximity_alert_radius;
    this.reply_markup = obj.reply_markup;
    this.input_message_content = obj.input_message_content;
    this.thumb_url = obj.thumb_url;
    this.thumb_width = obj.thumb_width;
    this.thumb_height = obj.thumb_height;
  }
 
}
