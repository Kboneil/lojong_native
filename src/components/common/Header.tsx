import React from 'react';
import { Button } from './index';
import { Hamburger, BackArrow } from '../../config/images';
import { Image, ViewStyle, StyleSheet } from 'react-native';
import { STYLE_CONSTANTS } from '../../config/constants';

export interface Props {
  header: string;
  screenProps?: {
    openDrawer: () => void;
  };
  onPress?: () => void;
  buttonTitle?: string;
  goBack?: () => void;
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: STYLE_CONSTANTS.colors.PRIMARY
  } as ViewStyle,
  headerTitle: {
    color: '#ffffff'
  } as ViewStyle
});

function Header(props: Props) {
  let headerLeft = undefined;
  if (props.screenProps) {
    headerLeft = (
      <Button.Header onPress={props.screenProps.openDrawer}>
        <Image
          source={Hamburger}
          style={{ tintColor: STYLE_CONSTANTS.colors.WHITE }}
        />
      </Button.Header>
    );
  } else if (props.goBack) {
    headerLeft = (
      <Button.Header onPress={() => props.goBack()}>
        <Image
          source={BackArrow}
          style={{ tintColor: STYLE_CONSTANTS.colors.WHITE }}
        />
      </Button.Header>
    );
  }

  let headerRight = null;
  if (props.onPress) {
    headerRight = (
      <Button.Header onPress={props.onPress} label={props.buttonTitle} />
    );
  }

  return {
    headerTitle: props.header,
    headerLeft,
    headerRight,
    headerStyle: styles.headerStyle,
    headerTitleStyle: styles.headerTitle
  };
}

export default Header;
