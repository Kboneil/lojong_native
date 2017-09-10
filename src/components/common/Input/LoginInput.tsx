import assert from 'assert';
import React from 'react';
import { StyleSheet, KeyboardType, TextStyle, ViewStyle } from 'react-native';
import { STYLE_CONSTANTS } from '../../../config/constants';
import Input from './Input';

export interface Props {
  label?: string;
  value?: string;
  keyboardType?: KeyboardType;
  secureTextEntry?: boolean;
  onChangeText: (inputValue: string) => void;
  style?: ViewStyle;
}

function LoginInput(props: Props) {
  assert.notEqual(props, null, 'Assertion Fail @ Input: no props');

  return (
    <Input
      value={props.value}
      label={props.label}
      keyboardType={props.keyboardType}
      secureTextEntry={props.secureTextEntry}
      onChangeText={props.onChangeText}
      inputStyle={styles.input}
      style={props.style}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    fontSize: 22,
    margin: 10,
    padding: 5,
    textAlign: STYLE_CONSTANTS.textAlign.CENTER
  } as TextStyle,

  label: {
    marginLeft: 0,
    fontSize: 20,
    fontWeight: '500',
    textAlign: STYLE_CONSTANTS.textAlign.CENTER
  } as TextStyle
});

export default LoginInput;
