/**
 * This object represents a chat.
 */
export default interface Chat {
  /**
   * Unique identifier for this chat. This number may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier.
   */
  id: number;

  /**
   * Type of chat, can be either “private”, “group”, “supergroup” or “channel”
   */
  type: string;

  /**
   * Optional. Title, for supergroups, channels and group chats
   */
  title?: string;

  /**
   * Optional. Username, for private chats, supergroups and channels if available
   */
  username?: string;

  /**
   * Optional. First name of the other party in a private chat
   */
  first_name?: string;

  /**
   * Optional. Last name of the other party in a private chat
   */
  last_name?: string;

  /**
   * Optional. Chat photo. Returned only in getChat.
   */
  photo?: ChatPhoto;

  /**
   * Optional. Bio of the other party in a private chat. Returned only in getChat.
   */
  bio?: string;

  /**
   * Optional. Description, for groups, supergroups and channel chats. Returned only in getChat.
   */
  description?: string;

  /**
   * Optional. Chat invite link, for groups, supergroups and channel chats. Each administrator in a chat generates their own invite links, so the bot must first generate the link using exportChatInviteLink. Returned only in getChat.
   */
  invite_link?: string;

  /**
   * Optional. The most recent pinned message (by sending date). Returned only in getChat.
   */
  pinned_message?: Message;

  /**
   * Optional. Default chat member permissions, for groups and supergroups. Returned only in getChat.
   */
  permissions?: ChatPermissions;

  /**
   * Optional. For supergroups, the minimum allowed delay between consecutive messages sent by each unpriviledged user. Returned only in getChat.
   */
  slow_mode_delay?: number;

  /**
   * Optional. For supergroups, name of group sticker set. Returned only in getChat.
   */
  sticker_set_name?: string;

  /**
   * Optional. true, if the bot can change the group sticker set. Returned only in getChat.
   */
  can_set_sticker_set?: boolean;

  /**
   * Optional. Unique identifier for the linked chat, i.e. the discussion group identifier for a channel and vice versa; for supergroups and channel chats. This identifier may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier. Returned only in getChat.
   */
  linked_chat_id?: number;

  /**
   * Optional. For supergroups, the location to which the supergroup is connected. Returned only in getChat.
   */
  location?: ChatLocation;

}
