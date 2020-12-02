/**
 * This object represents a Telegram user or bot.
 */
export default interface User {
  /**
   * Unique identifier for this user or bot
   */
  id: number;

  /**
   * true, if this user is a bot
   */
  is_bot: boolean;

  /**
   * User&#x27;s or bot&#x27;s first name
   */
  first_name: string;

  /**
   * Optional. User&#x27;s or bot&#x27;s last name
   */
  last_name?: string;

  /**
   * Optional. User&#x27;s or bot&#x27;s username
   */
  username?: string;

  /**
   * Optional. IETF language tag of the user&#x27;s language
   */
  language_code?: string;

  /**
   * Optional. true, if the bot can be invited to groups. Returned only in getMe.
   */
  can_join_groups?: boolean;

  /**
   * Optional. true, if privacy mode is disabled for the bot. Returned only in getMe.
   */
  can_read_all_group_messages?: boolean;

  /**
   * Optional. true, if the bot supports inline queries. Returned only in getMe.
   */
  supports_inline_queries?: boolean;

}
