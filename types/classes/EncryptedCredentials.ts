
/**
* Contains data required for decrypting and authenticating EncryptedPassportElement. See the Telegram Passport Documentation for a complete description of the data decryption and authentication processes.
*/
export default class EncryptedCredentials {
  /**
  * Base64-encoded encrypted JSON-serialized data with unique user&#x27;s payload, data hashes and secrets required for EncryptedPassportElement decryption and authentication
  */
  readonly data: string;

  /**
  * Base64-encoded data hash for data authentication
  */
  readonly hash: string;

  /**
  * Base64-encoded secret, encrypted with the bot&#x27;s public RSA key, required for data decryption
  */
  readonly secret: string;

  constructor(obj: { data: string, hash: string, secret: string,  } ) {
    this.data = obj?.data
    this.hash = obj?.hash
    this.secret = obj?.secret
  }
 
}
