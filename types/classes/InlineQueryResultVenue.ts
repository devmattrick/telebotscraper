import InlineKeyboardMarkup from './InlineKeyboardMarkup';
import InputTextMessageContent from './InputTextMessageContent';
import InputLocationMessageContent from './InputLocationMessageContent';
import InputVenueMessageContent from './InputVenueMessageContent';
import InputContactMessageContent from './InputContactMessageContent';

/**
* Represents a venue. By default, the venue will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the venue.
*/
export default class InlineQueryResultVenue {
  /**
  * Type of the result, must be venue
  */
  readonly type: string;

  /**
  * Unique identifier for this result, 1-64 Bytes
  */
  readonly id: string;

  /**
  * Latitude of the venue location in degrees
  */
  readonly latitude: number;

  /**
  * Longitude of the venue location in degrees
  */
  readonly longitude: number;

  /**
  * Title of the venue
  */
  readonly title: string;

  /**
  * Address of the venue
  */
  readonly address: string;

  /**
  * Optional. Foursquare identifier of the venue if known
  */
  readonly foursquare_id?: string;

  /**
  * Optional. Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
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

  /**
  * Optional. Inline keyboard attached to the message
  */
  readonly reply_markup?: InlineKeyboardMarkup;

  /**
  * Optional. Content of the message to be sent instead of the venue
  */
  readonly input_message_content?: (InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent);

  /**
  * Optional. Url of the thumbnail for the result
  */
  readonly thumb_url?: string;

  /**
  * Optional. Thumbnail width
  */
  readonly thumb_width?: number;

  /**
  * Optional. Thumbnail height
  */
  readonly thumb_height?: number;

  constructor(obj: { type: string, id: string, latitude: number, longitude: number, title: string, address: string, foursquare_id?: string, foursquare_type?: string, google_place_id?: string, google_place_type?: string, reply_markup?: InlineKeyboardMarkup, input_message_content?: (InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent), thumb_url?: string, thumb_width?: number, thumb_height?: number,  } ) {
    this.type = obj?.type;
    this.id = obj?.id;
    this.latitude = obj?.latitude;
    this.longitude = obj?.longitude;
    this.title = obj?.title;
    this.address = obj?.address;
    this.foursquare_id = obj?.foursquare_id;
    this.foursquare_type = obj?.foursquare_type;
    this.google_place_id = obj?.google_place_id;
    this.google_place_type = obj?.google_place_type;
    this.reply_markup = obj?.reply_markup;
    this.input_message_content = obj?.input_message_content;
    this.thumb_url = obj?.thumb_url;
    this.thumb_width = obj?.thumb_width;
    this.thumb_height = obj?.thumb_height;
  }
 
}
