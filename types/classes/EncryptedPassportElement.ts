import PassportFile from './PassportFile';

/**
* Contains information about documents or other Telegram Passport elements shared with the bot by the user.
*/
export default class EncryptedPassportElement {
  /**
  * Element type. One of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”, “address”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”, “phone_number”, “email”.
  */
  readonly type: string;

  /**
  * Optional. Base64-encoded encrypted Telegram Passport element data provided by the user, available for “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport” and “address” types. Can be decrypted and verified using the accompanying EncryptedCredentials.
  */
  readonly data?: string;

  /**
  * Optional. User&#x27;s verified phone number, available only for “phone_number” type
  */
  readonly phone_number?: string;

  /**
  * Optional. User&#x27;s verified email address, available only for “email” type
  */
  readonly email?: string;

  /**
  * Optional. Array of encrypted files with documents provided by the user, available for “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types. Files can be decrypted and verified using the accompanying EncryptedCredentials.
  */
  readonly files?: PassportFile[];

  /**
  * Optional. Encrypted file with the front side of the document, provided by the user. Available for “passport”, “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using the accompanying EncryptedCredentials.
  */
  readonly front_side?: PassportFile;

  /**
  * Optional. Encrypted file with the reverse side of the document, provided by the user. Available for “driver_license” and “identity_card”. The file can be decrypted and verified using the accompanying EncryptedCredentials.
  */
  readonly reverse_side?: PassportFile;

  /**
  * Optional. Encrypted file with the selfie of the user holding a document, provided by the user; available for “passport”, “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using the accompanying EncryptedCredentials.
  */
  readonly selfie?: PassportFile;

  /**
  * Optional. Array of encrypted files with translated versions of documents provided by the user. Available if requested for “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types. Files can be decrypted and verified using the accompanying EncryptedCredentials.
  */
  readonly translation?: PassportFile[];

  /**
  * Base64-encoded element hash for using in PassportElementErrorUnspecified
  */
  readonly hash: string;

  constructor(obj: { type: string, hash: string, data?: string, phone_number?: string, email?: string, files?: PassportFile[], front_side?: PassportFile, reverse_side?: PassportFile, selfie?: PassportFile, translation?: PassportFile[],  } ) {
    this.type = obj?.type;
    this.data = obj?.data;
    this.phone_number = obj?.phone_number;
    this.email = obj?.email;
    this.files = obj?.files?.map(o=>new PassportFile(o));
    this.front_side = obj?.front_side && new PassportFile(obj.front_side);
    this.reverse_side = obj?.reverse_side && new PassportFile(obj.reverse_side);
    this.selfie = obj?.selfie && new PassportFile(obj.selfie);
    this.translation = obj?.translation?.map(o=>new PassportFile(o));
    this.hash = obj?.hash;
  }
 
}
