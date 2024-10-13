import { View, Text } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { DMBold } from '../../theme/fonts';
import ChurchMemberItem from './ChurchMemberItem';
import appColors from '../../theme/colors';
import { fontScale } from '../../functions/font';
import { scaledHeight, scaledWidth } from '../../functions/utils';

type Props = {
  value: boolean | undefined;
  showError: boolean;
  error?: string;
  selectMemberStatus: (status: boolean) => void;
};

const ChurchMemberLayout = ({
  value,
  showError,
  error,
  selectMemberStatus,
}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Are you a member of The Father's House Church?
      </Text>
      <View style={styles.controlContainer}>
        <ChurchMemberItem
          title="Yes, I am a Member"
          selected={value === true}
          onPress={() => selectMemberStatus(true)}
        />
        <ChurchMemberItem
          title="No, I'm Just Visiting"
          selected={value === false}
          onPress={() => selectMemberStatus(false)}
        />
      </View>
      <>{showError && <Text style={styles.errorText}>{error}</Text>}</>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: scaledHeight(10),
  },
  label: {
    fontFamily: DMBold,
    fontSize: fontScale(10),
    marginBottom: scaledHeight(10),
  },
  errorText: {
    fontSize: fontScale(10),
    color: appColors.errorColor,
    alignSelf: 'flex-start',
    marginTop: scaledHeight(3),
  },
  controlContainer: {
    flexDirection: 'row',
    gap: scaledWidth(17),
  },
});

export default ChurchMemberLayout;
