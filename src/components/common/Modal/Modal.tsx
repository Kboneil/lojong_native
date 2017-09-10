import React, { ReactNode } from 'react';
import { Modal, ModalProperties, View, StyleSheet } from 'react-native';
import { Button } from '../index';

export type ModalProps = ModalProperties & {
  style?: StyleSheet;
  children?: ReactNode;
  onPress: () => void;
};

const styles = StyleSheet.create({
  modal: {}
});

function DefaultModal({ style, children, ...props }: ModalProps) {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.visible}
      {...props}
    >
      <View style={[styles.modal, style]}>{children}</View>
      <Button.Primary
        label={'Hide'}
        onPress={() => {
          props.onPress();
        }}
      />
    </Modal>
  );
}

export default DefaultModal;
