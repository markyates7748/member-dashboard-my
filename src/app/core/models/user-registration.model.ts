/**
 * User Registration model to send to the API.
 * This is a registration model for member users.
 */
export class UserRegistration {
  constructor(private _username: string,
              private _password: string,
              private _membershipId: string) {
  }

  set username(username: string) {
    this._username = username;
  }

  get username(): string {
    return this._username;
  }

  set password(password: string) {
    this._password = password;
  }

  get password(): string {
    return this._password;
  }

  get membershipId(): string {
    return this._membershipId;
  }

  set membershipId(membershipId: string) {
    this._membershipId = membershipId;
  }

  get role(): string {
    return 'member';
  }

}
