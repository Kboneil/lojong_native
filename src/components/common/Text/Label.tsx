import React from 'react';
import { StyleSheet, TextStyle } from 'react-native';
import Text, { TextProps } from './Text';
import { styleConstants } from '../../../config/constants';

const styles = StyleSheet.create({
  text: {
    fontSize: styleConstants.fontSize.MEDIUM,
    fontWeight: '500',
    marginLeft: 10
  } as TextStyle
});

function TitleText({ style, children, ...props }: TextProps) {
  return (
    <Text style={[styles.text, style] as TextStyle} {...props}>
      {children}
    </Text>
  );
}

export default TitleText;
