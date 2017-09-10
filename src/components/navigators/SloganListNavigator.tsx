import assert from 'assert';
import React, { Component } from 'react';
import {
  StackNavigator,
  NavigationContainer,
  NavigationScreenProps
} from 'react-navigation';
import { Routes } from '../../config/routes';
import { SloganList } from '../pages';

type Props = NavigationScreenProps<void>;

export default class SloganListNavigator extends Component<Props, {}> {
  StackNavigator: NavigationContainer;

  render() {
    assert.notEqual(this.props, null, 'Assertion Fail @ Main#render: no props');
    assert.notEqual(
      this.props.navigation,
      null,
      'Assertion Fail @ SloganListNavigator#render: no navigation'
    );
    assert.notEqual(
      this.props.navigation.state,
      null,
      'Assertion Fail @ SloganListNavigator#render: no navigation state'
    );
    assert.notEqual(
      this.props.navigation.state.routeName,
      null,
      'Assertion Fail @ SloganListNavigator#render: no navigation state routeName'
    );

    const SloganListStackNavigator = StackNavigator(
      {
        [Routes.SloganList]: { screen: SloganList }
      },
      {
        initialRouteName: this.props.navigation.state.routeName
      }
    );

    return <SloganListStackNavigator />;
  }
}
