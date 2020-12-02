
/**
* This object represents a Telegram user or bot.
*/
export default class User {
  /**
  * Unique identifier for this user or bot
  */
  readonly id: number;

  /**
  * true, if this user is a bot
  */
  readonly is_bot: boolean;

  /**
  * User&#x27;s or bot&#x27;s first name
  */
  readonly first_name: string;

  /**
  * Optional. User&#x27;s or bot&#x27;s last name
  */
  readonly last_name?: string;

  /**
  * Optional. User&#x27;s or bot&#x27;s username
  */
  readonly username?: string;

  /**
  * Optional. IETF language tag of the user&#x27;s language
  */
  readonly language_code?: string;

  /**
  * Optional. true, if the bot can be invited to groups. Returned only in getMe.
  */
  readonly can_join_groups?: boolean;

  /**
  * Optional. true, if privacy mode is disabled for the bot. Returned only in getMe.
  */
  readonly can_read_all_group_messages?: boolean;

  /**
  * Optional. true, if the bot supports inline queries. Returned only in getMe.
  */
  readonly supports_inline_queries?: boolean;

  constructor(obj: { id: number, is_bot: boolean, first_name: string, last_name?: string, username?: string, language_code?: string, can_join_groups?: boolean, can_read_all_group_messages?: boolean, supports_inline_queries?: boolean,  } ) {
    this.id = obj?.id;
    this.is_bot = obj?.is_bot;
    this.first_name = obj?.first_name;
    this.last_name = obj?.last_name;
    this.username = obj?.username;
    this.language_code = obj?.language_code;
    this.can_join_groups = obj?.can_join_groups;
    this.can_read_all_group_messages = obj?.can_read_all_group_messages;
    this.supports_inline_queries = obj?.supports_inline_queries;
  }
 
}
