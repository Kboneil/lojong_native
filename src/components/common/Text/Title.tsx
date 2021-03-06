import React from 'react';
import { StyleSheet, TextStyle } from 'react-native';
import Text, { TextProps } from './Text';
import { STYLE_CONSTANTS } from '../../../config/constants';

const styles = StyleSheet.create({
  text: { fontSize: STYLE_CONSTANTS.fontSize.XX_LARGE } as TextStyle
});

function TitleText({ style, children, ...props }: TextProps) {
  return (
    <Text style={[styles.text, style] as TextStyle} {...props}>
      {children}
    </Text>
  );
}

export default TitleText;
