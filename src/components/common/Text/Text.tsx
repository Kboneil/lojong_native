import React, { ReactNode } from 'react';
import { Text, TextProperties, StyleSheet, TextStyle } from 'react-native';
import { STYLE_CONSTANTS } from '../../../config/constants';

export type TextProps = TextProperties & { children?: ReactNode };

const styles = StyleSheet.create({
  text: {
    fontSize: STYLE_CONSTANTS.fontSize.MEDIUM,
    color: STYLE_CONSTANTS.colors.DEFAULT_GRAY
  } as TextStyle
});

function CustomText({ style, children, ...props }: TextProps) {
  return (
    <Text style={[styles.text, style] as TextStyle} {...props}>
      {children}
    </Text>
  );
}

export default CustomText;
