import assert from 'assert';
import React, { Component } from 'react';
import {
  StackNavigator,
  NavigationContainer,
  NavigationScreenProps
} from 'react-navigation';
import { Routes } from '../../config/routes';
import { Home } from '../pages';
import { Drawer as strings } from '../../config/strings';

type Props = NavigationScreenProps<void>;

export default class Main extends Component<Props, {}> {
  StackNavigator: NavigationContainer;

  public openDrawer(): void {
    assert.notEqual(
      this.props,
      null,
      'Assertion Fail @ Main#openDrawer: no props'
    );
    assert.notEqual(
      this.props.navigation,
      null,
      'Assertion Fail @ Main#openDrawer: no navigation'
    );

    this.props.navigation.navigate(strings.drawerOpen);
  }

  render() {
    assert.notEqual(this.props, null, 'Assertion Fail @ Main#render: no props');
    assert.notEqual(
      this.props.navigation,
      null,
      'Assertion Fail @ Main#render: no navigation'
    );
    assert.notEqual(
      this.props.navigation.state,
      null,
      'Assertion Fail @ Main#render: no navigation state'
    );
    assert.notEqual(
      this.props.navigation.state.routeName,
      null,
      'Assertion Fail @ Main#render: no navigation state routeName'
    );

    const MainStackNavigator = StackNavigator(
      {
        [Routes.Home]: { screen: Home }
      },
      {
        initialRouteName: this.props.navigation.state.routeName
      }
    );

    return (
      <MainStackNavigator
        screenProps={{
          openDrawer: () => {
            this.openDrawer();
          }
        }}
      />
    );
  }
}
