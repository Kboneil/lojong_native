import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Modal } from '../';

export interface Props {
  isVisible: boolean;
  onPress: () => void;
}

export default class DeleteModal extends Component<Props, {}> {
  render() {
    return (
      <View>
        <Modal.Default
          visible={this.props.isVisible}
          onPress={() => this.props.onPress()}
        >
          <View>
            <Text.Title>Delete</Text.Title>
          </View>
        </Modal.Default>
      </View>
    );
  }
}
