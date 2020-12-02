/**
 * Represents the content of a text message to be sent as the result of an inline query.
 */
export default interface InputTextMessageContent {
  /**
   * Text of the message to be sent, 1-4096 characters
   */
  message_text: string;

  /**
   * Optional. Mode for parsing entities in the message text. See formatting options for more details.
   */
  parse_mode?: string;

  /**
   * Optional. List of special entities that appear in message text, which can be specified instead of parse_mode
   */
  entities?: MessageEntity[];

  /**
   * Optional. Disables link previews for links in the sent message
   */
  disable_web_page_preview?: boolean;

}
