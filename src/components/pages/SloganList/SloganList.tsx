import React, { Component } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { Text, Header } from '../../common';
import { SloganList as strings } from '../../../config/strings';

type Props = NavigationScreenProps<{}> & {};

export default class SloganList extends Component<Props, {}> {
  static navigationOptions() {
    return Header({
      header: strings.header
    });
  }

  render() {
    return (
      <View style={styles.pageContainer}>
        <Text.Title>{'Slogan List'}</Text.Title>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1
  } as ViewStyle
});
