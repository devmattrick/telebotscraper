import User from './User';
import Chat from './Chat';
import Message from './Message';
import MessageEntity from './MessageEntity';
import Animation from './Animation';
import Audio from './Audio';
import Document from './Document';
import PhotoSize from './PhotoSize';
import Sticker from './Sticker';
import Video from './Video';
import VideoNote from './VideoNote';
import Voice from './Voice';
import Contact from './Contact';
import Dice from './Dice';
import Game from './Game';
import Poll from './Poll';
import Venue from './Venue';
import Location from './Location';
import Invoice from './Invoice';
import SuccessfulPayment from './SuccessfulPayment';
import PassportData from './PassportData';
import ProximityAlertTriggered from './ProximityAlertTriggered';
import InlineKeyboardMarkup from './InlineKeyboardMarkup';

/**
* This object represents a message.
*/
export default class Message {
  /**
  * Unique message identifier inside this chat
  */
  readonly message_id: number;

  /**
  * Optional. Sender, empty for messages sent to channels
  */
  readonly from?: User;

  /**
  * Optional. Sender of the message, sent on behalf of a chat. The channel itself for channel messages. The supergroup itself for messages from anonymous group administrators. The linked channel for messages automatically forwarded to the discussion group
  */
  readonly sender_chat?: Chat;

  /**
  * Date the message was sent in Unix time
  */
  readonly date: number;

  /**
  * Conversation the message belongs to
  */
  readonly chat: Chat;

  /**
  * Optional. For forwarded messages, sender of the original message
  */
  readonly forward_from?: User;

  /**
  * Optional. For messages forwarded from channels or from anonymous administrators, information about the original sender chat
  */
  readonly forward_from_chat?: Chat;

  /**
  * Optional. For messages forwarded from channels, identifier of the original message in the channel
  */
  readonly forward_from_message_id?: number;

  /**
  * Optional. For messages forwarded from channels, signature of the post author if present
  */
  readonly forward_signature?: string;

  /**
  * Optional. Sender&#x27;s name for messages forwarded from users who disallow adding a link to their account in forwarded messages
  */
  readonly forward_sender_name?: string;

  /**
  * Optional. For forwarded messages, date the original message was sent in Unix time
  */
  readonly forward_date?: number;

  /**
  * Optional. For replies, the original message. Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply.
  */
  readonly reply_to_message?: Message;

  /**
  * Optional. Bot through which the message was sent
  */
  readonly via_bot?: User;

  /**
  * Optional. Date the message was last edited in Unix time
  */
  readonly edit_date?: number;

  /**
  * Optional. The unique identifier of a media message group this message belongs to
  */
  readonly media_group_id?: string;

  /**
  * Optional. Signature of the post author for messages in channels, or the custom title of an anonymous group administrator
  */
  readonly author_signature?: string;

  /**
  * Optional. For text messages, the actual UTF-8 text of the message, 0-4096 characters
  */
  readonly text?: string;

  /**
  * Optional. For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text
  */
  readonly entities?: MessageEntity[];

  /**
  * Optional. Message is an animation, information about the animation. For backward compatibility, when this field is set, the document field will also be set
  */
  readonly animation?: Animation;

  /**
  * Optional. Message is an audio file, information about the file
  */
  readonly audio?: Audio;

  /**
  * Optional. Message is a general file, information about the file
  */
  readonly document?: Document;

  /**
  * Optional. Message is a photo, available sizes of the photo
  */
  readonly photo?: PhotoSize[];

  /**
  * Optional. Message is a sticker, information about the sticker
  */
  readonly sticker?: Sticker;

  /**
  * Optional. Message is a video, information about the video
  */
  readonly video?: Video;

  /**
  * Optional. Message is a video note, information about the video message
  */
  readonly video_note?: VideoNote;

  /**
  * Optional. Message is a voice message, information about the file
  */
  readonly voice?: Voice;

