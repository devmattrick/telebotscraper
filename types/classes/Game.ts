import PhotoSize from './PhotoSize';
import MessageEntity from './MessageEntity';
import Animation from './Animation';

/**
* This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers.
*/
export default class Game {
  /**
  * Title of the game
  */
  title: string;

  /**
  * Description of the game
  */
  description: string;

  /**
  * Photo that will be displayed in the game message in chats.
  */
  photo: PhotoSize[];

  /**
  * Optional. Brief description of the game or high scores included in the game message. Can be automatically edited to include current high scores for the game when the bot calls setGameScore, or manually edited using editMessageText. 0-4096 characters.
  */
  text?: string;

  /**
  * Optional. Special entities that appear in text, such as usernames, URLs, bot commands, etc.
  */
  text_entities?: MessageEntity[];

  /**
  * Optional. Animation that will be displayed in the game message in chats. Upload via BotFather
  */
  animation?: Animation;

  constructor(obj: { title: string, description: string, photo: PhotoSize[], text?: string, text_entities?: MessageEntity[], animation?: Animation,  } ) {
    this.title = obj.title;
    this.description = obj.description;
    this.photo = obj.photo;
    this.text = obj.text;
    this.text_entities = obj.text_entities;
    this.animation = obj.animation;
  }
 
}
