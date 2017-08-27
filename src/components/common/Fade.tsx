import React, { Component } from 'react';
import { Animated, ViewStyle } from 'react-native';
import { rnComponentProps } from '../../config/constants';

const FADE_DURATION_MS = 500;

type Props = { visible: boolean; style?: ViewStyle };

type State = { visible: boolean; opacity: Animated.Value };

export default class Fade extends Component<Props, State> {
    state: State = {
        visible: this.props.visible,
        opacity: new Animated.Value(this.props.visible ? 1 : 0)
    };

    componentWillReceiveProps(nextProps: Props) {
        if (nextProps.visible) {
            this.setState({ visible: true });
        }
        Animated.timing(this.state.opacity, {
            toValue: nextProps.visible ? 1 : 0,
            duration: FADE_DURATION_MS
        }).start(() => this.setState({ visible: nextProps.visible }));
    }

    render() {
        return (
            <Animated.View
                style={[{ opacity: this.state.opacity }, this.props.style]}
                pointerEvents={rnComponentProps.pointerEvents.BOX_NONE}
            >
                {this.state.visible && this.props.children}
            </Animated.View>
        );
    }
}
