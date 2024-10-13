import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import appColors from '../../../theme/colors';
import { DMBold, DMRegular } from '../../../theme/fonts';
import LiveIcon from '../../../assets/icons/svgs/media/live.svg';
import { fontScale, lineHeightSmall } from '../../../functions/font';
import { scaledHeight, scaledWidth } from '../../../functions/utils';

const MediaCard = ({
  icon,
  mainText,
  subText,
  showInfoText = false,
  isLive = false,
  destination,
  navigateToScreen,
}: {
  icon: React.ReactNode;
  mainText: string;
  subText: string;
  showInfoText?: boolean;
  destination: string;
  navigateToScreen: (screenName: string) => void;
  isLive?: boolean;
}) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigateToScreen(destination)}>
      <View style={styles.container}>
        {icon}
        <View style={{ flex: 1 }}>
          <Text style={styles.mainText}>{mainText}</Text>
          <Text style={styles.subText}>{subText}</Text>
          {showInfoText && (
            <View style={styles.infoTextContainer}>
              {isLive ? (
                <>
                  <LiveIcon />
                  <Text style={styles.infoText}>We're Live!</Text>
                </>
              ) : (
                <Text style={styles.infoText}>
                  <Text style={styles.infoText}>No Livestream going on!</Text>
                </Text>
              )}
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: appColors.white,
    shadowColor: '#d8d0ff',
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
    elevation: 24,
    paddingVertical: scaledHeight(23),
    paddingRight: scaledWidth(15),
    paddingLeft: scaledWidth(38),
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scaledWidth(40),
  },
  mainText: {
    fontFamily: DMBold,
    fontSize: fontScale(16),
    color: appColors.primaryColor,
    marginBottom: scaledHeight(6),
  },
  subText: {
    color: appColors.black,
    fontSize: fontScale(10),
    fontFamily: DMRegular,
    lineHeight: lineHeightSmall,
  },
  infoTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scaledWidth(3),
    marginTop: scaledHeight(4),
  },
  infoText: {
    color: appColors.red,
    fontSize: fontScale(10),
    lineHeight: lineHeightSmall,
    fontFamily: DMBold,
  },
});

export default MediaCard;
