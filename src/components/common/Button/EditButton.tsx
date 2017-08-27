import React from 'react';
import { Text, View, ViewStyle, StyleSheet } from 'react-native';
import Button from './Button';

interface Props {
  label: string;
  onPress?: () => void;
  style?: ViewStyle;
}

const styles = StyleSheet.create({
  button: {} as ViewStyle
});

function EditButton({ label, style, onPress }: Props) {
  return (
    <Button style={[styles.button, style] as ViewStyle} onPress={onPress}>
      <View>
        <Text>
          {label}
        </Text>
      </View>
    </Button>
  );
}

export default EditButton;
