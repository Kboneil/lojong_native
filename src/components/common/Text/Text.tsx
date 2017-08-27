import React, { ReactNode } from 'react';
import { Text, TextProperties, StyleSheet, TextStyle } from 'react-native';
import { styleConstants } from '../../../config/constants';

export type TextProps = TextProperties & { children?: ReactNode };

const styles = StyleSheet.create({
  text: {
    fontSize: styleConstants.fontSize.MEDIUM,
    color: styleConstants.colors.DEFAULT_GRAY
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
