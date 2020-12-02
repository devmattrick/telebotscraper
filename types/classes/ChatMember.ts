import User from './User';

/**
* This object contains information about one member of a chat.
*/
export default class ChatMember {
  /**
  * Information about the user
  */
  readonly user: User;

  /**
  * The member&#x27;s status in the chat. Can be “creator”, “administrator”, “member”, “restricted”, “left” or “kicked”
  */
  readonly status: string;

  /**
  * Optional. Owner and administrators only. Custom title for this user
  */
  readonly custom_title?: string;

  /**
  * Optional. Owner and administrators only. true, if the user&#x27;s presence in the chat is hidden
  */
  readonly is_anonymous?: boolean;

  /**
  * Optional. Administrators only. true, if the bot is allowed to edit administrator privileges of that user
  */
  readonly can_be_edited?: boolean;

  /**
  * Optional. Administrators only. true, if the administrator can post in the channel; channels only
  */
  readonly can_post_messages?: boolean;

  /**
  * Optional. Administrators only. true, if the administrator can edit messages of other users and can pin messages; channels only
  */
  readonly can_edit_messages?: boolean;

  /**
  * Optional. Administrators only. true, if the administrator can delete messages of other users
  */
  readonly can_delete_messages?: boolean;

  /**
  * Optional. Administrators only. true, if the administrator can restrict, ban or unban chat members
  */
  readonly can_restrict_members?: boolean;

  /**
  * Optional. Administrators only. true, if the administrator can add new administrators with a subset of their own privileges or demote administrators that he has promoted, directly or indirectly (promoted by administrators that were appointed by the user)
  */
  readonly can_promote_members?: boolean;

  /**
  * Optional. Administrators and restricted only. true, if the user is allowed to change the chat title, photo and other settings
  */
  readonly can_change_info?: boolean;

  /**
  * Optional. Administrators and restricted only. true, if the user is allowed to invite new users to the chat
  */
  readonly can_invite_users?: boolean;

  /**
  * Optional. Administrators and restricted only. true, if the user is allowed to pin messages; groups and supergroups only
  */
  readonly can_pin_messages?: boolean;

  /**
  * Optional. Restricted only. true, if the user is a member of the chat at the moment of the request
  */
  readonly is_member?: boolean;

  /**
  * Optional. Restricted only. true, if the user is allowed to send text messages, contacts, locations and venues
  */
  readonly can_send_messages?: boolean;

  /**
  * Optional. Restricted only. true, if the user is allowed to send audios, documents, photos, videos, video notes and voice notes
  */
  readonly can_send_media_messages?: boolean;

  /**
  * Optional. Restricted only. true, if the user is allowed to send polls
  */
  readonly can_send_polls?: boolean;

  /**
  * Optional. Restricted only. true, if the user is allowed to send animations, games, stickers and use inline bots
  */
  readonly can_send_other_messages?: boolean;

  /**
  * Optional. Restricted only. true, if the user is allowed to add web page previews to their messages
  */
  readonly can_add_web_page_previews?: boolean;

  /**
  * Optional. Restricted and kicked only. Date when restrictions will be lifted for this user; unix time
  */
  readonly until_date?: number;

  constructor(obj: { user: User, status: string, custom_title?: string, is_anonymous?: boolean, can_be_edited?: boolean, can_post_messages?: boolean, can_edit_messages?: boolean, can_delete_messages?: boolean, can_restrict_members?: boolean, can_promote_members?: boolean, can_change_info?: boolean, can_invite_users?: boolean, can_pin_messages?: boolean, is_member?: boolean, can_send_messages?: boolean, can_send_media_messages?: boolean, can_send_polls?: boolean, can_send_other_messages?: boolean, can_add_web_page_previews?: boolean, until_date?: number,  } ) {
    this.user = obj?.user && new User(obj.user)
    this.status = obj?.status
    this.custom_title = obj?.custom_title
    this.is_anonymous = obj?.is_anonymous
    this.can_be_edited = obj?.can_be_edited
    this.can_post_messages = obj?.can_post_messages
    this.can_edit_messages = obj?.can_edit_messages
    this.can_delete_messages = obj?.can_delete_messages
    this.can_restrict_members = obj?.can_restrict_members
    this.can_promote_members = obj?.can_promote_members
    this.can_change_info = obj?.can_change_info
    this.can_invite_users = obj?.can_invite_users
    this.can_pin_messages = obj?.can_pin_messages
    this.is_member = obj?.is_member
    this.can_send_messages = obj?.can_send_messages
    this.can_send_media_messages = obj?.can_send_media_messages
    this.can_send_polls = obj?.can_send_polls
    this.can_send_other_messages = obj?.can_send_other_messages
    this.can_add_web_page_previews = obj?.can_add_web_page_previews
    this.until_date = obj?.until_date
  }
 
}
