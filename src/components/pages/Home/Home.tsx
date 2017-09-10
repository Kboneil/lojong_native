import assert from 'assert';
import React, { Component } from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { Header, Text, Button, Modal } from '../../common';
import { View, ViewStyle, StyleSheet } from 'react-native';
import { SloganProvider } from '../../../providers/Slogan.provider';
import { Home as strings } from '../../../config/strings';

type Props = NavigationScreenProps<void> & {};

type State = {
  sloganOfTheDay?: string;
  commentModalIsVisible: boolean;
};

export default class Home extends Component<Props, State> {
  state: State = {
    sloganOfTheDay: undefined,
    commentModalIsVisible: false
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

  private _setCommentModalVisible(isVisible: boolean) {
    this.setState({ commentModalIsVisible: isVisible });
  }

  render() {
    return (
      <View style={styles.pageContainer}>
        {this.state.sloganOfTheDay !== undefined && (
          <View>
            <Text.Default>{this.state.sloganOfTheDay}</Text.Default>
            <Modal.Comment
              onPress={() => this._setCommentModalVisible(false)}
              isVisible={this.state.commentModalIsVisible}
            />
            <Button.Primary
              label={'Make A Comment'}
              onPress={() => {
                this._setCommentModalVisible(true);
              }}
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pageContainer: {
    padding: 20
  } as ViewStyle
});
