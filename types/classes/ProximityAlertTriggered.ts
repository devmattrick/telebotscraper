import User from './User';

/**
* This object represents the content of a service message, sent whenever a user in the chat triggers a proximity alert set by another user.
*/
export default class ProximityAlertTriggered {
  /**
  * User that triggered the alert
  */
  readonly traveler: User;

  /**
  * User that set the alert
  */
  readonly watcher: User;

  /**
  * The distance between the users
  */
  readonly distance: number;

  constructor(obj: { traveler: User, watcher: User, distance: number,  } ) {
    this.traveler = obj?.traveler && new User(obj.traveler);
    this.watcher = obj?.watcher && new User(obj.watcher);
    this.distance = obj?.distance;
  }
 
}
