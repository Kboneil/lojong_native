import assert from 'assert';
import { DatabaseProvider } from './Database.provider';

export class SloganProvider {
  static getSloganOfTheDay(): Promise<string> {
    assert.notEqual(
      null,
      DatabaseProvider,
      'Assertion Fail @ DatabaseProvider#getSloganOfTheDay: no DatabaseProvider'
    );

    return DatabaseProvider.getSloganOfTheDay();
  }
}
