/**
 * This object represents a message.
 */
export default interface Message {
  /**
   * Unique message identifier inside this chat
   */
  message_id: number;

  /**
   * Optional. Sender, empty for messages sent to channels
   */
  from?: User;

  /**
   * Optional. Sender of the message, sent on behalf of a chat. The channel itself for channel messages. The supergroup itself for messages from anonymous group administrators. The linked channel for messages automatically forwarded to the discussion group
   */
  sender_chat?: Chat;

  /**
   * Date the message was sent in Unix time
   */
  date: number;

  /**
   * Conversation the message belongs to
   */
  chat: Chat;

  /**
   * Optional. For forwarded messages, sender of the original message
   */
  forward_from?: User;

  /**
   * Optional. For messages forwarded from channels or from anonymous administrators, information about the original sender chat
   */
  forward_from_chat?: Chat;

  /**
   * Optional. For messages forwarded from channels, identifier of the original message in the channel
   */
  forward_from_message_id?: number;

  /**
   * Optional. For messages forwarded from channels, signature of the post author if present
   */
  forward_signature?: string;

  /**
   * Optional. Sender&#x27;s name for messages forwarded from users who disallow adding a link to their account in forwarded messages
   */
  forward_sender_name?: string;

  /**
   * Optional. For forwarded messages, date the original message was sent in Unix time
   */
  forward_date?: number;

  /**
   * Optional. For replies, the original message. Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply.
   */
  reply_to_message?: Message;

  /**
   * Optional. Bot through which the message was sent
   */
  via_bot?: User;

  /**
   * Optional. Date the message was last edited in Unix time
   */
  edit_date?: number;

  /**
   * Optional. The unique identifier of a media message group this message belongs to
   */
  media_group_id?: string;

  /**
   * Optional. Signature of the post author for messages in channels, or the custom title of an anonymous group administrator
   */
  author_signature?: string;

  /**
   * Optional. For text messages, the actual UTF-8 text of the message, 0-4096 characters
   */
  text?: string;

  /**
   * Optional. For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text
   */
  entities?: MessageEntity[];

  /**
   * Optional. Message is an animation, information about the animation. For backward compatibility, when this field is set, the document field will also be set
   */
  animation?: Animation;

  /**
   * Optional. Message is an audio file, information about the file
   */
  audio?: Audio;

  /**
   * Optional. Message is a general file, information about the file
   */
  document?: Document;

  /**
   * Optional. Message is a photo, available sizes of the photo
   */
  photo?: PhotoSize[];

  /**
   * Optional. Message is a sticker, information about the sticker
   */
  sticker?: Sticker;

  /**
   * Optional. Message is a video, information about the video
   */
  video?: Video;

  /**
   * Optional. Message is a video note, information about the video message
   */
  video_note?: VideoNote;

  /**
   * Optional. Message is a voice message, information about the file
   */
  voice?: Voice;

  /**
   * Optional. Caption for the animation, audio, document, photo, video or voice, 0-1024 characters
   */
  caption?: string;

  /**
   * Optional. For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption
   */
  caption_entities?: MessageEntity[];

  /**
   * Optional. Message is a shared contact, information about the contact
   */
  contact?: Contact;

  /**
   * Optional. Message is a dice with random value from 1 to 6
   */
  dice?: Dice;

  /**
   * Optional. Message is a game, information about the game. More about games »
   */
  game?: Game;

  /**
   * Optional. Message is a native poll, information about the poll
   */
  poll?: Poll;

  /**
   * Optional. Message is a venue, information about the venue. For backward compatibility, when this field is set, the location field will also be set
   */
  venue?: Venue;

  /**
   * Optional. Message is a shared location, information about the location
   */
  location?: Location;

  /**
   * Optional. New members that were added to the group or supergroup and information about them (the bot itself may be one of these members)
   */
  new_chat_members?: User[];

  /**
   * Optional. A member was removed from the group, information about them (this member may be the bot itself)
   */
  left_chat_member?: User;

  /**
   * Optional. A chat title was changed to this value
   */
  new_chat_title?: string;

  /**
   * Optional. A chat photo was change to this value
   */
  new_chat_photo?: PhotoSize[];

  /**
   * Optional. Service message: the chat photo was deleted
   */
  delete_chat_photo?: true;

  /**
   * Optional. Service message: the group has been created
   */
  group_chat_created?: true;

  /**
   * Optional. Service message: the supergroup has been created. This field can&#x27;t be received in a message coming through updates, because bot can&#x27;t be a member of a supergroup when it is created. It can only be found in reply_to_message if someone replies to a very first message in a directly created supergroup.
   */
  supergroup_chat_created?: true;

  /**
   * Optional. Service message: the channel has been created. This field can&#x27;t be received in a message coming through updates, because bot can&#x27;t be a member of a channel when it is created. It can only be found in reply_to_message if someone replies to a very first message in a channel.
   */
  channel_chat_created?: true;

  /**
   * Optional. The group has been migrated to a supergroup with the specified identifier. This number may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier.
   */
  migrate_to_chat_id?: number;

  /**
   * Optional. The supergroup has been migrated from a group with the specified identifier. This number may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier.
   */
  migrate_from_chat_id?: number;

  /**
   * Optional. Specified message was pinned. Note that the Message object in this field will not contain further reply_to_message fields even if it is itself a reply.
   */
  pinned_message?: Message;

  /**
   * Optional. Message is an invoice for a payment, information about the invoice. More about payments »
   */
  invoice?: Invoice;

  /**
   * Optional. Message is a service message about a successful payment, information about the payment. More about payments »
   */
  successful_payment?: SuccessfulPayment;

  /**
   * Optional. The domain name of the website on which the user has logged in. More about Telegram Login »
   */
  connected_website?: string;

  /**
   * Optional. Telegram Passport data
   */
  passport_data?: PassportData;

  /**
   * Optional. Service message. A user in the chat triggered another user&#x27;s proximity alert while sharing Live Location.
   */
  proximity_alert_triggered?: ProximityAlertTriggered;

  /**
   * Optional. Inline keyboard attached to the message. login_url buttons are represented as ordinary url buttons.
   */
  reply_markup?: InlineKeyboardMarkup;

}
