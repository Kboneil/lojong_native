import React, { Component } from 'react';
import {
  TabNavigator,
  NavigationContainer,
  TabNavigatorConfig
} from 'react-navigation';
import { Routes } from '../../config/routes';
import { Home, Settings, SloganList } from './';
import { STYLE_CONSTANTS } from '../../config/constants';

export default class Tab extends Component<{}, {}> {
  private TabNavigator: NavigationContainer;

  private routeConfig = {
    [Routes.Home]: { screen: Home },
    [Routes.SloganList]: { screen: SloganList },
    [Routes.Settings]: { screen: Settings }
  };

  private tabNavigatorConfig = {
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: STYLE_CONSTANTS.colors.HIGHLIGHT,
      inactiveTintColor: STYLE_CONSTANTS.colors.WHITE,
      labelStyle: {
        fontSize: 12
      },
      style: {
        backgroundColor: STYLE_CONSTANTS.colors.PRIMARY
      }
    }
  } as TabNavigatorConfig;

  constructor(props: {}) {
    super(props);

    this.TabNavigator = TabNavigator(this.routeConfig, this.tabNavigatorConfig);
  }

  render() {
    const TabNavigator = this.TabNavigator;
    return <TabNavigator />;
  }
}
