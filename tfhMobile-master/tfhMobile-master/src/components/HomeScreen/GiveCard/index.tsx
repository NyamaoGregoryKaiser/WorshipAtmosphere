import { View, Text } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { DMBold } from '../../../theme/fonts';
import appColors from '../../../theme/colors';
import Button from '../../../common/Button';
import { fontScale } from '../../../functions/font';
import GiftIcon from '../../../assets/icons/svgs/home/gift.svg';
import SectionTitle from '../../../common/SectionTitle';
import tabNames from '../../../routes/AppTabs/tabNames';
import { scaledHeight, scaledWidth } from '../../../functions/utils';

const GiveCard = ({
  navigateToScreen,
}: {
  navigateToScreen: (screenName: string) => void;
}) => {
  return (
    <View style={styles.container}>
      <SectionTitle mainText="Giving" />

      <View style={styles.card}>
        <GiftIcon height={'100%'} />
        <View style={{ flexDirection: 'column', gap: 10 }}>
          <Text style={styles.title}>Give to The Father's House Church</Text>
          <Button
            title="Giving Options"
            buttonStyle={styles.buttonStyle}
            textStyle={{
              fontSize: fontScale(9),
            }}
            onPress={() => navigateToScreen(tabNames.GIVE)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scaledWidth(16),
    marginTop: scaledHeight(30),
  },
  card: {
    paddingVertical: scaledHeight(13),
    paddingHorizontal: scaledWidth(25),
    backgroundColor: '#FFF5F2',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: scaledWidth(23),
  },
  title: {
    fontFamily: DMBold,
    fontSize: fontScale(15),
    color: appColors.secondaryColor,
  },
  buttonStyle: {
    maxWidth: scaledWidth(159),
    height: scaledHeight(32),
    borderRadius: 3.88,
    backgroundColor: appColors.primaryColor,
  },
});

export default GiveCard;
