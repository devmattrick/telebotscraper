import PhotoSize from './PhotoSize';
import MaskPosition from './MaskPosition';

/**
* This object represents a sticker.
*/
export default class Sticker {
  /**
  * Identifier for this file, which can be used to download or reuse the file
  */
  readonly file_id: string;

  /**
  * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can&#x27;t be used to download or reuse the file.
  */
  readonly file_unique_id: string;

  /**
  * Sticker width
  */
  readonly width: number;

  /**
  * Sticker height
  */
  readonly height: number;

  /**
  * true, if the sticker is animated
  */
  readonly is_animated: boolean;

  /**
  * Optional. Sticker thumbnail in the .WEBP or .JPG format
  */
  readonly thumb?: PhotoSize;

  /**
  * Optional. Emoji associated with the sticker
  */
  readonly emoji?: string;

  /**
  * Optional. Name of the sticker set to which the sticker belongs
  */
  readonly set_name?: string;

  /**
  * Optional. For mask stickers, the position where the mask should be placed
  */
  readonly mask_position?: MaskPosition;

  /**
  * Optional. File size
  */
  readonly file_size?: number;

  constructor(obj: { file_id: string, file_unique_id: string, width: number, height: number, is_animated: boolean, thumb?: PhotoSize, emoji?: string, set_name?: string, mask_position?: MaskPosition, file_size?: number,  } ) {
    this.file_id = obj?.file_id;
    this.file_unique_id = obj?.file_unique_id;
    this.width = obj?.width;
    this.height = obj?.height;
    this.is_animated = obj?.is_animated;
    this.thumb = obj?.thumb && new PhotoSize(obj.thumb);
    this.emoji = obj?.emoji;
    this.set_name = obj?.set_name;
    this.mask_position = obj?.mask_position && new MaskPosition(obj.mask_position);
    this.file_size = obj?.file_size;
  }
 
}
