import {
  View,
  Text,
  TouchableHighlight,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  ButtonProps,
} from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import appColors from '../../theme/colors';
import { DMBold } from '../../theme/fonts';
import Loader from '../Loader';
import { fontScale } from '../../functions/font';
import { scaledHeight } from '../../functions/utils';

interface Props {
  title: string;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  onPress?: () => void;
  loading?: boolean;
  loadingColor?: string;
}

const Button = ({
  title,
  buttonStyle,
  textStyle,
  onPress,
  loading,
  loadingColor = appColors.white,
  ...rest
}: Props & ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, buttonStyle]}
      onPress={onPress}
      {...rest}>
      {loading ? (
        <Loader color={loadingColor} />
      ) : (
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    backgroundColor: appColors.secondaryColor,
    height: scaledHeight(45),
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: appColors.white,
    fontFamily: DMBold,
    fontSize: fontScale(13),
  },
});

export default Button;
