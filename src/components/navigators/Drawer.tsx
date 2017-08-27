import React, { Component } from 'react';
import { DrawerNavigator, NavigationContainer } from 'react-navigation';
import { Routes } from '../../config/routes';
import Main from './Main';

export default class Drawer extends Component<{}, {}> {
  private DrawerNavigator: NavigationContainer;

  constructor(props: {}) {
    super(props);

    this.DrawerNavigator = DrawerNavigator({
      [Routes.Home]: { screen: Main }
    });
  }

  render() {
    const DrawerNavigator = this.DrawerNavigator;
    return <DrawerNavigator />;
  }
}
