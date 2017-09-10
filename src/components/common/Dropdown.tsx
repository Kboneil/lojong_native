import assert from 'assert';
import React from 'react';
import { View, Picker, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Dropdown as strings } from '../../config/strings';
import { STYLE_CONSTANTS } from '../../config/constants';
import { Text } from './';

export interface Props {
  label: string;
  options: { id: string; name: string }[];
  value?: string;
  onSelect: (dropdownValue: string) => void;
}

function Dropdown(props: Props) {
  assert.notEqual(props.label, null, 'Assertion Fail @ Dropdown: no label');
  assert.notEqual(props.options, null, 'Assertion Fail @ Dropdown: no options');

  return (
    <View style={styles.container}>
      <Text.Label>{props.label}</Text.Label>
      {props.value && (
        <Picker
          style={styles.picker}
          mode="dropdown"
          selectedValue={props.value}
          onValueChange={itemValue => props.onSelect(itemValue)}
        >
          {props.options.map(option => (
            <Picker.Item
              label={option.name}
              value={option.id}
              key={option.id}
            />
          ))}
        </Picker>
      )}
      {props.value === undefined && (
        <Picker
          style={styles.picker}
          mode="dropdown"
          selectedValue={strings.unselectedDropdown}
          onValueChange={itemValue => props.onSelect(itemValue)}
        >
          <Picker.Item
            label={strings.unselectedDropdownLabel}
            value={undefined}
            key={strings.unselectedDropdown}
          />
          {props.options.map(option => (
            <Picker.Item
              label={option.name}
              value={option.id}
              key={option.id}
            />
          ))}
        </Picker>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {} as ViewStyle,
  label: {
    fontSize: STYLE_CONSTANTS.fontSize.MEDIUM
  } as TextStyle,
  picker: {
    marginLeft: 10
  } as ViewStyle
});

export default Dropdown;
