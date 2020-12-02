import Sticker from './Sticker';
import PhotoSize from './PhotoSize';

/**
* This object represents a sticker set.
*/
export default class StickerSet {
  /**
  * Sticker set name
  */
  readonly name: string;

  /**
  * Sticker set title
  */
  readonly title: string;

  /**
  * true, if the sticker set contains animated stickers
  */
  readonly is_animated: boolean;

  /**
  * true, if the sticker set contains masks
  */
  readonly contains_masks: boolean;

  /**
  * List of all set stickers
  */
  readonly stickers: Sticker[];

  /**
  * Optional. Sticker set thumbnail in the .WEBP or .TGS format
  */
  readonly thumb?: PhotoSize;

  constructor(obj: { name: string, title: string, is_animated: boolean, contains_masks: boolean, stickers: Sticker[], thumb?: PhotoSize,  } ) {
    this.name = obj?.name
    this.title = obj?.title
    this.is_animated = obj?.is_animated
    this.contains_masks = obj?.contains_masks
    this.stickers = obj?.stickers?.map(o=>new Sticker(o))
    this.thumb = obj?.thumb && new PhotoSize(obj.thumb)
  }
 
}
