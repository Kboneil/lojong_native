import assert from 'assert';
import { observable } from 'mobx';

export interface IApplicationStore {
  IsLoggedIn: boolean;
  login: (email: string, password: string) => void;
}

export class ApplicationStore implements IApplicationStore {
  @observable public IsLoggedIn: boolean;

  constructor() {
    this.IsLoggedIn = false;
  }

  login(email: string, password: string): void {
    assert.notEqual(
      null,
      email,
      'Assertion Fail @ ApplicationStore#login: no email'
    );
    assert.notEqual(
      null,
      password,
      'Assertion Fail @ ApplicationStore#login: no password'
    );

    this.IsLoggedIn = true;
  }
}