  /**
  * Optional. Caption for the animation, audio, document, photo, video or voice, 0-1024 characters
  */
  readonly caption?: string;

  /**
  * Optional. For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption
  */
  readonly caption_entities?: MessageEntity[];

  /**
  * Optional. Message is a shared contact, information about the contact
  */
  readonly contact?: Contact;

  /**
  * Optional. Message is a dice with random value from 1 to 6
  */
  readonly dice?: Dice;

  /**
  * Optional. Message is a game, information about the game. More about games »
  */
  readonly game?: Game;

  /**
  * Optional. Message is a native poll, information about the poll
  */
  readonly poll?: Poll;

  /**
  * Optional. Message is a venue, information about the venue. For backward compatibility, when this field is set, the location field will also be set
  */
  readonly venue?: Venue;

  /**
  * Optional. Message is a shared location, information about the location
  */
  readonly location?: Location;

  /**
  * Optional. New members that were added to the group or supergroup and information about them (the bot itself may be one of these members)
  */
  readonly new_chat_members?: User[];

  /**
  * Optional. A member was removed from the group, information about them (this member may be the bot itself)
  */
  readonly left_chat_member?: User;

  /**
  * Optional. A chat title was changed to this value
  */
  readonly new_chat_title?: string;

  /**
  * Optional. A chat photo was change to this value
  */
  readonly new_chat_photo?: PhotoSize[];

  /**
  * Optional. Service message: the chat photo was deleted
  */
  readonly delete_chat_photo?: true;

  /**
  * Optional. Service message: the group has been created
  */
  readonly group_chat_created?: true;

  /**
  * Optional. Service message: the supergroup has been created. This field can&#x27;t be received in a message coming through updates, because bot can&#x27;t be a member of a supergroup when it is created. It can only be found in reply_to_message if someone replies to a very first message in a directly created supergroup.
  */
  readonly supergroup_chat_created?: true;

  /**
  * Optional. Service message: the channel has been created. This field can&#x27;t be received in a message coming through updates, because bot can&#x27;t be a member of a channel when it is created. It can only be found in reply_to_message if someone replies to a very first message in a channel.
  */
  readonly channel_chat_created?: true;

  /**
  * Optional. The group has been migrated to a supergroup with the specified identifier. This number may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier.
  */
  readonly migrate_to_chat_id?: number;

  /**
  * Optional. The supergroup has been migrated from a group with the specified identifier. This number may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier.
  */
  readonly migrate_from_chat_id?: number;

  /**
  * Optional. Specified message was pinned. Note that the Message object in this field will not contain further reply_to_message fields even if it is itself a reply.
  */
  readonly pinned_message?: Message;

  /**
  * Optional. Message is an invoice for a payment, information about the invoice. More about payments »
  */
  readonly invoice?: Invoice;

  /**
  * Optional. Message is a service message about a successful payment, information about the payment. More about payments »
  */
  readonly successful_payment?: SuccessfulPayment;

  /**
  * Optional. The domain name of the website on which the user has logged in. More about Telegram Login »
  */
  readonly connected_website?: string;

  /**
  * Optional. Telegram Passport data
  */
  readonly passport_data?: PassportData;

  /**
  * Optional. Service message. A user in the chat triggered another user&#x27;s proximity alert while sharing Live Location.
  */
  readonly proximity_alert_triggered?: ProximityAlertTriggered;

  /**
  * Optional. Inline keyboard attached to the message. login_url buttons are represented as ordinary url buttons.
  */
  readonly reply_markup?: InlineKeyboardMarkup;

