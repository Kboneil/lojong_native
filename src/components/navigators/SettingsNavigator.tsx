import assert from 'assert';
import React, { Component } from 'react';
import {
  StackNavigator,
  NavigationContainer,
  NavigationScreenProps
} from 'react-navigation';
import { Routes } from '../../config/routes';
import { Settings } from '../pages';

type Props = NavigationScreenProps<void>;

export default class SettingsNavigator extends Component<Props, {}> {
  StackNavigator: NavigationContainer;

  render() {
    assert.notEqual(this.props, null, 'Assertion Fail @ Main#render: no props');
    assert.notEqual(
      this.props.navigation,
      null,
      'Assertion Fail @ SettingsNavigator#render: no navigation'
    );
    assert.notEqual(
      this.props.navigation.state,
      null,
      'Assertion Fail @ SettingsNavigator#render: no navigation state'
    );
    assert.notEqual(
      this.props.navigation.state.routeName,
      null,
      'Assertion Fail @ SettingsNavigator#render: no navigation state routeName'
    );

    const SettingsStackNavigator = StackNavigator(
      {
        [Routes.Settings]: { screen: Settings }
      },
      {
        initialRouteName: this.props.navigation.state.routeName
      }
    );

    return <SettingsStackNavigator />;
  }
}
