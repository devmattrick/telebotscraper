
/**
* Describes actions that a non-administrator user is allowed to take in a chat.
*/
export default class ChatPermissions {
  /**
  * Optional. true, if the user is allowed to send text messages, contacts, locations and venues
  */
  readonly can_send_messages?: boolean;

  /**
  * Optional. true, if the user is allowed to send audios, documents, photos, videos, video notes and voice notes, implies can_send_messages
  */
  readonly can_send_media_messages?: boolean;

  /**
  * Optional. true, if the user is allowed to send polls, implies can_send_messages
  */
  readonly can_send_polls?: boolean;

  /**
  * Optional. true, if the user is allowed to send animations, games, stickers and use inline bots, implies can_send_media_messages
  */
  readonly can_send_other_messages?: boolean;

  /**
  * Optional. true, if the user is allowed to add web page previews to their messages, implies can_send_media_messages
  */
  readonly can_add_web_page_previews?: boolean;

  /**
  * Optional. true, if the user is allowed to change the chat title, photo and other settings. Ignored in public supergroups
  */
  readonly can_change_info?: boolean;

  /**
  * Optional. true, if the user is allowed to invite new users to the chat
  */
  readonly can_invite_users?: boolean;

  /**
  * Optional. true, if the user is allowed to pin messages. Ignored in public supergroups
  */
  readonly can_pin_messages?: boolean;

  constructor(obj: { can_send_messages?: boolean, can_send_media_messages?: boolean, can_send_polls?: boolean, can_send_other_messages?: boolean, can_add_web_page_previews?: boolean, can_change_info?: boolean, can_invite_users?: boolean, can_pin_messages?: boolean,  } ) {
    this.can_send_messages = obj?.can_send_messages
    this.can_send_media_messages = obj?.can_send_media_messages
    this.can_send_polls = obj?.can_send_polls
    this.can_send_other_messages = obj?.can_send_other_messages
    this.can_add_web_page_previews = obj?.can_add_web_page_previews
    this.can_change_info = obj?.can_change_info
    this.can_invite_users = obj?.can_invite_users
    this.can_pin_messages = obj?.can_pin_messages
  }
 
}
