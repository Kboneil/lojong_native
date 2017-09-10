import React from 'react';
import { View, ViewStyle, StyleSheet, TextStyle } from 'react-native';
import { Text, Button } from '../';
import { STYLE_CONSTANTS } from '../../../config/constants';

interface Props {
  label?: string;
  onPress?: () => void;
  style?: ViewStyle;
  children?: React.ReactNode;
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: STYLE_CONSTANTS.colors.PRIMARY,
    borderColor: STYLE_CONSTANTS.colors.PRIMARY
  } as ViewStyle,
  buttonText: {
    color: STYLE_CONSTANTS.colors.WHITE
  } as TextStyle
});

function PrimaryButton({ label, style, onPress, children }: Props) {
  return (
    <Button.Default
      style={[styles.button, style] as ViewStyle}
      onPress={onPress}
    >
      <View>
        {label && (
          <Text.ButtonText style={styles.buttonText}>{label}</Text.ButtonText>
        )}
        {children}
      </View>
    </Button.Default>
  );
}

export default PrimaryButton;
