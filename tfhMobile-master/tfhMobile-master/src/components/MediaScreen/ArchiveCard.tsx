import { StyleSheet, TouchableOpacity, Linking, Text } from 'react-native';
import React from 'react';
import Card from '../../common/Card';
import { ArchiveType } from './archiveChannels';
import { DMRegular } from '../../theme/fonts';
import appColors from '../../theme/colors';
import { fontScale } from '../../functions/font';
import { scaledHeight, scaledWidth } from '../../functions/utils';

const ArchiveCard = ({ channel }: { channel: ArchiveType }) => {
  return (
    <TouchableOpacity onPress={() => Linking.openURL(channel.link)}>
      <Card containerStyle={styles.container}>
        {channel.image}
        <Text style={styles.label}>{channel.label}</Text>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: scaledHeight(17),
    paddingHorizontal: scaledWidth(17),
    height: scaledHeight(79),
    gap: scaledWidth(20),
  },
  label: {
    fontFamily: DMRegular,
    color: appColors.black,
    fontSize: fontScale(9),
  },
});

export default ArchiveCard;
