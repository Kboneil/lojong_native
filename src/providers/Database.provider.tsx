// import assert from 'assert';
// import { strings } from '../utils/database.utils';

export class DatabaseProvider {
  static getSloganOfTheDay(): Promise<string> {
    return Promise.resolve('1: First, train in the Preliminaries.');
    // return fetch(
    //   strings.routes.SERVER + strings.routes.DAILY_SLOGAN + userId,
    //   {
    //     method: strings.methods.GET
    //   }
    // )
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(data => {
    //     if (data.success === false) {
    //       return Promise.reject(data.error);
    //     }

    //     return data;
    //   });
  }
}
