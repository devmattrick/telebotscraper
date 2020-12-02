import PhotoSize from './PhotoSize';

/**
* This object represent a user&#x27;s profile pictures.
*/
export default class UserProfilePhotos {
  /**
  * Total number of profile pictures the target user has
  */
  total_count: number;

  /**
  * Requested profile pictures (in up to 4 sizes each)
  */
  photos: PhotoSize[][];

  constructor(obj: { total_count: number, photos: PhotoSize[][],  } ) {
    this.total_count = obj.total_count;
    this.photos = obj.photos;
  }
 
}
