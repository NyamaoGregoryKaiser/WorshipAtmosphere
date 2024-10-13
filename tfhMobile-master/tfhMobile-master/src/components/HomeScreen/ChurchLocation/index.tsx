import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import React from 'react';
import SectionTitle from '../../../common/SectionTitle';
import Card from '../../../common/Card';
import Button from '../../../common/Button';
import { DMBold, DMRegular } from '../../../theme/fonts';
import appColors from '../../../theme/colors';
import { fontScale } from '../../../functions/font';
import { screenNames } from '../../../screens/screenNames';
import { scaledHeight, scaledWidth } from '../../../functions/utils';

const ChurchLocation = ({
  navigateToScreen,
}: {
  navigateToScreen: (screenName: string) => void;
}) => {
  return (
    <View style={styles.container}>
      <SectionTitle mainText="Church Locations" />

      <Card>
        <View style={styles.contentContainer}>
          <Image
            source={require('../../../assets/images/home/church.png')}
            style={{
              height: '100%',
              borderRadius: 6,
            }}
          />
          <View style={styles.detailsContainer}>
            <Text style={styles.textHeader}>Find a branch close to you</Text>
            <Text style={styles.title}>
              We have centres across Africa and Europe. Find one that is closest
              to you.
            </Text>

            <Button
              onPress={() => navigateToScreen(screenNames.CHURCH_LOCATION)}
              title="Find a Church"
              buttonStyle={styles.buttonStyle}
              textStyle={{
                fontSize: fontScale(9),
              }}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scaledWidth(16),
    marginTop: scaledHeight(30),
  },
  contentContainer: {
    paddingVertical: scaledHeight(12),
    paddingHorizontal: scaledWidth(7),
    flexDirection: 'row',
    gap: scaledWidth(13),
    alignItems: 'center',
  },
  detailsContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  textHeader: {
    fontFamily: DMBold,
    fontSize: fontScale(15),
    color: appColors.primaryColor,
    maxWidth: scaledWidth(235),
    marginBottom: scaledHeight(5),
  },
  title: {
    fontFamily: DMRegular,
    fontSize: fontScale(8),
    color: appColors.black,
    marginBottom: scaledHeight(20),
    maxWidth: scaledWidth(225),
  },

  buttonStyle: {
    maxWidth: scaledWidth(159),
    height: scaledHeight(32),
    borderRadius: 3.88,
  },
});

export default ChurchLocation;
