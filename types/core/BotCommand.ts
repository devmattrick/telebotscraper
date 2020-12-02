/**
 * This object represents a bot command.
 */
export default interface BotCommand {
  /**
   * Text of the command, 1-32 characters. Can contain only lowercase English letters, digits and underscores.
   */
  command: string;

  /**
   * Description of the command, 3-256 characters.
   */
  description: string;

}
