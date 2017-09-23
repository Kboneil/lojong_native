import assert from 'assert';
import React, { Component } from 'react';
import { View, StyleSheet, ViewStyle, StatusBar } from 'react-native';
import { inject, observer } from 'mobx-react';
import { Fade } from './components/common';
import Login from './components/pages/Login';
import Tab from './components/navigators/Tab';

import { ApplicationStore } from './store/ApplicationStore';
import { Stores } from './config/strings';
import { STYLE_CONSTANTS } from './config/constants';

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
          <StatusBar
            backgroundColor={STYLE_CONSTANTS.colors.PRIMARY}
            barStyle="light-content"
          />
          <Fade
            style={StyleSheet.absoluteFill as ViewStyle}
            visible={store.IsLoggedIn}
          >
            <Tab />
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
