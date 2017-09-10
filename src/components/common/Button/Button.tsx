import React, { ReactNode } from 'react';
import {
  TouchableHighlight,
  ViewStyle,
  StyleSheet,
  TouchableHighlightProperties,
  View
} from 'react-native';
import { STYLE_CONSTANTS } from '../../../config/constants';

export interface Props extends TouchableHighlightProperties {
  children?: ReactNode;
}

function Button({ style, children, ...props }: Props) {
  return (
    <TouchableHighlight
      onPress={props.onPress}
      style={[styles.button, style] as ViewStyle}
      underlayColor={'#00000055'}
    >
      <View>{children}</View>
    </TouchableHighlight>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 200,
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    borderColor: '#050505',
    justifyContent: STYLE_CONSTANTS.flexJustify.CENTER,
    alignItems: STYLE_CONSTANTS.flexJustify.CENTER
  } as ViewStyle
});
