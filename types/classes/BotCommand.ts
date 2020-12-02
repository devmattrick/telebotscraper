
/**
* This object represents a bot command.
*/
export default class BotCommand {
  /**
  * Text of the command, 1-32 characters. Can contain only lowercase English letters, digits and underscores.
  */
  readonly command: string;

  /**
  * Description of the command, 3-256 characters.
  */
  readonly description: string;

  constructor(obj: { command: string, description: string,  } ) {
    this.command = obj?.command;
    this.description = obj?.description;
  }
 
}
