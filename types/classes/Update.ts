import Message from './Message';
import InlineQuery from './InlineQuery';
import ChosenInlineResult from './ChosenInlineResult';
import CallbackQuery from './CallbackQuery';
import ShippingQuery from './ShippingQuery';
import PreCheckoutQuery from './PreCheckoutQuery';
import Poll from './Poll';
import PollAnswer from './PollAnswer';

/**
* This object represents an incoming update.At most one of the optional parameters can be present in any given update.
*/
export default class Update {
  /**
  * The update&#x27;s unique identifier. Update identifiers start from a certain positive number and increase sequentially. This ID becomes especially handy if you&#x27;re using Webhooks, since it allows you to ignore repeated updates or to restore the correct update sequence, should they get out of order. If there are no new updates for at least a week, then identifier of the next update will be chosen randomly instead of sequentially.
  */
  readonly update_id: number;

  /**
  * Optional. New incoming message of any kind — text, photo, sticker, etc.
  */
  readonly message?: Message;

  /**
  * Optional. New version of a message that is known to the bot and was edited
  */
  readonly edited_message?: Message;

  /**
  * Optional. New incoming channel post of any kind — text, photo, sticker, etc.
  */
  readonly channel_post?: Message;

  /**
  * Optional. New version of a channel post that is known to the bot and was edited
  */
  readonly edited_channel_post?: Message;

  /**
  * Optional. New incoming inline query
  */
  readonly inline_query?: InlineQuery;

  /**
  * Optional. The result of an inline query that was chosen by a user and sent to their chat partner. Please see our documentation on the feedback collecting for details on how to enable these updates for your bot.
  */
  readonly chosen_inline_result?: ChosenInlineResult;

  /**
  * Optional. New incoming callback query
  */
  readonly callback_query?: CallbackQuery;

  /**
  * Optional. New incoming shipping query. Only for invoices with flexible price
  */
  readonly shipping_query?: ShippingQuery;

  /**
  * Optional. New incoming pre-checkout query. Contains full information about checkout
  */
  readonly pre_checkout_query?: PreCheckoutQuery;

  /**
  * Optional. New poll state. Bots receive only updates about stopped polls and polls, which are sent by the bot
  */
  readonly poll?: Poll;

  /**
  * Optional. A user changed their answer in a non-anonymous poll. Bots receive new votes only in polls that were sent by the bot itself.
  */
  readonly poll_answer?: PollAnswer;

  constructor(obj: { update_id: number, message?: Message, edited_message?: Message, channel_post?: Message, edited_channel_post?: Message, inline_query?: InlineQuery, chosen_inline_result?: ChosenInlineResult, callback_query?: CallbackQuery, shipping_query?: ShippingQuery, pre_checkout_query?: PreCheckoutQuery, poll?: Poll, poll_answer?: PollAnswer,  } ) {
    this.update_id = obj?.update_id;
    this.message = obj?.message && new Message(obj.message);
    this.edited_message = obj?.edited_message && new Message(obj.edited_message);
    this.channel_post = obj?.channel_post && new Message(obj.channel_post);
    this.edited_channel_post = obj?.edited_channel_post && new Message(obj.edited_channel_post);
    this.inline_query = obj?.inline_query && new InlineQuery(obj.inline_query);
    this.chosen_inline_result = obj?.chosen_inline_result && new ChosenInlineResult(obj.chosen_inline_result);
    this.callback_query = obj?.callback_query && new CallbackQuery(obj.callback_query);
    this.shipping_query = obj?.shipping_query && new ShippingQuery(obj.shipping_query);
    this.pre_checkout_query = obj?.pre_checkout_query && new PreCheckoutQuery(obj.pre_checkout_query);
    this.poll = obj?.poll && new Poll(obj.poll);
    this.poll_answer = obj?.poll_answer && new PollAnswer(obj.poll_answer);
  }
 
}
