import assert from 'assert';
import React, { Component } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { inject, observer } from 'mobx-react';
import { Button, Input, Text } from '../common';
import { Stores } from '../../config/strings';
import { ApplicationStore } from '../../store/ApplicationStore';
import { Login as strings } from '../../config/strings';
import { rnComponentProps, STYLE_CONSTANTS } from '../../config/constants';

type Props = { store?: ApplicationStore };

type State = {
  email: string;
  password: string;
};

@inject(Stores.store)
@observer
export default class Login extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  private _handleLoginPress(): void {
    const { store } = this.props;
    assert.notEqual(
      store,
      null,
      'Assertion Fail @ Login#_handleLoginPress: no store'
    );
    if (store) {
      store.login(this.state.email, this.state.password);
    }
  }

  private _handleChangeEmail(inputValue: string): void {
    assert.notEqual(
      inputValue,
      null,
      'Assertion Fail @ Login#_handleChangeEmail: no inputValue'
    );

    this.setState({ email: inputValue });
  }

  private _handleChangePassword(inputValue: string): void {
    assert.notEqual(
      inputValue,
      null,
      'Assertion Fail @ Login#_handleChangeEmail: no inputValue'
    );

    this.setState({ password: inputValue });
  }

  render() {
    return (
      <View style={styles.pageContainer}>
        <View style={styles.headerViewStyle}>
          <Text.Title>{strings.header}</Text.Title>
        </View>
        <View>
          <Input.Login
            onChangeText={inputValue => this._handleChangeEmail(inputValue)}
            label={strings.email}
            keyboardType={rnComponentProps.textInput.keyboardType.EMAIL_ADDRESS}
          />
        </View>
        <View>
          <Input.Login
            onChangeText={inputValue => this._handleChangePassword(inputValue)}
            label={strings.password}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.loginButtonContainer}>
          <Button.Default onPress={() => this._handleLoginPress()}>
            <Text.ButtonText>{strings.loginButton}</Text.ButtonText>
          </Button.Default>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginButtonContainer: {
    justifyContent: STYLE_CONSTANTS.flexJustify.CENTER,
    alignItems: STYLE_CONSTANTS.flexJustify.CENTER,
    width: '100%',
    height: 75,
    marginTop: 50
  } as ViewStyle,
  headerViewStyle: {
    height: 200,
    width: '100%',
    alignItems: STYLE_CONSTANTS.flexAlign.CENTER,
    marginTop: 30
  } as ViewStyle,
  pageContainer: {
    padding: 10
  } as ViewStyle
});
