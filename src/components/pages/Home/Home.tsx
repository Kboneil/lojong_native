import assert from 'assert';
import React, { Component } from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { Header, Text } from '../../common';
import { View, ViewStyle, StyleSheet } from 'react-native';
import { SloganProvider } from '../../../providers/Slogan.provider';
import { Home as strings } from '../../../config/strings';

type Props = NavigationScreenProps<void> & {};

type State = {
  sloganOfTheDay?: string;
};

export default class Home extends Component<Props, State> {
  state: State = {
    sloganOfTheDay: undefined
  };

  static navigationOptions(props: Props) {
    assert.notEqual(
      props,
      null,
      'Assertion Fail @ Home#navigationOptions: no props'
    );
    assert.notEqual(
      props.screenProps,
      null,
      'Assertion Fail @ Home#navigationOptions: no props.screenProps'
    );

    return Header({
      screenProps: props.screenProps as {
        openDrawer: () => void;
      },
      header: strings.header
    });
  }

  componentWillMount(): void {
    this._getSloganOfTheDay();
  }

  private _getSloganOfTheDay(): void {
    assert.notEqual(
      null,
      SloganProvider,
      'Assertion Fail @ Home#_getDashboardItems: no SloganProvider'
    );

    SloganProvider.getSloganOfTheDay().then(result => {
      this.setState({ sloganOfTheDay: result });
    });
  }

  styles = StyleSheet.create({
    pageContainer: {
      padding: 20
    } as ViewStyle
  });

  render() {
    return (
      <View style={this.styles.pageContainer}>
        {this.state.sloganOfTheDay !== undefined &&
          <Text.Default>
            {this.state.sloganOfTheDay}
          </Text.Default>}
      </View>
    );
  }
}
