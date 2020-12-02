import ChatPhoto from './ChatPhoto';
import Message from './Message';
import ChatPermissions from './ChatPermissions';
import ChatLocation from './ChatLocation';

/**
* This object represents a chat.
*/
export default class Chat {
  /**
  * Unique identifier for this chat. This number may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier.
  */
  readonly id: number;

  /**
  * Type of chat, can be either “private”, “group”, “supergroup” or “channel”
  */
  readonly type: string;

  /**
  * Optional. Title, for supergroups, channels and group chats
  */
  readonly title?: string;

  /**
  * Optional. Username, for private chats, supergroups and channels if available
  */
  readonly username?: string;

  /**
  * Optional. First name of the other party in a private chat
  */
  readonly first_name?: string;

  /**
  * Optional. Last name of the other party in a private chat
  */
  readonly last_name?: string;

  /**
  * Optional. Chat photo. Returned only in getChat.
  */
  readonly photo?: ChatPhoto;

  /**
  * Optional. Bio of the other party in a private chat. Returned only in getChat.
  */
  readonly bio?: string;

  /**
  * Optional. Description, for groups, supergroups and channel chats. Returned only in getChat.
  */
  readonly description?: string;

  /**
  * Optional. Chat invite link, for groups, supergroups and channel chats. Each administrator in a chat generates their own invite links, so the bot must first generate the link using exportChatInviteLink. Returned only in getChat.
  */
  readonly invite_link?: string;

  /**
  * Optional. The most recent pinned message (by sending date). Returned only in getChat.
  */
  readonly pinned_message?: Message;

  /**
  * Optional. Default chat member permissions, for groups and supergroups. Returned only in getChat.
  */
  readonly permissions?: ChatPermissions;

  /**
  * Optional. For supergroups, the minimum allowed delay between consecutive messages sent by each unpriviledged user. Returned only in getChat.
  */
  readonly slow_mode_delay?: number;

  /**
  * Optional. For supergroups, name of group sticker set. Returned only in getChat.
  */
  readonly sticker_set_name?: string;

  /**
  * Optional. true, if the bot can change the group sticker set. Returned only in getChat.
  */
  readonly can_set_sticker_set?: boolean;

  /**
  * Optional. Unique identifier for the linked chat, i.e. the discussion group identifier for a channel and vice versa; for supergroups and channel chats. This identifier may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier. Returned only in getChat.
  */
  readonly linked_chat_id?: number;

  /**
  * Optional. For supergroups, the location to which the supergroup is connected. Returned only in getChat.
  */
  readonly location?: ChatLocation;

  constructor(obj: { id: number, type: string, title?: string, username?: string, first_name?: string, last_name?: string, photo?: ChatPhoto, bio?: string, description?: string, invite_link?: string, pinned_message?: Message, permissions?: ChatPermissions, slow_mode_delay?: number, sticker_set_name?: string, can_set_sticker_set?: boolean, linked_chat_id?: number, location?: ChatLocation,  } ) {
    this.id = obj?.id;
    this.type = obj?.type;
    this.title = obj?.title;
    this.username = obj?.username;
    this.first_name = obj?.first_name;
    this.last_name = obj?.last_name;
    this.photo = obj?.photo;
    this.bio = obj?.bio;
    this.description = obj?.description;
    this.invite_link = obj?.invite_link;
    this.pinned_message = obj?.pinned_message;
    this.permissions = obj?.permissions;
    this.slow_mode_delay = obj?.slow_mode_delay;
    this.sticker_set_name = obj?.sticker_set_name;
    this.can_set_sticker_set = obj?.can_set_sticker_set;
    this.linked_chat_id = obj?.linked_chat_id;
    this.location = obj?.location;
  }
 
}
