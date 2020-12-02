import Sticker from './Sticker';
import PhotoSize from './PhotoSize';

/**
* This object represents a sticker set.
*/
export default class StickerSet {
  /**
  * Sticker set name
  */
  name: string;

  /**
  * Sticker set title
  */
  title: string;

  /**
  * true, if the sticker set contains animated stickers
  */
  is_animated: boolean;

  /**
  * true, if the sticker set contains masks
  */
  contains_masks: boolean;

  /**
  * List of all set stickers
  */
  stickers: Sticker[];

  /**
  * Optional. Sticker set thumbnail in the .WEBP or .TGS format
  */
  thumb?: PhotoSize;

  constructor(obj: { name: string, title: string, is_animated: boolean, contains_masks: boolean, stickers: Sticker[], thumb?: PhotoSize,  } ) {
    this.name = obj.name;
    this.title = obj.title;
    this.is_animated = obj.is_animated;
    this.contains_masks = obj.contains_masks;
    this.stickers = obj.stickers;
    this.thumb = obj.thumb;
  }
 
}
