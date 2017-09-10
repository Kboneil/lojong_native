import assert from 'assert';
import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProperties,
  TextStyle
} from 'react-native';
import { Text } from '../../common';
import { STYLE_CONSTANTS } from '../../../config/constants';

export interface Props extends TextInputProperties {
  label?: string;
  inputStyle?: TextStyle;
}

function Input({ label, inputStyle, style, ...props }: Props) {
  assert.notEqual(props, null, 'Assertion Fail @ Input: no props');

  return (
    <View style={style}>
      <Text.Label>{label}</Text.Label>
      <TextInput
        {...props}
        style={[styles.input, inputStyle] as TextStyle}
        underlineColorAndroid="transparent"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 10,
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: STYLE_CONSTANTS.colors.DEFAULT_GRAY
  }
});

export default Input;