  constructor(obj: { message_id: number, date: number, chat: Chat, from?: User, sender_chat?: Chat, forward_from?: User, forward_from_chat?: Chat, forward_from_message_id?: number, forward_signature?: string, forward_sender_name?: string, forward_date?: number, reply_to_message?: Message, via_bot?: User, edit_date?: number, media_group_id?: string, author_signature?: string, text?: string, entities?: MessageEntity[], animation?: Animation, audio?: Audio, document?: Document, photo?: PhotoSize[], sticker?: Sticker, video?: Video, video_note?: VideoNote, voice?: Voice, caption?: string, caption_entities?: MessageEntity[], contact?: Contact, dice?: Dice, game?: Game, poll?: Poll, venue?: Venue, location?: Location, new_chat_members?: User[], left_chat_member?: User, new_chat_title?: string, new_chat_photo?: PhotoSize[], delete_chat_photo?: true, group_chat_created?: true, supergroup_chat_created?: true, channel_chat_created?: true, migrate_to_chat_id?: number, migrate_from_chat_id?: number, pinned_message?: Message, invoice?: Invoice, successful_payment?: SuccessfulPayment, connected_website?: string, passport_data?: PassportData, proximity_alert_triggered?: ProximityAlertTriggered, reply_markup?: InlineKeyboardMarkup,  } ) {
    this.message_id = obj?.message_id;
    this.from = new User(obj?.from);
    this.sender_chat = new Chat(obj?.sender_chat);
    this.date = obj?.date;
    this.chat = new Chat(obj?.chat);
    this.forward_from = new User(obj?.forward_from);
    this.forward_from_chat = new Chat(obj?.forward_from_chat);
    this.forward_from_message_id = obj?.forward_from_message_id;
    this.forward_signature = obj?.forward_signature;
    this.forward_sender_name = obj?.forward_sender_name;
    this.forward_date = obj?.forward_date;
    this.reply_to_message = new Message(obj?.reply_to_message);
    this.via_bot = new User(obj?.via_bot);
    this.edit_date = obj?.edit_date;
    this.media_group_id = obj?.media_group_id;
    this.author_signature = obj?.author_signature;
    this.text = obj?.text;
    this.entities = new MessageEntity[](obj?.entities);
    this.animation = new Animation(obj?.animation);
    this.audio = new Audio(obj?.audio);
    this.document = new Document(obj?.document);
    this.photo = new PhotoSize[](obj?.photo);
    this.sticker = new Sticker(obj?.sticker);
    this.video = new Video(obj?.video);
    this.video_note = new VideoNote(obj?.video_note);
    this.voice = new Voice(obj?.voice);
    this.caption = obj?.caption;
    this.caption_entities = new MessageEntity[](obj?.caption_entities);
    this.contact = new Contact(obj?.contact);
    this.dice = new Dice(obj?.dice);
    this.game = new Game(obj?.game);
    this.poll = new Poll(obj?.poll);
    this.venue = new Venue(obj?.venue);
    this.location = new Location(obj?.location);
    this.new_chat_members = new User[](obj?.new_chat_members);
    this.left_chat_member = new User(obj?.left_chat_member);
    this.new_chat_title = obj?.new_chat_title;
    this.new_chat_photo = new PhotoSize[](obj?.new_chat_photo);
    this.delete_chat_photo = obj?.delete_chat_photo;
    this.group_chat_created = obj?.group_chat_created;
    this.supergroup_chat_created = obj?.supergroup_chat_created;
    this.channel_chat_created = obj?.channel_chat_created;
    this.migrate_to_chat_id = obj?.migrate_to_chat_id;
    this.migrate_from_chat_id = obj?.migrate_from_chat_id;
    this.pinned_message = new Message(obj?.pinned_message);
    this.invoice = new Invoice(obj?.invoice);
    this.successful_payment = new SuccessfulPayment(obj?.successful_payment);
    this.connected_website = obj?.connected_website;
    this.passport_data = new PassportData(obj?.passport_data);
    this.proximity_alert_triggered = new ProximityAlertTriggered(obj?.proximity_alert_triggered);
    this.reply_markup = new InlineKeyboardMarkup(obj?.reply_markup);
  }
 
}
