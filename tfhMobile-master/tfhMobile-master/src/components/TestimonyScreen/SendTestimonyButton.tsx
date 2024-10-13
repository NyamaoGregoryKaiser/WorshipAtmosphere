import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import { screenNames } from '../../screens/screenNames';
import appColors from '../../theme/colors';
import AddIcon from '../../assets/icons/svgs/testimony/add.svg';
import { DMBold } from '../../theme/fonts';
import { fontScale } from '../../functions/font';
import { scaledHeight, scaledWidth } from '../../functions/utils';

const SendTestimonyButton = ({
  navigateToScreen,
}: {
  navigateToScreen: (screenName: string) => void;
}) => {
  return (
    <TouchableHighlight
      activeOpacity={0.8}
      underlayColor={appColors.secondaryColor}
      style={styles.container}
      onPress={() => navigateToScreen(screenNames.SEND_TESTIMONY)}>
      <View style={{ position: 'relative' }}>
        <View style={styles.addButton}>
          <AddIcon />
        </View>
        <Text style={styles.text}>Share yours</Text>
      </View>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 60,
    right: 16,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
    paddingVertical: scaledHeight(9),
    backgroundColor: appColors.secondaryColor,
    borderRadius: 29.5,
    minWidth: scaledWidth(140),
    paddingRight: scaledWidth(10),
  },
  addButton: {
    position: 'absolute',
    left: -20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: appColors.secondaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    top: -15,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  text: {
    alignSelf: 'flex-end',
    fontFamily: DMBold,
    color: appColors.white,
    fontSize: fontScale(10),
  },
});

export default SendTestimonyButton;
