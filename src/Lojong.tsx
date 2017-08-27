import assert from 'assert';
import React, { Component } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { inject, observer } from 'mobx-react';
import { Fade } from './components/common';
import Login from './components/pages/Login';
import Drawer from './components/navigators/Drawer';

import { ApplicationStore } from './store/ApplicationStore';
import { Stores } from './config/strings';

type Props = { store?: ApplicationStore };

type State = {};

@inject(Stores.store)
@observer
export default class Lojong extends Component<Props, State> {
  render() {
    const { store } = this.props;
    assert.notEqual(
      store,
      null,
      'Assertion Fail @ Lojong#render: store is null'
    );
    if (store) {
      return (
        <View style={StyleSheet.absoluteFill as ViewStyle}>
          <Fade
            style={StyleSheet.absoluteFill as ViewStyle}
            visible={store.IsLoggedIn}
          >
            <Drawer />
          </Fade>

          <Fade
            style={StyleSheet.absoluteFill as ViewStyle}
            visible={store.IsLoggedIn === false}
          >
            <Login />
          </Fade>
        </View>
      );
    }
    return null;
  }
}
