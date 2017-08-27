import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { ApplicationStore } from './store/ApplicationStore';
import Lojong from './Lojong';

export interface Props {}
export interface State {}

const appStore = new ApplicationStore();

export default class ApplicationRoot extends Component<Props, State> {
  render() {
    return (
      <Provider store={appStore}>
        <Lojong />
      </Provider>
    );
  }
}
