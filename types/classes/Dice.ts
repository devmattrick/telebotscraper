
/**
* This object represents an animated emoji that displays a random value.
*/
export default class Dice {
  /**
  * Emoji on which the dice throw animation is based
  */
  readonly emoji: string;

  /**
  * Value of the dice, 1-6 for “” and “” base emoji, 1-5 for “” and “” base emoji, 1-64 for “” base emoji
  */
  readonly value: number;

  constructor(obj: { emoji: string, value: number,  } ) {
    this.emoji = obj?.emoji;
    this.value = obj?.value;
  }
 
}
