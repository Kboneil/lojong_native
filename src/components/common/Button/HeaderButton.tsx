import React from 'react';
import { Text, View, ViewStyle, StyleSheet, TextStyle } from 'react-native';
import Button from './Button';
import { styleConstants } from '../../../config/constants';

interface Props {
  label?: string;
  onPress?: () => void;
  style?: ViewStyle;
  children?: React.ReactNode;
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 0,
    height: 30,
    width: 50,
    padding: 5
  } as ViewStyle,

  buttonText: {
    fontSize: 15,
    color: styleConstants.colors.WHITE
  } as TextStyle
});

function HeaderButton({ label, style, onPress, children }: Props) {
  return (
    <Button style={[styles.button, style] as ViewStyle} onPress={onPress}>
      <View>
        {label &&
          <Text style={styles.buttonText}>
            {label}
          </Text>}
        {children}
      </View>
    </Button>
  );
}

export default HeaderButton;
