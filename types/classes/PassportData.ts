import EncryptedPassportElement from './EncryptedPassportElement';
import EncryptedCredentials from './EncryptedCredentials';

/**
* Contains information about Telegram Passport data shared with the bot by the user.
*/
export default class PassportData {
  /**
  * Array with information about documents and other Telegram Passport elements that was shared with the bot
  */
  data: EncryptedPassportElement[];

  /**
  * Encrypted credentials required to decrypt the data
  */
  credentials: EncryptedCredentials;

  constructor(obj: { data: EncryptedPassportElement[], credentials: EncryptedCredentials,  } ) {
    this.data = obj.data;
    this.credentials = obj.credentials;
  }
 
}
