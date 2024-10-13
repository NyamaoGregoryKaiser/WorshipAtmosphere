import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import MoreBG from '../../../assets/backgrounds/more-bg.svg';
import { StyleSheet } from 'react-native';
import appColors from '../../../theme/colors';
import { DMBold, DMRegular } from '../../../theme/fonts';
import ChevronDown from '../../../assets/icons/svgs/more/chevron-down.svg';
import { useAppSelector } from '../../../store/hooks';
import { screenNames } from '../../../screens/screenNames';
import { fontScale, lineHeightSmall } from '../../../functions/font';
import { getVersion } from 'react-native-device-info';
import { scaledHeight } from '../../../functions/utils';

const MoreHeader = ({
  navigateToScreen,
}: {
  navigateToScreen: (screenName: string) => void;
}) => {
  const { user } = useAppSelector(state => state.user);

  return (
    <View style={styles.container}>
      <MoreBG width="100%" preserveAspectRatio="xMinYMin slice" />
      <View style={styles.contentContainer}>
        <Image source={require('../../../assets/brand/logo-white.png')} />
        {user ? (
          <TouchableOpacity
            style={styles.actionContainer}
            onPress={() => navigateToScreen(screenNames.DEVOTIONALS)}>
            <View style={styles.textContainer}>
              <Text style={[styles.mainText, { textTransform: 'capitalize' }]}>
                {`${user.fname || ''} ${user.lname || ''}`}
              </Text>
              <Text style={styles.subText}>
                Have you read your bible today?
              </Text>
            </View>
            <ChevronDown />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.actionContainer}
            onPress={() => navigateToScreen(screenNames.LOGIN)}>
            <View style={styles.textContainer}>
              <Text style={styles.mainText}>Hey! You aren't logged in.</Text>
              <Text style={styles.subText}>
                Login or Create an account here
              </Text>
            </View>
            <ChevronDown />
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.appVersion}>Version: {getVersion()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  contentContainer: {
    position: 'absolute',
    left: 40,
    bottom: 31,
    right: 40,
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: scaledHeight(33),
  },
  textContainer: {
    gap: scaledHeight(2),
  },
  mainText: {
    color: appColors.white,
    fontFamily: DMBold,
    fontSize: fontScale(13),
  },
  subText: {
    color: appColors.white,
    fontFamily: DMRegular,
    fontSize: fontScale(10),
    lineHeight: lineHeightSmall,
  },
  appVersion: {
    position: 'absolute',
    top: 10,
    right: 10,
    color: appColors.grey,
    fontFamily: DMRegular,
    fontSize: fontScale(5),
  },
});
export default MoreHeader;
