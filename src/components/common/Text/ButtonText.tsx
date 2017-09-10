import React from 'react';
import { StyleSheet, TextStyle } from 'react-native';
import Text, { TextProps } from './Text';
import { STYLE_CONSTANTS } from '../../../config/constants';

const styles = StyleSheet.create({
  text: {
    textAlign: STYLE_CONSTANTS.textAlign.CENTER,
    fontSize: 20,
    fontWeight: '500'
  } as TextStyle
});

function ButtonText({ style, children, ...props }: TextProps) {
  return (
    <Text style={[styles.text, style] as TextStyle} {...props}>
      {children}
    </Text>
  );
}

export default ButtonText;
